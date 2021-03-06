<template>
  <v-container flat>
    <v-app-bar
      absolute
      color="primary"
      dark
      flat
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
      height="200px"
      class="bottomRightRadius bottomLeftRadius"
    >
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <v-app-bar-nav-icon @click="$router.push('homeMember')"
        ><v-avatar class="avatarBack" color="white" size="30"
          ><v-icon color="black" size="40">mdi-chevron-left</v-icon></v-avatar
        ></v-app-bar-nav-icon
      >

      <v-app-bar-title class="position-absolute titleBarGrooms">
        <span class="fs28 weight-700 darkenColor">Grooming</span>
      </v-app-bar-title>

      <div class="position-absolute dogLeft">
        <v-img src="@/assets/Landing/dog-left.png"></v-img>
      </div>

      <div class="position-absolute kittyLeft">
        <v-img src="@/assets/Landing/kitty-left.png"></v-img>
      </div>

    </v-app-bar>
    <v-sheet id="scrolling-techniques-5" class="overflow-y-auto noPointer" height="200px">
      <v-container style="height: 1000px;"> </v-container>
    </v-sheet>

    <v-card flat class="py-2" v-if="toggle_exclusive == 0">
      <v-card-text>
        <v-row align="center" justify="center">
          <v-btn-toggle dense v-model="toggle_exclusive" rounded>
            <v-btn class="fs11 white--text" color="black">
              Grooming Place
            </v-btn>
            <v-btn class="fs11" @click="$router.push('groomer').catch(err => {})">
              <span class="black--text">Groomer</span>
            </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card flat class="py-2" v-else>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-btn-toggle dense v-model="toggle_exclusive" rounded>
            <v-btn class="fs11" @click="$router.push('groomingPlace').catch(err => {})">
              <span class="black--text">Grooming Place</span>
            </v-btn>
            <v-btn class="fs11 white--text" color="black">
              Groomer
            </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-card-text>
    </v-card>

    <v-main>
      <router-view></router-view>
    </v-main>

    <BottomNavigation ></BottomNavigation>
    
  </v-container>
</template>

<script>
import BottomNavigation from "@/components/BottomNavigation.vue"
export default {
  components: { BottomNavigation },
  data: () => ({
    value: 0,
    toggle_exclusive: 0
  }),
};
</script>

<style>
@import "../../../src/assets/css/main.css";
.titleBarGrooms {
  right: 7%;
  top: 20%;
}
.dogLeft {
  bottom: -2%;
  left: 0;
}
.kittyLeft {
  bottom: 0;
  left: 29%;
}
</style>
