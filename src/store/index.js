import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/index'
import projects from './projects/index'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        projects
    },
});

