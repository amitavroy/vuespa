<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    }
  }
</script>

<template>
  <div id="chat-widget-wrapper">
    <p>Chats will come here</p>
  </div>
</template>
