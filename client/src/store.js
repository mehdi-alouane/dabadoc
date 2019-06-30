import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/services/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isLoggedIn: false
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
    }
  }
})
