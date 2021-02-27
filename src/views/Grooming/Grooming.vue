<template>
  <v-container flat>
    <v-app-bar
      absolute
      color="primary"
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
      height="200px"
      class="bottomRightRadius"
    >
      <!-- <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template> -->

      <v-app-bar-nav-icon><v-icon color="black" size="40">mdi-chevron-left</v-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      height="200px"
    >
      <v-container style="height: 1000px;">

      </v-container>
    </v-sheet>
    <!-- <v-container style="height: 1000px;" id="scrolling-techniques-5" class="overflow-y-auto">

    </v-container> -->
    <v-card
    flat
    class="py-12"
  >
    <v-card-text>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn-toggle
          v-model="toggle_exclusive"
          rounded
        >
          <v-btn class="fs11" color="black">
              Grooming Place
          </v-btn>
          <v-btn class="fs11">
              Groomer
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>

  <p class="fs14 welcome" style="text-align:center;">
    Meet with our profesional personal groomer, to make your pets look cute
    </p>

  </v-container>
</template>

<script>
export default {
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
}
</script>

<style>
@import "../../../src/assets/css/main.css";
.bottomRightRadius {
    border-bottom-right-radius: 50px !important;
}
</style>