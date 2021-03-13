<template>
  <v-app id="inspire">
    <v-main class="home">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    mounted(){
      console.log('pr',process.env.VUE_APP_URL);
    }
  }
</script>

<style scoped>
.home {
    background: url('./assets/Home/background.png');
  }
</style>