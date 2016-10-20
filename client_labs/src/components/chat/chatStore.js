import Vue from 'vue'
import {userListUrl, getHeader} from './../../config'
const state = {
  userList: {}
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  }
}

const actions = {
  setUserList: ({commit}, userList) => {
    return Vue.http.get(userListUrl, {headers: getHeader()})
      .then(response => {
        console.log(response)
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
