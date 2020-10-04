<template>
<div class="main-layout">
  <v-app-bar app color="#57B8FF">
    <div class="logo">
      <v-toolbar-title class="text--white">
       <div class="d-flex">
         <v-img src="images/logo-pic.png" width="114px"></v-img>
         <v-img src="images/logo-name.png" width="339px" style="margin-left: 24px;"></v-img>
       </div>
      </v-toolbar-title>
    </div>
    <div class="action">
      <v-toolbar-items>
        <!--v-btn depressed @click="selectSatellite" color="#57B8FF" large style="padding: 9px 20px; color: white">Select Satellite</v-btn-->
      </v-toolbar-items>
    </div>
  </v-app-bar>
  <v-main>
    <v-container style="max-width: none">
      <v-row>
        <v-col>
          <router-view v-model="satellites" ref="page"></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-footer color="#57B8FF" absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
      2020 — <strong>NASA Hackathon</strong>
    </v-col>
  </v-footer>
  <v-navigation-drawer right v-model="navbar" color="#0069B5" app>
    <satellite-list @select-sat="id => $refs.page.selectSat(id)" @hover-sat="id => $refs.page.hoverSat(id)" :satellites="satellites" />
  </v-navigation-drawer>
</div>
</template>
<script>
import SatelliteList from '../components/nasa/world/SatelliteList';
export default {
  name: 'MainLayout',
  components: { SatelliteList },
  data () {
    return {
      navbar: true,
      satellites: []
    }
  },
  methods: {
    selectSatellite () {
      this.navbar = !this.navbar;
    }
  }
};
</script>
<style scoped lang="stylus">
.main-layout
  background-color black
</style>
<style lang="stylus">
.v-application--wrap
  background-color black
.v-toolbar__content
  justify-content space-between
</style>
