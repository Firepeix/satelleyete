import WorldWind from '@nasaworldwind/worldwind';

export default class WorldWindWrapper {
  /**
   * @param {WorldWind} worldwind
   */
  constructor (worldwind) {
    this._worldWind = worldwind;
    this._scenes = [];
    this._layers = {};
  }

  createBasicLayers () {
    this._addLayers(this.basicLayers)
  }

  update (mouseX, mouseY) {
    this._worldWind.redraw();
  }

  addModel(path, file, position, layer, scale = 5000) {
    const colladaLoader = new WorldWind.ColladaLoader(position);
    colladaLoader.init({dirPath: path});
    colladaLoader.load(file, scene => {
      scene.scale = scale;
      this._layers[layer].addRenderable(scene);
      this._scenes.push(scene);
    });
  }

  _addLayers(layers, names = null) {
    layers.forEach((layer, index) => {
      layer.layer.enabled = layer.enabled;
      this._worldWind.addLayer(layer.layer)
      if (names !== null) {
        this._layers[names[index]] = layer.layer
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
      { layer: new WorldWind.BMNGLandsatLayer(), enabled: false },
      { layer: new WorldWind.BingAerialLayer(null), enabled: false },
      { layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: false },
      { layer: new WorldWind.BingRoadsLayer(null), enabled: false },
      // Add atmosphere layer on top of all base layers.
      { layer: new WorldWind.AtmosphereLayer(), enabled: true },
      // WorldWindow UI layers.
      { layer: new WorldWind.CoordinatesDisplayLayer(this._worldWind), enabled: true },
    ];
  }

  get satelliteLayers () {
    return {
      activeAmateurSatellites: { layer: new WorldWind.RenderableLayer('activeAmateurSatellites'), enabled: true }
    };
  }

}