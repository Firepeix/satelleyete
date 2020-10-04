<template>
<div class="main-layout">
  <v-app-bar app color="#57B8FF">
    <v-app-bar-nav-icon  @click="navbar = !navbar"></v-app-bar-nav-icon>
    <v-toolbar-title class="text--white">Application</v-toolbar-title>
  </v-app-bar>
  <v-main>
    <v-container style="max-width: none">
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
  <v-footer color="#57B8FF" absolute class="font-weight-medium">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</div>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      navbar: false
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
</style>