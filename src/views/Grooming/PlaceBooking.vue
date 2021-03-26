<template>
  <v-container class="ma-0 pa-0" style="height:600px;overflow:auto;">
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

    <v-container class="px-3 position-relative">
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

      <sliding-panel class="slidingBooking" :state.sync="panelState" :offset="offset" :collapsedOffset="collapsedOffset" :scrim="false" dismissedState="collapsed">
      <v-card
        color="primary"
        class="topRightRadius pa-4 minH-34"
        style="overflow: auto;height: 85%;"
      >
        <img
          src="@/assets/Grooming/horizontal.png"
          width="65"
          height="3"
          style="margin:0 auto;display:block"
        />

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

        <v-icon>mdi-calendar-month</v-icon
        ><span class="ml-1 fs14 weight-800 username">Date</span>

        <v-card class="border pa-3 mt-3" flat>
          <v-date-picker
            no-title
            :min="new Date().toISOString().slice(0, 10)"
          />
        </v-card>

        <div class="mt-3">
          <v-icon>mdi-clock-time-five</v-icon
          ><span class="ml-1 fs14 weight-800 username">Time</span>
        </div>

        <v-card class="border pa-3 mt-3" flat>
          <div style="display:flex;gap:1.5em;overflow:auto;">
            <v-chip color="#CCA152" style="color:white;overflow:unset"
              >10.00 AM</v-chip
            >
            <v-chip style="overflow:unset" outlined>01.00 PM</v-chip>
            <v-chip style="overflow:unset" outlined>04.00 PM</v-chip>
            <v-chip style="overflow:unset" outlined>07.00 PM</v-chip>
          </div>
        </v-card>

        <div class="mt-3">
          <v-icon>mdi-account-multiple</v-icon
          ><span class="ml-1 fs14 weight-800 username">Choose Groomer</span>
        </div>

        <div style="display:flex;gap:0.5em;">
          <v-card width="200" height="100%" class="border pa-3 mt-3" flat>
            <v-row>
              <v-col cols="6" class="d-flex justifyCenter alignItemsCenter flexColumn position-relative">
                <v-card
                    class="border smallRating vertical-top-absolute py-1 px-2"
                  >
                <div class="d-flex">
                    <v-icon small color="#FE6E6E">mdi-star</v-icon>
                    <span
                      style="color:#FE6E6E"
                      class="ml-2"
                    >
                      5
                    </span>
                  </div>
                  </v-card>

                <v-img
                src="@/assets/Home/certificate.png"
                class="vertical-middle-absolute"
                width="45%"
                height="30%"
              ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  contain
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                >
                </v-img>
              </v-col>
            </v-row>
            
          </v-card>
          <v-card width="200" height="100%" class="border pa-3 mt-3"  flat>
            <v-row>
              <v-col cols="6" class="d-flex justifyCenter alignItemsCenter flexColumn position-relative">
                <v-card
                    class="border smallRating vertical-top-absolute py-1 px-2"
                  >
                <div class="d-flex">
                    <v-icon small color="#FE6E6E">mdi-star</v-icon>
                    <span
                      style="color:#FE6E6E"
                      class="ml-2"
                    >
                      5
                    </span>
                  </div>
                  </v-card>

                <v-img
                src="@/assets/Home/certificate.png"
                class="vertical-middle-absolute"
                width="45%"
                height="30%"
              ></v-img>
              </v-col>
              <v-col cols="6">
                <v-img
                  contain
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                >
                </v-img>
              </v-col>
            </v-row>
            
          </v-card>
          <!-- <v-card width="100" height="100" class="border pa-2 mt-3" flat>
            <v-img
              contain
              src="https://randomuser.me/api/portraits/men/85.jpg"
              style="postion:relative;"
            >
              <v-card
                width="30"
                height="20"
                class="border smallRating top-right-absolute-below"
              >
              </v-card>
              <div style="display:flex;" class="top-right-absolute-below">
                <v-icon x-small color="#FE6E6E">mdi-star</v-icon>
                <div
                  style="color:#FE6E6E; margin-left:2px !important;"
                  class="fs13 mr-1"
                >
                  5
                </div>
              </div>
              <v-icon class="center-absolute" color="green" large
                >mdi-check</v-icon
              >
            </v-img>
          </v-card> -->
        </div>
      </v-card>
      </sliding-panel>
    </v-container>

    <v-bottom-navigation fixed class="px-7">
      <v-btn
        color="#3B3530"
        @click="$router.push('bookedBill')"
        class="whiteBtn borderExtra alignCenter"
        height="65%"
        block
      >
        MeetUp
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
const elements = document.getElementsByClassName("picker__title");

while (elements.length > 0) elements[0].remove();
export default {
  data: () => ({
    rating: 5,
    toggle_exclusive: 0,
    anchored: 'anchored',
    panelState: "collapsed"
  }),
  computed: {
    offset : function(){
      return screen.height - 200 + 'px';
    },
    collapsedOffset: function(){
      return screen.height - 520 + 'px';
    }
  }
};
</script>

<style scoped>
@import "../../../src/assets/css/main.css";
@import "../../../src/assets/css/special.css";
.vertical-top-absolute {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.vertical-middle-absolute {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.top-right-absolute-below {
    position: absolute;
    top: 10%;
    left: 90%;
    transform: translate(-85%, -28%);
  }
</style>
