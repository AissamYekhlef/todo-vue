import axios from "../../plugins/axios";
import { mapGetters } from 'vuex';

const state = {
    projects : []
};

const getters = {
    ...mapGetters({
        user: 'auth/getUser'
        }),
  getProjects () {
    return state.projects
  }
};

const mutations = {
  SET_PROJECTS : (state, data) => {
    state.projects = data
  }
};

const actions = {
    async set_projects ({ commit }) {
        // let user = mapGetters('auth/getUser');
        console.log(getters.user);
        await axios.get('/projects', {
            headers:{
                'Authorization': 'Bearer ' +  mapGetters('auth/getUser').access_token
            }
            })
            .then(({ data }) => {
                console.log(data.projects);
                commit('SET_PROJECTS', data.projects)
                state.projects = data.projects;
            });
    },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
