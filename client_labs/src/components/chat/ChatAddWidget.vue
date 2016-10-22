<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    },
    data () {
      return {
        message: null
      }
    },
    methods: {
      handleAddChat () {
        if (this.message !== null) {
          this.$logger('info', 'handleAddChat')
          let postData = {
            'receiver_id': this.chatStore.currentChatUser.id,
            'chat': this.message
          }
          this.$store.dispatch('addNewChatToConversation', postData)
            .then(response => {
              this.message = null
              let element = document.getElementById('chat-widget-wrapper')
              element.scrollIntoView(false)
            })
        }
      }
    }
  }
</script>

<template>
  <div id="chat-add-widget" v-if="chatStore.currentChatUser != null">
    <form v-on:submit.prevent="handleAddChat()">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Type your text"
          v-model="message"
        >
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  #chat-add-widget {
    position: fixed;
    bottom: 0;
    width: 80%;
  }
</style>
