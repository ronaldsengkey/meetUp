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
      <v-app-bar-nav-icon @click="$router.push('groomingPlace')"
        ><v-avatar class="avatarBack" color="white" size="30"
          ><v-icon color="black" size="40">mdi-chevron-left</v-icon></v-avatar
        ></v-app-bar-nav-icon
      >
      <v-app-bar-title class="position-absolute titleBar">
        <span class="fs28 weight-700 darkenColor">Groomer</span>

        <v-row>
          <v-col cols="2" class="alignCenter">
            <v-avatar size="48">
              <img
                src="https://randomuser.me/api/portraits/men/85.jpg"
                alt="John"
              />
            </v-avatar>
          </v-col>
          <v-col cols="3" class="alignCenter">
            <span class="fs14 weight-700 username">
              Amanda
            </span>
            <div class="fs12 weight-300" style="color:#3B3530">
              30 years old
            </div>
          </v-col>
          <v-col cols="3" class="ml-10 alignCenter">
            <span class="fs12 username" style="color:#3B3530">
              Rate
            </span>
            <div class="fs14 weight-700 username">Rp. 10k/1h</div>
          </v-col>
          <v-col class="ml-4 alignCenter">
            <span class="fs12 username" style="color:#3B3530">
              Jobs
            </span>
            <div class="fs14 weight-700 username">37</div>
          </v-col>
        </v-row>

        <div class="fs11 weight-700 preWrap mt-2 groomerDesc">Amanda is a very profesional hourly worker</div>
      </v-app-bar-title>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto noPointer"
      height="200px"
    >
      <v-container class="h-1000"> </v-container>
    </v-sheet>

    <v-container class="px-3">
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

      <p class="fs14 weight-800 username">Capability Index</p>

      <v-row>
        <v-col cols="2" class="alignCenter">
          <v-avatar size="32" class="border" color="#FC8A8A">
            <v-icon color="white">
              mdi-heart
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="6" class="alignStart marginTop2 pl-0">
          <span class="fs12 weight-700 username">
            Attitude
          </span>
          <span>
            <v-progress-linear
              color="#FC8A8A"
              rounded
              value="100"
            ></v-progress-linear>
          </span>
        </v-col>
        <v-col class="alignStart marginTop2">
          <span class="fs12 weight-700">50</span
          ><span class="ml-1 fs12 welcome">participants</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="2" class="alignCenter">
          <v-avatar size="32" class="border" color="#958BFC">
            <v-icon color="white">
              mdi-heart
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="6" class="alignStart marginTop2 pl-0">
          <span class="fs12 weight-700 username">
            Satisfaction
          </span>
          <span>
            <v-progress-linear
              color="#958BFC"
              rounded
              value="100"
            ></v-progress-linear>
          </span>
        </v-col>
        <v-col class="alignStart marginTop2">
          <span class="fs12 weight-700">50</span
          ><span class="ml-1 fs12 welcome">participants</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="2" class="alignCenter">
          <v-avatar size="32" class="border" color="#A4F9FC">
            <v-icon color="white">
              mdi-heart
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="6" class="alignStart marginTop2 pl-0">
          <span class="fs12 weight-700 username">
            Cleanness
          </span>
          <span>
            <v-progress-linear
              color="#A4F9FC"
              rounded
              value="100"
            ></v-progress-linear>
          </span>
        </v-col>
        <v-col class="alignStart marginTop2">
          <span class="fs12 weight-700">50</span
          ><span class="ml-1 fs12 welcome">participants</span>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="2" class="alignCenter">
          <v-avatar size="32" class="border" color="#FFCB91">
            <v-icon color="white">
              mdi-heart
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="6" class="alignStart marginTop2 pl-0">
          <span class="fs12 weight-700 username">
            Exactness
          </span>
          <span>
            <v-progress-linear
              color="#FFCB91"
              rounded
              value="100"
            ></v-progress-linear>
          </span>
        </v-col>
        <v-col class="alignStart marginTop2">
          <span class="fs12 weight-700">50</span
          ><span class="ml-1 fs12 welcome">participants</span>
        </v-col>
      </v-row>
    </v-container>

    <v-bottom-navigation fixed class="px-7">
      <v-btn @click="$router.push('bookGroomer')" color="#3B3530" class="whiteBtn borderExtra alignCenter"  height="65%" block>
        Set Appointment
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  
};
</script>

<style scoped>
@import "../../../src/assets/css/main.css";
.v-btn__content {
  color: white !important;
  font-size: 14px;
}
.groomerDesc {
  max-width:175px;
}
</style>
