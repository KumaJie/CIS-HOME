import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbPath: {},
    userInfo: null,
  },
  mutations: {
    changePath(state, payLoad) {
      state.breadcrumbPath = payLoad
    },
    initUserInfo(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    loginUserId: state => {
      return state.userInfo && state.userInfo.userId
    },
    employeeId: state => {
      return state.userInfo && state.userInfo.employeeId;
    },
    userName: state => {
      return state.userInfo && state.userInfo.userName;
    },
    isAdmin: state => {
      return state.userInfo && state.userInfo.status === 1;
    }
  },
  plugins: [persistedState({
    storage: window.sessionStorage
  })]
})