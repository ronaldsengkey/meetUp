<template>
  <v-bottom-navigation v-model="value" grow fixed>
       <v-btn value="home" height="100%" color="white">
        <v-avatar size="35">
          <v-icon color="black">mdi-home</v-icon>
        </v-avatar>
      </v-btn>

      <v-btn value="book" height="100%" color="white">
        <v-avatar size="35">
          <v-icon color="black">mdi-book</v-icon>
        </v-avatar>
      </v-btn>

      <v-btn value="bullhorn" height="100%" color="white">
        <v-avatar size="35">
          <v-icon color="black">mdi-bullhorn</v-icon>
        </v-avatar>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    // props: {
    //     value: {
    //       type: String,
    //       default: 'home',
    //       required: true,
    //     },
    // },
    data: () => ({
      value: 'home'
    }),
}
</script>

<style>

</style>