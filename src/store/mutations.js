import * as types from './mutations-types'

export default {
  [types.LOGIN_STATUS] (state) {
    state.login_status = !state.login_status
  },
  [types.LOGOUT_STATUS] (state) {
    state.logout_status = !state.logout_status
  },
  [types.USER_NAME] (state) {
    state.user_name = '用户'
  }
}
