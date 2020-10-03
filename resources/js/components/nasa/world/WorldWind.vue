<template>
  <div>
    <canvas id="main-view" style="width: 100%; height: auto; background-color: black;">
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
    },
    setupCanvas () {
      const canvas = this.$el.querySelector('#main-view');
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
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