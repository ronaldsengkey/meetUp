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
    <v-card flat class="borderExtra bottomLogin-center-absolute pa-2 containerRegister" color="#FEF8EC">
        <v-card-title class="my-3" style="font-size:unset;font-weight:unset;line-height:unset;">New User?<span class="ml-1" style="font-weight:700;" @click="$router.push('register')">&nbsp; Create an account</span></v-card-title>

         <v-text-field placeholder="Email" type="email" solo class="inputPlace borderExtra mx-3" flat dense
            ></v-text-field
        >

        <v-text-field placeholder="Password" type="password" solo class="inputPlace borderExtra mx-3" flat dense
            ></v-text-field
        >

        <v-btn
            color="#3B3530"
            class="registerColor borderExtra alignCenter pa-3 mx-3 mb-4"
            height="65%"
            depressed
            style="min-width:95% !important; text-transform:unset !important;"
            @click="$router.push('homeMember')"
        >
        Sign In
      </v-btn>

      <v-divider class="mx-3 dividers my-5"></v-divider>

      <v-btn
            class="borderExtra loginColor alignCenter pa-3 mx-3 mt-4"
            height="65%"
            depressed
            style="min-width:95% !important; text-transform:unset !important;"
        >
        <v-icon left class="position-absolute google">mdi-google</v-icon>
        With Google
      </v-btn>

      <div class="mt-5 mb-7 mx-3 weight-500 fs11 text-end">Forgot Password</div>
    </v-card>
  </v-container>
</template>

<script>
export default {
}
</script>
<style scoped>
@import '../../../src/assets/css/main.css';
.google {
  left: 1em;
}
.dividers {
  border-color: unset !important;
}
.containerRegister {
  background-color: rgb(254, 248, 236,0.5) !important;
  border-color: rgb(254, 248, 236);
}
</style>
