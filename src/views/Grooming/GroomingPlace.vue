<template>
  <v-container class="px-3">
    <p class="fs14 welcome">
      Meet with our profesional partner pet grooming to make your pets look cute
    </p>

    <v-text-field label="Search" solo class="borderExtra" outlined flat dense
      ><template v-slot:append>
        <v-fade-transition leave-absolute>
          <v-icon>mdi-magnify</v-icon>
        </v-fade-transition>
      </template></v-text-field
    >

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
        <v-col cols="5">
          <span class="fs11 weight-700 username">
            Royalty
          </span>
          <span>
            <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              dense
              small
            ></v-rating>
          </span>
          <span class="fs9 welcome">50 Visitors</span>
        </v-col>
        <v-col>
          <div class="fs12 weight-700 red--text mt-2">Closed</div>
          <p class="fs9 welcome mt-2">8.00 - 18.00</p>
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
        <v-col cols="5">
          <span class="fs11 weight-700 username">
            Posh Paws
          </span>
          <span>
            <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              dense
              small
            ></v-rating>
          </span>
          <span class="fs9 welcome">45 Visitors</span>
        </v-col>
        <v-col>
          <div class="fs12 weight-700 red--text mt-2">Closed</div>
          <p class="fs9 welcome mt-2">8.00 - 18.00</p>
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet elevation="1" class="rounded-xl pa-1 mb-15">
      <v-row>
        <v-col cols="2" class="ml-4 alignCenter">
          <v-avatar size="48">
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="John"
            />
          </v-avatar>
        </v-col>
        <v-col cols="5">
          <span class="fs11 weight-700 username">
            Posh Paws
          </span>
          <span>
            <v-rating
              v-model="rating"
              background-color="orange lighten-3"
              color="orange"
              dense
              small
            ></v-rating>
          </span>
          <span class="fs9 welcome">40 Visitors</span>
        </v-col>
        <v-col>
          <div class="fs12 weight-700 green--text mt-2">Open</div>
          <p class="fs9 welcome mt-2">8.00 - 18.00</p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rating: 5
    };
  },
};
</script>

<style>
@import "../../../src/assets/css/main.css";
</style>
