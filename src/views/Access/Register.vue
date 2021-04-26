<template>
  <v-container class="primary h-100 position-relative">
    <v-avatar class="top-right-absolute" color="white" size="32">
      <v-icon size="24" color="darken">
        mdi-cog
      </v-icon>
    </v-avatar>
    <div class="upper-center-absolute">
      <img src="@/assets/Landing/landing.png" width="125" />
    </div>
    <v-card flat class="borderExtra bottomRegister-center-absolute pa-2 containerRegister w-90" color="#FEF8EC">
        <v-card-title class="my-3" style="font-size:unset;font-weight:unset;line-height:unset;">Already have an account?<span class="ml-1" style="font-weight:700;" @click="$router.push('login')">&nbsp; Sign in</span></v-card-title>

         <v-text-field v-model="email" placeholder="Email" type="email" solo class="inputPlace borderExtra mx-3" flat dense
            ></v-text-field
        >

        <v-text-field
        v-model="phone"
        placeholder="Phone"
        type="number"
        solo
        class="inputPlace borderExtra mx-3"
        flat
        dense
      ></v-text-field>

        <v-text-field v-model="password" placeholder="Password" type="password" solo class="inputPlace borderExtra mx-3" flat dense
            ></v-text-field
        >

        <v-btn
            color="#3B3530"
            class="registerColor borderExtra alignCenter pa-3 mx-3 mb-4"
            height="65%"
            depressed
            @click="submitForm()"
            style="min-width:95% !important; text-transform:unset !important;"
        >
        Sign Up
      </v-btn>

      <v-divider class="mx-3 dividers my-5"></v-divider>

      <v-btn
            class="borderExtra loginColor alignCenter pa-3 mx-3 mt-4 mb-10"
            height="65%"
            depressed
            style="min-width:95% !important; text-transform:unset !important;"
            @click="panelState = 'anchored'"
        >
        <v-icon left class="position-absolute google">mdi-google</v-icon>
        With Google
      </v-btn>
    </v-card>
    <sliding-panel :state.sync="panelState" offset="26rem" :anchorEnabled="true" :dismissedState="dismissedState">
      <v-card
        class="topLeftRadius topRightRadius pa-3 minH-26"
        color="#3B3530"
      >
      <img
      class="mt-2"
          src="@/assets/Grooming/horizontal.png"
          width="65"
          height="3"
          style="margin:0 auto;display:block"
        />
        <v-card-text class="textStart white--text"
          >Congratulation, One step closer !</v-card-text
        >

        <v-text-field
            placeholder="Phone"
            type="number"
            solo
            class="inputPlace borderExtra mx-5"
            flat
            dense
          ></v-text-field>

        <v-btn
            color="backHome"
            class="whiteBtn borderExtra alignCenter pa-3 ml-5 mr-5 mb-4"
            height="65%"
            depressed
            style="min-width:90% !important; text-transform:unset !important;"
          >
            Sign Up
          </v-btn>
      </v-card>
    </sliding-panel>
    <v-alert
      v-if="alertBool"
      color="alert"
      :type="alertType"
      class="borderXL alertPosition"
      >{{registerResponse}}</v-alert
    >
  </v-container>
</template>

<script>
import Vue from "vue";
import SlidingPanel from "vue-sliding-panel";
Vue.use(SlidingPanel);
export default {
  data: () => ({
    panelState: "hidden",
    dismissedState : "hidden",
    gravity: "bottom",
    email:"",
    phone:"",
    password:"",
    alertBool: false,
    registerResponse: "",
    alertType:""
  }),
  methods:{
    async submitForm(){
      let bodyForm = { email: this.email,password:this.password,phone:this.phone };
      let headers = {
          "Content-Type":'application/json',
          "Accept": "*/*",
          "Cache-Control": "no-cache",
          "body": JSON.stringify(bodyForm)
      };
      this.axios.post('register',JSON.stringify(bodyForm),{headers}).then((result) => {
        let responseRegister = result.data;
        if(responseRegister.responseCode == '200'){
          this.alertType = 'success'
          this.alertBool = true;
          this.registerResponse = responseRegister.responseMessage;
          setTimeout(() => {
            this.$router.replace('login')
          }, 1500);
        } else {
          this.alertType = 'error'
          this.alertBool = true;
          this.registerResponse = responseRegister.responseMessage;
          setTimeout(() => {
            this.alertBool = false;
          }, 3000);
        } 
        
      })
    }
  }
};
</script>
<style scoped>
@import "../../../src/assets/css/vue-sliding-panel.css";
@import "../../../src/assets/css/main.css";
.google {
  left: 1em;
}
.dividers {
  border-color: unset !important;
}
.containerRegister {
  background-color: rgb(254, 248, 236, 0.5) !important;
  border-color: rgb(254, 248, 236);
}
</style>
