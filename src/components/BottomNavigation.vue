<template>
  <v-bottom-navigation :value="value" grow fixed>
       <v-btn height="100%" color="white">
        <v-avatar color="primary" size="35">
          <v-icon color="black">mdi-home</v-icon>
        </v-avatar>
      </v-btn>

      <v-btn height="100%" color="white">
        <v-avatar size="35">
          <v-icon color="black">mdi-book</v-icon>
        </v-avatar>
      </v-btn>

      <v-btn height="100%" color="white">
        <v-avatar size="35">
          <v-icon color="black">mdi-bullhorn</v-icon>
        </v-avatar>
      </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    props: {
        value: {
        type: Number,
        default: 0,
        required: true,
        },
    },
}
</script>

<style>

</style>