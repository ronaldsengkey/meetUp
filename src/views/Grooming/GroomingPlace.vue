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

    <v-sheet @click="$router.push('placeProfile')" elevation="1" class="rounded-xl pa-1 mb-3" v-for="(place, i) in places" :key="i">
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
            {{ place.companyName }}
          </span>
          <span>
            <v-rating
              background-color="orange lighten-3"
              color="orange"
              dense
              readonly
              small
              :value="place.rating.point"
            ></v-rating>
          </span>
          <span class="fs9 welcome">{{place.rating.visitor}} Visitor(s)</span>
        </v-col>
        <v-col>
          <div :class="place.status ? place.status == 'open' ? 'green--text fs12 weight-700 mt-2' :  'red--text fs12 weight-700 mt-2' : 'red--text fs12 weight-700 mt-2'">{{place.status ? place.status : 'closed'}}</div>
          <p class="fs9 welcome mt-2">{{ place.operation != null ? (place.operation)[0] + ' - ' + place.operation[1] : ''}}</p>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import * as moment from "moment/moment";

export default {
  data() {
    return {
      rating: 5,
      places : []
    };
  },
  mounted(){
    let config = {
      headers: {
        day: new Date().getDay(),
      }
    }
    this.axios.get('companyList',config).then((result) => {
      let response = result.data;
      if(response.responseCode == '200') {
        this.places = response.data;
        let placesData = this.places;
        var format = 'hh:mm:ss'
        placesData.forEach(element => {
          if(element.operation) {
            var time = moment();
            var beforeTime = moment(element.operation[0], format);
            var afterTime = moment(element.operation[1], format);
            if(time.isBetween(beforeTime,afterTime)) element['status'] = 'open'
            else element['status'] = 'closed'
          }
        });
        this.places = placesData;
      } 
    })
  }
};
</script>

<style scoped>
@import "../../../src/assets/css/main.css";
</style>
