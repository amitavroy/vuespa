<script>
  import {mapState} from 'vuex'
  export default {
    created () {
      this.$logger('info', 'ChatUserList created')
    },
    computed: {
      ...mapState({
        chatStore: state => state.chatStore,
        userStore: state => state.userStore
      })
    },
    methods: {
      userActiveStyle (user) {
        if (this.chatStore.currentChatUser === null) {
          return false
        }
        if (this.chatStore.currentChatUser.id === user.id) {
          return true
        }
        return false
      },
      changeChatUser (user) {
        this.$store.dispatch('setCurrentChatUser', user)
      }
    }
  }
</script>

<template>
  <div id="chat-user-list-wrapper">
    <ul class="list-group">
      <li
        class="list-group-item pointer"
        :class="[{active: userActiveStyle(user)}]"
        v-for="user in chatStore.userList"
        v-on:click="changeChatUser(user)"
        v-if="user.name !== userStore.authUser.name"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
