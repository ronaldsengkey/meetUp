import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary : '#FDD997',
                darkenPrimary : '#CCA152',
                darken: '#F0B04D',
                orange: '#FE9D1C',
                teal: '#7BAEB0',
                purple : '#6058B0',
                alert: '#7BAEB0',
                bookingBackground: '#FEE9C1',
                booking : '#FE6E6E',
                detailBook: '#F4DFB8',
                backHome : '#FFCB91',
                smallRating: '#FEE9C1'
            },
        },
    },
});
