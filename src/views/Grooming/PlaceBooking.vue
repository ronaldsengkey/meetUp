<template>
  <v-container class="ma-0 pa-0" style="height:1500px;overflow:auto;">
    <v-app-bar
      absolute
      src="@/assets/Grooming/royalty.png"
      dark
      flat
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
      height="200px"
      class="bottomLeftRadius"
    >
      <v-app-bar-nav-icon @click="$router.go(-1)">
        <v-avatar class="avatarBack" color="white" size="30"
          ><v-icon color="black" size="40">mdi-chevron-left</v-icon></v-avatar
        ></v-app-bar-nav-icon
      >
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto noPointer"
      height="200px"
    >
      <v-container style="height: 1000px;"> </v-container>
    </v-sheet>

    <v-container class="px-3">
      <v-row>
        <v-col cols="6"
          ><span class="fs16 weight-800 username">Royalty</span></v-col
        >
        <v-col cols="6" class="textEnd"
          ><v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            dense
            readonly
            small
          ></v-rating
        ></v-col>
      </v-row>

      <v-row class="mt-0">
        <v-col cols="1" class="textCenter alignCenter"
          ><v-icon color="black">mdi-map-marker</v-icon></v-col
        >
        <v-col cols="11" class="alignCenter"
          ><span class="fs11 paleText"
            >291 Campus Drive, Stanford, CA 94305, United States</span
          >
        </v-col>
      </v-row>

      <v-row class="mt-0 mb-2">
        <v-col cols="1" class="textCenter alignCenter"
          ><v-icon color="black">mdi-clock-time-five</v-icon></v-col
        >
        <v-col cols="11" class="alignCenter flex-column">
          <div class="fs12 weight-700 red--text mt-2">Closed</div>
          <div class="fs11 paleText">8.00 - 18.00</div>
        </v-col>
      </v-row>

      <v-img src="@/assets/Grooming/map.png"> </v-img>
    </v-container>

    <v-card color="primary" class="topRightRadius pa-4">
      <p class="fs14 weight-800 username">Services</p>

      <v-row class="mb-3">
        <v-chip small class="darkenPrimary ma-2 px-3 white--text weight-700">
          Haircut
        </v-chip>
        <v-chip small class="darkenPrimary ma-2 px-3 white--text weight-700">
          Razor Shave
        </v-chip>
        <v-chip small class="darkenPrimary ma-2 px-3 white--text weight-700">
          Treatment
        </v-chip>
      </v-row>

      <v-icon>mdi-calendar-month</v-icon><span class="ml-1 fs14 weight-800 username">Date</span>
      
      <v-card class="border pa-3 mt-3" flat>a</v-card>

       <div class="mt-3"><v-icon>mdi-clock-time-five</v-icon><span class="ml-1 fs14 weight-800 username">Time</span></div>
      
      <v-card class="border pa-3 mt-3" flat>a</v-card>

      <div class="mt-3"><v-icon>mdi-account-multiple</v-icon><span class="ml-1 fs14 weight-800 username">Choose Groomer</span></div>
      
      <div style="display:flex;gap:0.5em;">
        <v-card width="100" height="100" class="border pa-2 mt-3" flat>
          <v-img contain src="https://randomuser.me/api/portraits/men/85.jpg" style="postion:relative;">
              <v-card width="40" height="20" class="border smallRating top-right-absolute-below">
                <v-icon x-small>mdi-star</v-icon>
                <span class="text-end">5</span>
              </v-card>
              <v-icon class="center-absolute" color="green" large>mdi-check</v-icon>
          </v-img>
          
        </v-card>
        <v-card width="100" height="100" class="border pa-2 mt-3" flat>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-card>
      </div>
      
    </v-card>

    <v-bottom-navigation fixed class="px-7">
      <v-btn color="#3B3530" @click="$router.push('bookedBill')" class="borderExtra alignCenter" height="65%" block>
        MeetUp
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: 0,
    rating: 5,
    toggle_exclusive: 0,
  }),
};
</script>

<style>
@import "../../../src/assets/css/main.css";
.paleText {
  color: #aeadab;
}
</style>
