<template>
  <div>
    <v-layout fill-height>
      <v-navigation-drawer absolute bottom v-model="drawer" temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  
    <v-app-bar
      class="appbar bgTransparent"
      app
      elevation="0"
      flat
      dense
      hide-on-scroll
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      >
        <v-icon color="darkenPrimary">
          mdi-menu
        </v-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-avatar size="28">
        <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="John" />
      </v-avatar>
    </v-app-bar>

    <v-main style="padding:6px 0px 0px 12px">
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation :value="value" grow fixed>
      <v-btn>
        <v-avatar color="primary" size="35">
          <v-icon color="black">mdi-home</v-icon>
        </v-avatar>
      </v-btn>

      <v-btn>
        <v-avatar size="35">
          <v-icon color="black">mdi-book</v-icon>
        </v-avatar>
      </v-btn>

      <v-btn>
        <v-avatar size="35">
          <v-icon color="black">mdi-bullhorn</v-icon>
        </v-avatar>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: 0,
    group : null,
    adminName: "tes",
    adminImage: "https://randomuser.me/api/portraits/men/85.jpg",
    drawer: null,
  }),
};
</script>

<style scoped>
@import "../../../src/assets/css/main.css";
</style>
