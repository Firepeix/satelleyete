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
      worldWind: null,
      selectSatellite: false
    }
  },
  methods: {
    construct () {
      this.setupCanvas();
      this.createWorldwind();
      this.worldWind.createBasicLayers();
      this.worldWind.createSatelliteLayers();
      this.worldWind.addSatellites(this.satellites);
    },
    setupCanvas () {
      const canvas = this.$el.querySelector('#main-view');
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight - (48 * 3);
    },
    async update (event) {
      if (this.selectSatellite) {
        this.worldWind.update(event.clientX, event.clientY);
      }
    },
    createWorldwind () {
      WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);
      this.worldWind = new WorldWindWrapper(new WorldWind.WorldWindow("main-view"));
    },
  },
  props: {
    /**
     * @param {[Satellite]}
     */
    satellites: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.$nextTick(() => this.construct())
  }
};
</script>

<style scoped>

</style>