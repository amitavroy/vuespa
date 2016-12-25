import Vue from 'vue'
import {
  getHeader,
  getUserPrivateMessages,
  getPrivateMessageById,
  sendPrivateMessage,
  getUserPrivateMessagesSent,
  getUserPMNotifications
} from './../../config'

const state = {
  notifications: [],
  messageRec: [],
  messageSent: [],
  message: {
    subject: '',
    message: '',
    sender: {}
  }
}

const mutations = {
  SET_USER_PM_NOTIFICATIONS (state, notifications) {
    state.notifications = notifications
  },
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
  },
  SET_MESSAGES_SENT (state, messages) {
    state.messageSent = messages
  }
}

const actions = {
  getUserNotifications: ({commit}) => {
    let postData = {}
    return Vue.http.post(getUserPMNotifications, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getUserNotifications response', response)
        commit('SET_USER_PM_NOTIFICATIONS', response.body.data)
      })
  },
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
  },
  setUserMessagesSent: ({commit}) => {
    let postData = {}
    return Vue.http.post(getUserPrivateMessagesSent, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'setUserMessagesSent response', response)
        commit('SET_MESSAGES_SENT', response.body.data)
        return response
      })
  }
}

export default {
  state, mutations, actions
}
