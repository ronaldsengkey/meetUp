<template>
    <v-container fluid class="ma-0">
      <p class="fs14 welcome">Welcome back</p>
      <p class="fs14 weight-800 username">Username</p>

      <slider animation="normal" :interval="5000" :control-btn="false" class="rounded-xl mb-5" height="150px">
        <slider-item
        class="ma-0 pa-0"
          v-for="(slide, i) in slides" :key="i"
          :style="i"
        >
          <v-img src="@/assets/Landing/bannerMember.png" height="100%" contain></v-img>
        </slider-item>
      </slider>

      <p class="fs14 weight-700 username">
        What do you need?<span class="float-right fs14 welcome"
          >More <v-icon class="welcome">mdi-arrow-right</v-icon></span
        >
      </p>

      <v-layout align-center justify-center class="mb-5">
        <v-slide-group v-model="model" center-active>
          <v-slide-item v-for="menu in menu" :key="menu.name">
            <v-card
              :class="menu.class"
              outlined
              hover
              height="125"
              width="100"
              @click="$router.push(menu.route)"
            >
              <v-card-title class="white--text">
                <span class="fs12">{{menu.name}}</span>
              </v-card-title>
               <div class="rtl position-absolute r15b0" v-if="menu.image">
                <v-img
                  :src="require(`@/assets/${menu.image}`)"
                />
              </div>
              <div class="rtl position-absolute r55b0" v-if="menu.imageSecond">
                <v-img
                  :src="require(`@/assets/${menu.imageSecond}`)"
                />
              </div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-layout>

      <v-text-field label="Search" solo class="borderExtra" outlined flat dense
        ><template v-slot:append>
          <v-fade-transition leave-absolute>
            <v-icon>mdi-magnify</v-icon>
          </v-fade-transition>
        </template></v-text-field
      >

      <p class="fs14 weight-700 username">
        Meet Star<span class="float-right fs14 welcome">View All</span>
      </p>

      <v-sheet elevation="1" class="rounded-xl pa-1">
        <v-row>
          <v-col cols="2" class="ml-4 alignCenter">
            <v-avatar size="48">
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="John"
              />
            </v-avatar>
          </v-col>
          <v-col cols="4">
            <span class="fs11 weight-700 username">
              Meet Star
            </span>
            <span>
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                dense
                readonly
                small
              ></v-rating>
            </span>
            <span class="fs9 welcome">33 years old</span>
          </v-col>
          <v-col cols="2" class="alignCenter">
            <div class="flex-column">
              <v-img
                src="@/assets/Home/certificate.png"
                max-width="60px"
                max-height="60px"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="3" class="flexEnd">
            <v-icon x-small color="red">mdi-clock-time-four</v-icon><span class="ml-1 fs12 weight-700">1h</span>
            <p class="fs12 weight-700">Rp. 10k</p>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      rating: 5,
      menu : [
        {
          name : 'Grooming',
          image : 'Home/dog-right.png',
          imageSecond : 'Home/kitty-right.png',
          class : "border primary mr-2 position-relative",
          route : 'groomingPlace'
        },
        {
          name : 'Lifestyle',
          class : "border teal mr-2 position-relative",
          image : 'Home/concertIcon.png'
        },
        {
          name : 'Barber',
          class : "border purple mr-2 position-relative",
          image: 'Home/scissor.png'
          
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style scoped>
@import "../../../src/assets/css/main.css";
</style>
