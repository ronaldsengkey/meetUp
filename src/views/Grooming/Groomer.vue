<template>
  <v-container class="px-3">
    <p class="fs14 welcome">
      Meet with our profesional personal groomer, to make your pets look cute
    </p>

    <v-text-field label="Search" solo class="borderExtra" outlined flat dense
      ><template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-icon>mdi-magnify</v-icon>
        </v-fade-transition>
      </template></v-text-field
    >

    <v-sheet @click="$router.push('groomerProfile')" elevation="1" class="rounded-xl pa-1 mb-3">
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
          <v-icon x-small color="red">mdi-clock-time-four</v-icon
          ><span class="ml-1 fs12 weight-700">1h</span>
          <p class="fs12 weight-700">Rp. 10k</p>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet elevation="1" class="rounded-xl pa-1 mb-3">
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
          <v-icon x-small color="red">mdi-clock-time-four</v-icon
          ><span class="ml-1 fs12 weight-700">1h</span>
          <p class="fs12 weight-700">Rp. 10k</p>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet elevation="1" class="rounded-xl pa-1  mb-15">
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
          <v-icon x-small color="red">mdi-clock-time-four</v-icon
          ><span class="ml-1 fs12 weight-700">1h</span>
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
      rating: 5,
    };
  },
};
</script>

<style>
@import "../../../src/assets/css/main.css";
</style>
