<template>
  <v-container class="primary h-100 position-relative">
    <v-avatar class="top-right-absolute" color="white" size="32">
      <v-icon size="24" color="darken">
        mdi-cog
      </v-icon>
    </v-avatar>
    <div class="top-center-absolute">
      <img src="@/assets/Landing/landing.png" />
      <v-row justify="center" class="weight-700 fs24">
        Meet everyone
      </v-row>
      <v-row justify="center" class="weight-700 fs24">
        anywhere
      </v-row>
    </div>
    <div class="weight-700 fs14 bottom-center-absolute" @click="$router.push('login')">
      Meet Up Now
    </div>
  </v-container>
</template>

<script>
export default {
  mounted(){
    this.axios.get('halo').then((response) => {
      console.log(response.data)
    })
  }
}
</script>
<style scoped>
@import '../../src/assets/css/main.css';
</style>
