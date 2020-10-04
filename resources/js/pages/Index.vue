<template>
  <div>
    <world-wind ref="world" :select-satellites="selectSatellites" v-if="satellites.length > 0" :satellites="satellites"/>
    <v-dialog persistent v-if="selectedSatellite !== null" hide-overlay v-model="satelliteInfo" width="400">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Satellite: {{ displaySatellite.name }}
        </v-card-title>
        <v-card-text>
            <div class="header d-flex justify-space-between">
              <div>Latitude</div>
              <div>Longitude</div>
              <div>Altitude</div>
            </div>
            <div class="d-flex justify-space-between">
              <div>{{ displaySatellite.lat < 0 ? String(displaySatellite.lat * -1).slice(0,6) : String(displaySatellite.lat).slice(0,6)}}° {{displaySatellite.lat < 0 ? 'S' : 'N'}}</div>
              <div>{{ displaySatellite.long < 0 ? String(displaySatellite.long * -1).slice(0,6) : String(displaySatellite.long).slice(0,6)}}° {{displaySatellite.long < 0 ? 'W' : 'E'}}</div>
              <div>{{ String(displaySatellite.height).slice(0,5) }}m</div>
            </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="satelliteInfo = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import WorldWind from '../components/nasa/world/WorldWind';
import Satellite from '../classes/Body/Satellite';

export default {
  name: 'Index',
  data () {
    return {
      satelliteInfo: false,
      selectedSatellite: null,
      satellites: [],
      selectSatellites: false
    }
  },
  computed: {
    displaySatellite () {
      return this.satellites.find(satellite => satellite.id === this.selectedSatellite)
    }
  },
  watch: {
    selectedSatellite () {
      this.$refs.world.selectSatellite(this.selectedSatellite)
    }
  },
  methods: {
    construct () {
      this.getSatellites();
    },
    async getSatellites () {
      const response = await this.$axios.get(`${this.$apiUrl}/satellites`);
      if (response.status === 200) {
        response.data.forEach(basicSat => {
          if (basicSat.lat !== undefined) {
            const satellite = new Satellite(basicSat.id, basicSat.lat, basicSat.long, basicSat.height, basicSat.name, basicSat.status, basicSat.type);
            this.satellites.push(satellite)
          }
        });
        this.$emit('input', this.satellites)
      }
    },
    enableSelectSatellites () {
      this.selectSatellites = true;
    },
    hoverSat (id) {

    },
    selectSat (id) {
      if (id === this.selectedSatellite) {
        this.selectedSatellite = null;
      }
      this.selectedSatellite = id;
      this.satelliteInfo = true;
    }
  },
  mounted () {
    this.$nextTick(() => this.construct());
  },
  components: { WorldWind }
};
</script>

<style lang="stylus">
.v-dialog
  margin: 24px 24px 154px 24px;
  .v-card__text
    padding-top 24px !important
    .header
      font-weight 800
.v-dialog__content {
  justify-content: flex-start;
}
</style>