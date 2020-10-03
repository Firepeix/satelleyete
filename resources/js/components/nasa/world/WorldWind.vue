<template>
  <div>
    <canvas @click="update" id="main-view" style="width: 100%; height: auto; background-color: black;">
      Your browser does not support HTML5 Canvas.
    </canvas>
  </div>
</template>

<script>
import WorldWind from '@nasaworldwind/worldwind';
import WorldWindWrapper from '../../../classes/WorldWindWrapper';

export default {
  name: 'WorldWind',
  data () {
    return {
      worldWind: null
    }
  },
  methods: {
    construct () {
      this.setupCanvas();
      this.createWorldwind();
      this.worldWind.createBasicLayers();
      this.worldWind.createSatelliteLayers();
      this.worldWind.addModel('/objects/macro/', 'ball.dae', new WorldWind.Position(45, -100, 1000e3), 'activeAmateurSatellites');
    },
    setupCanvas () {
      const canvas = this.$el.querySelector('#main-view');
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
    },
    update (event) {
    },
    createWorldwind () {
      WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);
      this.worldWind = new WorldWindWrapper(new WorldWind.WorldWindow("main-view"));
    },
  },
  mounted () {
    this.$nextTick(() => this.construct())
  }
};
</script>

<style scoped>

</style>