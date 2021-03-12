<template>
  <v-container class="ma-0 pa-0">
    <v-app-bar absolute flat color="transparent">
      <v-app-bar-nav-icon @click="$router.go(-1)">
        <v-avatar class="avatarBack" color="white" size="30"
          ><v-icon color="black" size="40">mdi-chevron-left</v-icon></v-avatar
        ></v-app-bar-nav-icon
      >
    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto noPointer"
      height="100%"
    >
      <v-container
        fluid
        style="max-height:1000px;height:735px;"
        class="bookingBackground topRightRadius topLeftRadius pa-4"
      >
        <v-row class="mt-5">
          <v-col cols="12" style="text-align:center;color:#7D7970" class="fs30"
            >Royalti</v-col
          >
        </v-row>
        <v-row
          style="color:#7D7970;margin:0 auto;max-width:150px;text-align:center;"
          class="fs12"
          >291 Campus Drive, Stanford, CA 94305, United States</v-row
        >
        <v-row class="mb-5" style="justify-content:center;">
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            dense
            readonly
            small
          ></v-rating>
        </v-row>

        <v-card color="detailBook" class="border py-3 px-4" flat outlined>
          <v-row>
            <div class="col fs15" style="color:#7D7970;">Meet Date</div>
            <div class="col fs13 textEnd alignCenter" style=";color:#7D7970;">
              12-03-2021
            </div>
          </v-row>
          <v-row class="mt-0">
            <div class="col fs15" style="color:#7D7970;">Meet Time</div>
            <div class="col fs13 textEnd alignCenter" style=";color:#7D7970;">
              10:00 AM
            </div>
          </v-row>
          <v-row class="mt-0">
            <div class="col fs15" style="color:#7D7970;">Groomer</div>
            <div class="col fs13 textEnd alignCenter" style=";color:#7D7970;">
              Amber
            </div>
          </v-row>
        </v-card>

        <div class="fs15 username mt-5 weight-500" style="color:#7D7970;">Service</div>
        <v-container class="px-4">
          <v-row class="mt-0">
            <div class="col fs15" style="color:#7D7970;">Haircut</div>
            <div class="col fs13 textEnd alignCenter" style=";color:#7D7970;">
              Rp. 15.000
            </div>
          </v-row>
          <v-row class="mt-0">
            <div class="col fs15" style="color:#7D7970;">Shampoo</div>
            <div class="col fs13 textEnd alignCenter" style=";color:#7D7970;">
              Rp. 10.000
            </div>
          </v-row>
        </v-container>
        <v-btn
          elevation="0"
          style="background:white;"
          class="mt-5 border alignCenter"
          block
        >
          <div style="color:#7D7970;">Add Promo</div>
        </v-btn>

        
        <v-row class="mt-3">
            <div class="col fs15 username mx-0 weight-500" style="color:#7D7970;">Total</div>
            <div class="col fs13 textEnd alignCenter mr-4" style="color:#7D7970;">
              Rp. 25.000
            </div>
        </v-row>

      </v-container>
    </v-sheet>

    <v-alert
      v-if="alertBool"
      color="alert"
      type="success"
      class="borderXL alertPosition"
      >Success Set</v-alert
    >

    <v-bottom-navigation fixed class="px-7">
      <v-btn color="booking" v-if="!alertBool" @click="alertBool = true" class="borderExtra alignCenter" height="65%" block>
        Confirm Bill
      </v-btn>
      <v-btn color="backHome" v-if="alertBool" @click="$router.replace('homeMember')" class="borderExtra alignCenter" height="65%" block>
        Back to home
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
    alertBool: false,
  }),
};
</script>

<style>
@import "../../../src/assets/css/main.css";
.paleText {
  color: #aeadab;
}
</style>
