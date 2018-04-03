import * as types from './mutations-types'

export default {
  logoutStatus ({commit}) {
    commit(types.LOGOUT_STATUS)
  }
}
