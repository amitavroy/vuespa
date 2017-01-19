import Vue from 'vue'
import {
  getHeader,
  userListUrl
} from './../../config'
const state = {
  authUser: null,
  users: []
}

const mutations = {
  SET_AUTH_USER (state, userObj) {
    state.authUser = userObj
  },
  CLEAR_AUTH_USER (state) {
    state.authUser = null
  },
  SET_USER_LIST (state, users) {
    state.users = users
  }
}

const actions = {
  setUserObject: ({commit}, userObj) => {
    commit('SET_AUTH_USER', userObj)
  },
  clearAuthUser: ({commit}) => {
    commit('CLEAR_AUTH_USER')
  },
  getUserList: ({commit}) => {
    return Vue.http.get(userListUrl, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'userListUrl response', response)
        if (response.status === 200) {
          commit('SET_USER_LIST', response.body.data)
          return response.body.data
        }
      })
  }
}

export default {
  state, mutations, actions
}
