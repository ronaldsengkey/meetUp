<template>
  <v-container class="primary h-100 pa-0">
    <v-app-bar absolute color="primary" elevation="0">
      <v-app-bar-nav-icon @click="$router.go(-1)"
        ><v-avatar class="avatarBack" color="white" size="30"
          ><v-icon color="black" size="30">mdi-chevron-left</v-icon></v-avatar
        ></v-app-bar-nav-icon
      >
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="logout()">
        <v-avatar color="white" class="avatarBack" size="30">
          <v-icon size="20">
            mdi-logout
          </v-icon>
        </v-avatar>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-row align-content="center" justify="center" class="mt-13">
      <v-col cols="12" class="text-center">
        <img src="@/assets/profile.png" width="125" />
      </v-col>
    </v-row>

    <v-row align-content="center" justify="center" class="mt-0 mb-10">
      <v-col cols="12" class="text-center">
        <div class="nameProfile">Casey</div>
      </v-col>
    </v-row>

    <v-card
      class="smallerTopLeftRadius pa-5 smallerTopRightRadius background"
      height="100%"
    >
      <v-text-field
        label="Email"
        v-model="email"
        class="mx-5 mt-2"
      ></v-text-field>

      <v-text-field
        label="Phone"
        v-model="phone"
        class="mx-5"
      ></v-text-field>
      <v-card-text>
        <v-btn
          color="black"
          class="whiteBtn borderExtra alignCenter pa-3 mx-5 mt-5"
          depressed
          style="min-width:90% !important; text-transform:unset !important;"
        >
          Update
        </v-btn>
      </v-card-text>
    </v-card>
    <v-alert
      v-if="alertBool"
      color="alert"
      :type="alertType"
      class="borderXL alertPosition"
      >{{ alertResponse }}</v-alert
    >
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    phone: "",
    alertBool: false,
    alertResponse: "",
    alertType: "",
  }),
  methods: {
    async logout() {
      let bodyForm = {
        token: JSON.parse(localStorage.getItem("loginData"))[0].token,
      };
      let headers = {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Cache-Control": "no-cache",
        body: JSON.stringify(bodyForm),
      };
      this.axios
        .post("logout", JSON.stringify(bodyForm), { headers })
        .then((result) => {
          let responseLogout = result.data;
          if (responseLogout.responseCode == "200") {
            localStorage.clear();
            this.$router.replace("login");
          } else {
            this.alertBool = true;
            this.logoutResponse = responseLogout.responseMessage;
            setTimeout(() => {
              this.alertBool = false;
            }, 2000);
          }
        });
    },
  },
};
</script>
<style scoped>
@import "../../../src/assets/css/main.css";
.background {
  background-image: url("../../assets/Home/background.png");
}
</style>
