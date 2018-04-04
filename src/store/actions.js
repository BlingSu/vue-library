import * as types from './mutations-types'

export default {
  login_status ({commit}) {
    commit(types.LOGIN_STATUS)
  },
  logout_status ({commit}) {
    commit(types.LOGOUT_STATUS)
  },
  user_name ({commit}) {
    commit(types.USER_NAME)
  },
  admin_login ({commit}) {
    commit(types.ADMIN_LOGIN)
  },
  user_data ({commit}, obj) {
    commit(types.USER_DATA, obj)
  }
}
