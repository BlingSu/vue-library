import * as types from './mutations-types'

export default {
  [types.LOGOUT_STATUS] (state) {
    state.logoutStatus = !state.logoutStatus
  }
}
