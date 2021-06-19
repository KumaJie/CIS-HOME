import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
  },
  mutations: {
    initUserInfo(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    loginUserId: state => {
      return state.userInfo && state.userInfo.userId
    },
    employeeId: state => {
      return state.userInfo && state.userInfo.employeeId;
    }
  }
})
