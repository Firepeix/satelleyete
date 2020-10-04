<template>
  <v-list>
    <v-list-item>
      <v-text-field v-model="search" clearable color="#34DAFF" prepend-icon="mdi-magnify" label="Search" ></v-text-field>
    </v-list-item>
    <v-list-item-group color="white">
    <v-list-item v-for="satellite in filteredSatellite" :key="satellite.id" link>
      <v-list-item-icon>
        <v-icon style="color: white" v-text="'mdi-satellite-variant'"></v-icon>
      </v-list-item-icon>
      <v-list-item-content @click="$emit('select-sat', satellite.id)" @hover="$emit('hover-sat', satellite.id)">
        <v-list-item-title style="color: white">{{ satellite.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>

export default {
  name: 'SatelliteList',
  data () {
    return {
      search: '',
      filteredSatellite: []
    }
  },
  watch: {
    search () {
      if (this.search !== '' && this.search !== null) {
        this.filteredSatellite = this.searchSatellites();
        return;
      }
      this.filteredSatellite = this.satellites;
    },
    satellites () {
      if (this.search !== '' && this.search !== null) {
        this.filteredSatellite = this.searchSatellites();
        return;
      }
      this.filteredSatellite = this.satellites;
    }
  },
  methods: {
    searchSatellites () {
      return this.satellites.filter(satellite => satellite.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
    }
  },
  props: {
    satellites: {
      /**
       * @param {[Satellite]}
       */
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.filteredSatellite = this.satellites;
    })
  }
};
</script>

<style lang="stylus">
label.v-label.theme--light, .v-icon.notranslate.mdi.mdi-magnify.theme--light
  color white;
.theme--light.v-input input
  color white !important
.theme--light.v-text-field > .v-input__control>.v-input__slot:before {
  border-color: white !important;
  border-top-color: white !important;
  border-right-color: white !important;
  border-bottom-color: white !important;
  border-left-color: white !important;
}
</style>