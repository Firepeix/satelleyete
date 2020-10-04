import WorldWind from '@nasaworldwind/worldwind';

export default class WorldWindWrapper {
  /**
   * @param {WorldWind} worldwind
   */
  constructor (worldwind) {
    this._worldWind = worldwind;
    this._scenes = [];
    this._satellites = [];
    this._layers = {};
    this._prepareWorldWind();
  }

  _prepareWorldWind () {
    this._worldWind.navigator.range = 100981352;
    this._worldWind.redraw();
  }

  createBasicLayers () {
    this._addLayers(this.basicLayers);
  }

  /**
   * @param {[Satellite]} satellites
   */
  addSatellites (satellites) {
    this._satellites = satellites;
    this._renderSatellites();
  }

  _renderSatellites () {
    this._satellites.forEach(satellite => {
      this.addModel('/objects/macro/', satellite.object, new WorldWind.Position(satellite.lat, satellite.long, satellite.height), 'activeAmateurSatellites');
    });
  }

  async update (mouseX, mouseY) {
    const clickPoint = this._worldWind.canvasCoordinates(mouseX, mouseY);
    const clickRay = this._worldWind.rayThroughScreenPoint(clickPoint);
    this._scenes.forEach((scene, index) => {
      this.pick(scene, clickRay, index);
    })
  }

  async pick (scene, click, index) {
    return new Promise((resolve, reject) => {
      console.log(index);
      const intersections = [];
      if (scene.hasBeenClicked(this._worldWind.globe, click)) {
        console.log(22222222);
      }
      resolve();
    });
  }

  addModel (path, file, position, layer, scale = 5000) {
    const colladaLoader = new WorldWind.ColladaLoader(position);
    colladaLoader.init({ dirPath: path });
    colladaLoader.load(file, scene => {
      scene.scale = scale;
      this._layers[layer].addRenderable(scene);
      this._addComputePointsToScene(scene);
      this._addPickMethodToScene(scene);
      this._addClickMethodToScene(scene);
      this._scenes.push(scene);
    });
  }

  _addLayers (layers, names = null) {
    layers.forEach((layer, index) => {
      layer.layer.enabled = layer.enabled;
      this._worldWind.addLayer(layer.layer);
      if (names !== null) {
        layer.layer.pickEnabled = true;
        this._layers[names[index]] = layer.layer;
      }
    });
  }

  createSatelliteLayers () {
    const layers = this.satelliteLayers;
    this._addLayers(Object.values(layers), Object.keys(layers));

  }

  get basicLayers () {
    return [
      // Imagery layers.
      { layer: new WorldWind.BMNGLayer(), enabled: true },
      { layer: new WorldWind.BMNGLandsatLayer(), enabled: true },
      { layer: new WorldWind.BingAerialLayer(null), enabled: false },
      { layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: false },
      { layer: new WorldWind.BingRoadsLayer(null), enabled: false },
      // Add atmosphere layer on top of all base layers.
      { layer: new WorldWind.AtmosphereLayer(), enabled: true },
      // WorldWindow UI layers.
      { layer: new WorldWind.CoordinatesDisplayLayer(this._worldWind), enabled: true }
    ];
  }

  get satelliteLayers () {
    return {
      activeAmateurSatellites: { layer: new WorldWind.RenderableLayer('activeAmateurSatellites'), enabled: true }
    };
  }

  // Taken from The Worldwind Github Project
  _addPickMethodToScene (scene) {
    const self = this;
    scene.computePointIntersections = function (globe, pointRay, results) {
      if (this._currentData === undefined) {
        this._currentData = { expired: true, transformedPoints: [] };
      }
      if (!globe) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene",
          "computePointIntersections", "missingGlobe"));
      }

      if (!pointRay) {
        throw new ArgumentError(
          Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene",
            "computePointIntersections", "missingRay"));
      }

      if (!results) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene",
          "computePointIntersections", "missingResults"));
      }

      var eyePoint = pointRay.origin;
      var computeTransforms = this._currentData.transformedPoints.length <= this._entities.length;
      if (computeTransforms) {
        this._currentData.transformedPoints = [];
      }
      var eyeDists = [];
      for (var i = 0, len = this._entities.length; i < len; i++) {
        var mesh = this._entities[i].mesh;
        if (computeTransforms) {
          this._currentData.transformedPoints.push(this.computeTransformedPoints(mesh));
        }
        var intersectionPoints = [];
        if (self.computeTriangleListIntersection(pointRay,
          this._currentData.transformedPoints[i], intersectionPoints)) {
          for (var j = 0, iLen = intersectionPoints.length; j < iLen; j++) {
            var position = new WorldWind.Position(0, 0, 0);
            globe.computePositionFromPoint(intersectionPoints[j][0],
              intersectionPoints[j][1], intersectionPoints[j][2], position);
            var jEyeDist = intersectionPoints[j].distanceTo(eyePoint);
            var inserted = false;
            for (var k = 0, eLen = eyeDists.length; k < eLen && !inserted; k++) {
              if (jEyeDist < eyeDists[k]) {
                results.splice(k, 0, position);
                eyeDists.splice(k, 0, jEyeDist);
                inserted = true;
              }
            }
            if (!inserted) {
              results.push(position);
              eyeDists.push(jEyeDist);
            }
          }
        }
      }
      return results.length > 0;
    };
  }

  _addClickMethodToScene (scene) {
    const self = this;
    scene.hasBeenClicked = function (globe, pointRay) {
      if (this._currentData === undefined) {
        this._currentData = { expired: true, transformedPoints: [] };
      }
      if (!globe) {
        throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene",
          "computePointIntersections", "missingGlobe"));
      }

      if (!pointRay) {
        throw new ArgumentError(
          Logger.logMessage(Logger.LEVEL_SEVERE, "ColladaScene",
            "computePointIntersections", "missingRay"));
      }

      var computeTransforms = this._currentData.transformedPoints.length <= this._entities.length;
      if (computeTransforms) {
        this._currentData.transformedPoints = [];
      }
      for (var i = 0, len = this._entities.length; i < len; i++) {
        var mesh = this._entities[i].mesh;
        if (computeTransforms) {
          this._currentData.transformedPoints.push(this.computeTransformedPoints(mesh));
        }
        var intersectionPoints = [];
        return self.computeTriangleListIntersection(pointRay,
          this._currentData.transformedPoints[i], intersectionPoints)
      }
      return false;
    };
  }

  // Taken from The Worldwind Github Project
  _addComputePointsToScene (scene) {
    scene.computeTransformedPoints = function (mesh) {
      var vtxs = mesh.vertices;
      var points = [];
      if (mesh.indexedRendering) {
        var idxs = mesh.indices;
        for (var i = 0, len = idxs.length; i < len; i += 3) {
          for (var j = 0; j < 3; j++) {
            var vtxOfs = idxs[i + j] * 3;
            var vtx = new WorldWind.Vec3(vtxs[vtxOfs], vtxs[vtxOfs + 1], vtxs[vtxOfs + 2]);
            vtx.multiplyByMatrix(this._transformationMatrix);
            points.push(vtx);
          }
        }
      } else {
        for (var i = 0, len = vtxs.length; i < len; i += 3) {
          var vtx = new WorldWind.Vec3(vtxs[i], vtxs[i + 1], vtxs[i + 2]);
          vtx.multiplyByMatrix(this._transformationMatrix);
          points.push(vtx);
        }
      }

      return points;
    };
  }

  computeTriangleIntersection (line, vertex0, vertex1, vertex2, result) {
    if (!line) {
      throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath",
        "computeTriangleIntersection", "missingLine"));
    }

    if (!vertex0 || !vertex1 || !vertex2) {
      throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath",
        "computeTriangleIntersection", "missingVertex"));
    }

    if (!result) {
      throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath",
        "computeTriangleIntersection", "missingResult"));
    }

    // Taken from Moller and Trumbore
    // https://www.cs.virginia.edu/~gfx/Courses/2003/ImageSynthesis/papers/Acceleration/Fast%20MinimumStorage%20RayTriangle%20Intersection.pdf

    var vx = line.direction[0],
      vy = line.direction[1],
      vz = line.direction[2],
      sx = line.origin[0],
      sy = line.origin[1],
      sz = line.origin[2],
      EPSILON = 0.00001;

    // find vectors for two edges sharing point a: vertex1 - vertex0 and vertex2 - vertex0
    var edge1x = vertex1[0] - vertex0[0],
      edge1y = vertex1[1] - vertex0[1],
      edge1z = vertex1[2] - vertex0[2],
      edge2x = vertex2[0] - vertex0[0],
      edge2y = vertex2[1] - vertex0[1],
      edge2z = vertex2[2] - vertex0[2];

    // Compute cross product of line direction and edge2
    var px = (vy * edge2z) - (vz * edge2y),
      py = (vz * edge2x) - (vx * edge2z),
      pz = (vx * edge2y) - (vy * edge2x);

    // Get determinant
    var det = edge1x * px + edge1y * py + edge1z * pz; // edge1 dot p
    if (det > -EPSILON && det < EPSILON) { // if det is near zero then ray lies in plane of triangle
      return false;
    }

    var inv_det = 1.0 / det;

    // Compute distance for vertex A to ray origin: origin - vertex0
    var tx = sx - vertex0[0],
      ty = sy - vertex0[1],
      tz = sz - vertex0[2];

    // Calculate u parameter and test bounds: 1/det * t dot p
    var u = inv_det * (tx * px + ty * py + tz * pz);
    if (u < -EPSILON || u > 1 + EPSILON) {
      return false;
    }

    // Prepare to test v parameter: t cross edge1
    var qx = (ty * edge1z) - (tz * edge1y),
      qy = (tz * edge1x) - (tx * edge1z),
      qz = (tx * edge1y) - (ty * edge1x);

    // Calculate v parameter and test bounds: 1/det * dir dot q
    var v = inv_det * (vx * qx + vy * qy + vz * qz);
    if (v < -EPSILON || u + v > 1 + EPSILON) {
      return false;
    }

    // Calculate the point of intersection on the line: t = 1/det * edge2 dot q
    var t = inv_det * (edge2x * qx + edge2y * qy + edge2z * qz);
    if (t < 0) {
      return false;
    } else {
      result[0] = sx + vx * t;
      result[1] = sy + vy * t;
      result[2] = sz + vz * t;
      return true;
    }
  }

  computeTriangleListIntersection (line, points, results) {
    if (!line) {
      throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath",
        "computeIndexedTrianglesIntersection", "missingLine"));
    }

    if (!points) {
      throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath",
        "computeIndexedTrianglesIntersection", "missingPoints"));
    }

    if (!results) {
      throw new ArgumentError(Logger.logMessage(Logger.LEVEL_SEVERE, "WWMath",
        "computeIndexedTrianglesIntersection", "missingResults"));
    }
    var iPoint = new WorldWind.Vec3(0, 0, 0);
    for (var i = 0, len = points.length; i < len; i += 3) {
      if (this.computeTriangleIntersection(line, points[i], points[i + 1], points[i + 2], iPoint)) {
        results.push(iPoint);
        iPoint = new WorldWind.Vec3(0, 0, 0);
      }
    }

    return results.length > 0;
  }
}