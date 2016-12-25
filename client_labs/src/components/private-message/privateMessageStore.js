import Vue from 'vue'
import {
  getHeader,
  getUserPrivateMessages,
  getPrivateMessageById,
  sendPrivateMessage
} from './../../config'

const state = {
  messageRec: [],
  messageSent: [],
  message: {
    subject: '',
    message: '',
    sender: {}
  }
}

const mutations = {
  SET_MESSAGES_REC (state, messages) {
    state.messageRec = messages
  },
  SET_MESSAGE_VIEW (state, message) {
    state.message = message
  },
  CLEAR_MESSAGE_VIEW (state) {
    state.message = {
      subject: '',
      message: '',
      sender: {}
    }
  },
  SEND_PRIVATE_MESSAGE (state, message) {
    state.messageSent.push(message)
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
  },
  getPrivateMessageById: ({commit}, id) => {
    let postData = {id: id}
    return Vue.http.post(getPrivateMessageById, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getPrivateMessageById response', response)
        commit('SET_MESSAGE_VIEW', response.body.data)
      })
  },
  clearMessageView: ({commit}) => {
    commit('CLEAR_MESSAGE_VIEW')
  },
  sendPrivateMessage: ({commit}, postData) => {
    return Vue.http.post(sendPrivateMessage, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'sendPrivateMessage response', response)
        commit('SEND_PRIVATE_MESSAGE', response.body.data)
        return response
      })
  }
}

export default {
  state, mutations, actions
}
