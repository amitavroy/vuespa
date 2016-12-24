import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './components/user/userStore'
import chatStore from './components/chat/chatStore'
import privateMessageStore from './components/private-message/privateMessageStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, chatStore, privateMessageStore
  },
  strict: debug
})
