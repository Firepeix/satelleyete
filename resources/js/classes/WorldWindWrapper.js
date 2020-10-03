import WorldWind from '@nasaworldwind/worldwind';

export default class WorldWindWrapper {
  /**
   * @param {WorldWind} worldwind
   */
  constructor (worldwind) {
    this._worldWind = worldwind;
  }

  createBasicLayers () {
    this.basicLayers.forEach(layer => {
      layer.layer.enabled = layer.enabled;
      this._worldWind.addLayer(layer.layer)
    });
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
      { layer: new WorldWind.CompassLayer(), enabled: true },
      { layer: new WorldWind.CoordinatesDisplayLayer(this._worldWind), enabled: true },
      { layer: new WorldWind.ViewControlsLayer(this._worldWind), enabled: true }
    ];
  }
}