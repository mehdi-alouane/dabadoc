import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/services/axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isLoggedIn: false,
    favouriteQuestions: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedIn = true
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setFavouriteQuestions (state, favouriteQuestions) {
      state.favouriteQuestions = favouriteQuestions
    },
    removeFromFavouriteQuestions (state, questionID) {
      state.favouriteQuestions = state.favouriteQuestions
        .filter(question => question._id !== questionID)
    }
  },
  actions: {
    async setToken ({ commit }, { email, password }) {
      const { data } = await axios.post('/user/login', {
        email,
        password
      })
      commit('setToken', data.token)
    },
    async setUser ({ commit }) {
      const token = this.state.token
      const auth = await axios.get('/user/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      commit('setUser', auth.data)
    },

    async getFavouriteQuestions ({ commit }, userID) {
      const { data } = await axios.get(`/favourite/list/${userID}`)
      // console.log(data)
      commit('setFavouriteQuestions', data.questions)
    },
    async removeFromFavouriteQuestions ({ commit }, { userID, questionID }) {
      const { data } = await axios.post(`/favourite/delete-question`, {
        userID,
        questionID
      })
      // console.log(data)
      commit('setFavouriteQuestions', data)
    }
  },
  plugins: [createPersistedState({
    paths: ['token', 'user', 'isLoggedIn']
  })]
})
