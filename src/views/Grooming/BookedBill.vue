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
        class="containerFluid bookingBackground topRightRadius topLeftRadius pa-4"
      >
        <v-row class="mt-5">
          <v-col cols="12" class="billPlace fs30"
            >Royalti</v-col
          >
        </v-row>
        <v-row
          class="fs12 billAddress"
          >291 Campus Drive, Stanford, CA 94305, United States</v-row
        >
        <v-row class="mb-5 justifyCenter">
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
            <div class="col fs15 billTextColor">Meet Date</div>
            <div class="col fs13 textEnd alignCenter billTextColor">
              12-03-2021
            </div>
          </v-row>
          <v-row class="mt-0">
            <div class="col fs15 billTextColor">Meet Time</div>
            <div class="col fs13 textEnd alignCenter billTextColor">
              10:00 AM
            </div>
          </v-row>
          <v-row class="mt-0">
            <div class="col fs15 billTextColor">Groomer</div>
            <div class="col fs13 textEnd alignCenter billTextColor">
              Amber
            </div>
          </v-row>
        </v-card>

        <div class="fs15 username mt-5 weight-500 billTextColor">Service</div>
        <v-container class="px-4">
          <v-row class="mt-0">
            <div class="col fs15 billTextColor">Haircut</div>
            <div class="col fs13 textEnd alignCenter billTextColor">
              Rp. 15.000
            </div>
          </v-row>
          <v-row class="mt-0">
            <div class="col fs15 billTextColor">Shampoo</div>
            <div class="col fs13 textEnd alignCenter billTextColor">
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
          <div class="billTextColor">Add Promo</div>
        </v-btn>

        
        <v-row class="mt-3">
            <div class="col fs15 username mx-0 weight-500 billTextColor">Total</div>
            <div class="col fs13 textEnd alignCenter mr-4 billTextColor">
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
    rating: 5,
    alertBool: false,
  }),
};
</script>

<style>
@import "../../../src/assets/css/main.css";
.containerFluid {
  max-height:1000px;
  height:735px;
}
.billPlace {
  text-align:center;
  color:#7D7970
}
.billAddress {
  color:#7D7970;
  margin:0 auto;
  max-width:150px;
  text-align:center;
}
.billTextColor {
  color: #7D7970
}
</style>
