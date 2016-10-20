<script>
  import {mapState} from 'vuex'
  import ChatWidget from './../components/chat/ChatWidget'
  import ChatUserList from './../components/chat/ChatUserList'
  export default {
    components: {
      'chat-block': ChatWidget,
      'user-list': ChatUserList
    },
    computed: {
      ...mapState({
        chatStore: state => state.chatStore
      })
    },
    created () {
      this.$store.dispatch('setUserList')
    }
  }
</script>

<template>
  <div class="wrapper" id="chat-wrapper">
    <section class="header">
      <h1 class="page-title">Chat <small>Get connected with your friends.</small></h1>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-md-2" id="user-list-col">
          <user-list></user-list>
        </div>

        <div class="col-md-10">
          <chat-block></chat-block>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  @import './../assets/css/variables.scss';
  #user-list-col {
    border-right: 1px solid $border-color;
  }
</style>
