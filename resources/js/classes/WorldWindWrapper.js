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

  update (mouseX, mouseY) {
    const clickPoint = this._worldWind.canvasCoordinates(mouseX, mouseY);
    const clickRay = this._worldWind.rayThroughScreenPoint(clickPoint);
    let pickedScene = null;
    let index = 0;
    while (pickedScene === null && index < this._scenes.length) {
      pickedScene = this.pick(this._scenes[index], clickRay, index);
      console.log(index);
      index++;
    }
  }

  pick (scene, click) {
    if (scene.hasBeenClicked(this._worldWind.globe, click)) {
      return scene;
    }
    return null;
  }

  addModel (path, file, position, layer, scale = 5000) {
    const colladaLoader = new WorldWind.ColladaLoader(position);
    colladaLoader.init({ dirPath: path });
    colladaLoader.load(file, scene => {
      scene.scale = scale;
      this._layers[layer].addRenderable(scene);
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

  selectSatellite (satellite) {
    this._worldWind.goTo(new WorldWind.Position(satellite.lat, satellite.long, satellite.height + 3e6))
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
}
