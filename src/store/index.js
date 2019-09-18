import VuexPersist from 'vuex-persist'
import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication';

Vue.use(Vuex);
const vuexPersist = new VuexPersist({
    key: 'vue.skeleton',
    storage: localStorage
});

const store = new Vuex.Store({
    modules: {
        authentication,
    },
    plugins: [vuexPersist.plugin]
});

export default store;