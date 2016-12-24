import Vue from 'vue'
import {
  getHeader,
  getUserPrivateMessages
} from './../../config'

const state = {
  messageRec: [],
  messageSent: []
}

const mutations = {
  SET_MESSAGES_REC (state, messages) {
    state.messageRec = messages
  }
}

const actions = {
  setUserMessagesRec: ({commit}, messages) => {
    let postData = {}
    return Vue.http.post(getUserPrivateMessages, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'setUserMessagesRec response', response)
        commit('SET_MESSAGES_REC', response.body.data)
      })
  }
}

export default {
  state, mutations, actions
}
