<template>
  <div>
    <world-wind v-if="satellites.length > 0" :satellites="satellites"/>
  </div>
</template>

<script>
import WorldWind from '../components/nasa/world/WorldWind';
import Satellite from '../classes/Body/Satellite';

export default {
  name: 'Index',
  data () {
    return {
      satellites: []
    }
  },
  methods: {
    construct () {
      this.getSatellites();
    },
    async getSatellites () {
      const response = await this.$axios.get(`${this.$apiUrl}/satellites`);
      if (response.status === 200) {
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        })
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        })
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        });
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        })
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        })
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        })
        response.data.forEach(basicSatellite => {
          this.satellites.push(new Satellite(...Object.values(basicSatellite)))
        })

      }
    }
  },
  mounted () {
    this.$nextTick(() => this.construct());
  },
  components: { WorldWind }
};
</script>

<style scoped>

</style>