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
      <div class="whiter-top-circle"></div>
      <div class="white-top-circle"></div>
      <v-app-bar-nav-icon @click="$router.go(-1)"
        ><v-avatar class="avatarBack" color="white" size="30"
          ><v-icon color="black" size="30">mdi-chevron-left</v-icon></v-avatar
        ></v-app-bar-nav-icon
      >
      <v-spacer></v-spacer>

      <v-subheader class="fs28 weight-700 darkenColor">Groomer</v-subheader>
      <v-app-bar-title class="position-absolute titlePlace">
        <div class="flex-column justify-center">
          <div class="fs18 weight-700 semiBlackText textCenter">Amanda</div>
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            dense
            readonly
            small
          ></v-rating>
        </div>
      </v-app-bar-title>

      <div class="position-absolute avatarImage">
        <v-avatar size="70"
          ><v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img
        ></v-avatar>
      </div>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto noPointer"
      height="200px"
    >
      <v-container class="h-1000"> </v-container>
    </v-sheet>

    <v-container class="px-3">
      <p class="fs14 weight-800 username">
        Services<span class="float-right fs14 welcome"
          >More <v-icon class="welcome">mdi-arrow-right</v-icon></span
        >
      </p>

      <v-row class="mb-3">
        <v-chip small class="darkenPrimary ma-2 px-3 white--text weight-700">
          Haircut
        </v-chip>
        <v-chip
          v-if="!clickPedicure"
          @click="clickPedicure = !clickPedicure"
          small
          class="darkenPrimary ma-2 px-3 white--text weight-700"
        >
          Pedicure
        </v-chip>
        <v-chip
          v-else
          @click="clickPedicure = !clickPedicure"
          small
          class="darken ma-2 px-3 white--text weight-700"
        >
          Pedicure
        </v-chip>
        <v-chip small class="darkenPrimary ma-2 px-3 white--text weight-700">
          Treatment
        </v-chip>
      </v-row>

      <p class="fs14 weight-800 username">Date & Time</p>

      <v-sheet class="borderXL rowPlaces" outlined flat max-height="60px">
        <div class="col ml-4 mt-2">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                prepend-icon="mdi-calendar-month"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              :min="minDate"
              dark
              v-model="date"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
        <div class="col">
          <v-img src="@/assets/Grooming/vertical.png" height="30px" width="1px">
          </v-img>
        </div>
        <div class="col ml-5 mt-2">
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                prepend-icon="mdi-clock-time-five"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              dark
              v-if="menu2"
              v-model="time"
              full-width
              ampm-in-title
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
        </div>
      </v-sheet>

      <div class="fs14 weight-800 username mt-4">Meet Place</div>
      <div class="fs11 paleText mb-5 mt-1">
        291 Campus Drive, Stanford, CA 94305, United States
      </div>

      <v-img src="@/assets/Grooming/map.png"> </v-img>
    </v-container>

    <v-alert
      v-if="alertBool"
      color="alert"
      type="success"
      class="borderXL alertPosition"
      >Success Set</v-alert
    >

    <v-bottom-navigation fixed class="px-7">
      <v-btn
        @click="alertBool = !alertBool"
        color="#3B3530"
        class="whiteBtn borderExtra alignCenter"
        height="65%"
        block
        v-if="!alertBool"
      >
        MeetUp
      </v-btn>
      <v-btn color="backHome" v-if="alertBool" @click="$router.replace('homeMember')" class="whiteBtn borderExtra alignCenter" height="65%" block>
        Back to home
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    alertBool: false,
    value: 0,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    minDate: new Date().toISOString().slice(0, 10),
    menu2: false,
    time: "11:15",
    modal: false,
    clickPedicure: false,
    rating: 5,
    toggle_exclusive: 0,
  }),
};
</script>

<style scoped>
@import "../../../src/assets/css/main.css";
.titlePlace {
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
}
.allCenter {
  left: 35%;
  top: 55%;
  transform: translate(-50%, -50%);
}
.avatarImage {
  bottom: -15%;
  left: 50%;
  transform: translate(-50%, 0);
}
.rowPlaces {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rowPlaces > * {
  flex: 1 1 100%;
}
.rowPlaces > *:nth-child(2) {
  flex: 1 1 5%;
}
</style>
