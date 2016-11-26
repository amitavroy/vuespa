import Vue from 'vue'
import {
  userListUrl,
  getHeader,
  getUserConversationUrl,
  saveChatMessageUrl
} from './../../config'
const state = {
  userList: {},
  currentChatUser: null,
  conversation: null
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
  SET_CURRENT_CHAT_USER (state, user) {
    state.currentChatUser = user
  },
  SET_CONVERSATION (state, conversation) {
    state.conversation = conversation
  },
  ADD_CHAT_TO_CONVERSATION (state, chat) {
    state.conversation.push(chat)
  }
}

const actions = {
  setUserList: ({commit}, userList) => {
    return Vue.http.get(userListUrl, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'userListUrl response', response)
        if (response.status === 200) {
          commit('SET_USER_LIST', response.body.data)
          return response.body.data
        }
      })
  },
  setCurrentChatUser: ({commit}, user) => {
    let postData = {id: user.id}
    return Vue.http.post(getUserConversationUrl, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'getUserConversationUrl response', response)
        commit('SET_CURRENT_CHAT_USER', user)
        commit('SET_CONVERSATION', response.body.data)
      })
  },
  addNewChatToConversation: ({commit}, postData) => {
    return Vue.http.post(saveChatMessageUrl, postData, {headers: getHeader()})
      .then(response => {
        Vue.$logger('info', 'addNewChatToConversation response', response)
        commit('ADD_CHAT_TO_CONVERSATION', response.body.data)
      })
  },
  newIncomingChat: ({commit}, chatMessage) => {
    commit('ADD_CHAT_TO_CONVERSATION', chatMessage)
  }
}

export default {
  state, mutations, actions
}
