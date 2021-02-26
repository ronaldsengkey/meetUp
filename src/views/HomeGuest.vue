<template>
  <div>
    <v-container fluid class="ma-0">
      <v-carousel
        cycle
        height="150"
        class="rounded-xl mb-5"
        :show-arrows="false"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <p class="fs14 weight-700 username">
        What do you need?<span class="float-right fs14 welcome"
          >More <v-icon class="welcome">mdi-arrow-right</v-icon></span
        >
      </p>

      <v-layout align-center justify-center class="mb-5">
        <v-card
          class="border primary mr-2"
          outlined
          hover
          height="100"
          width="100"
        >
          <v-card-title class="white--text">
            <span class="fs12">Grooming</span>
          </v-card-title>
        </v-card>
        <v-card
          class="border darken mr-2"
          outlined
          hover
          height="100"
          width="100"
        >
          <v-card-title class="white--text">
            <span class="fs12">Lifestyle</span>
          </v-card-title>
          <v-card-text class="rtl">
              <v-img
                src="@/assets/Home/concertIcon.png"
                width="40"
                height="40"
                
                />
          </v-card-text>
        </v-card>
        <v-card
          class="border orange mr-2"
          outlined
          hover
          height="100"
          width="100"
        >
          <v-card-title class="white--text">
            <span class="fs12">Barber</span>
          </v-card-title>
           <v-card-text class="rtl">
              <v-img
                src="@/assets/Home/scissor.png"
                width="40"
                height="40"
                
                />
          </v-card-text>
        </v-card>
      </v-layout>

      <v-text-field label="Search" solo class="borderExtra" outlined flat dense
        ><template v-slot:append>
          <v-fade-transition leave-absolute>
            <v-icon>mdi-magnify</v-icon>
          </v-fade-transition> </template
      ></v-text-field>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style>
@import '../../src/assets/css/main.css';
</style>
