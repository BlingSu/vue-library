import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const state = {
  login_status: false,
  logout_status: false,
  user_name: '',
  admin_login: false,
  user_data: {},
  dialog_visible: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
