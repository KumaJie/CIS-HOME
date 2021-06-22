import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breadcrumbPath:{}
  },
  mutations: {
    changePath(state, payLoad){
      state.breadcrumbPath = payLoad
    }
  },
  actions: {
  },
  modules: {
  }
})
