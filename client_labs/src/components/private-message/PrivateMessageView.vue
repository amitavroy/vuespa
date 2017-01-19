<script>
  import PrivateMessageSidebar from './PrivateMessageSidebar'
  import {mapState} from 'vuex'

  export default {
    components: {
      'private-message-sidebar': PrivateMessageSidebar
    },
    created () {
      this.$store.dispatch('getPrivateMessageById', this.$route.params.pmId)
    },
    computed: {
      ...mapState({
        pmStore: state => state.privateMessageStore
      })
    },
    destroyed () {
      this.$store.dispatch('clearMessageView')
    }
  }
</script>

<template>
  <div class="PrivateMessage PrivateMessage-View">
    <section class="header">
      <h1 class="page-title">Private Messages - Inbox <small>My private messages.</small></h1>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-with-right-border">
          <private-message-sidebar></private-message-sidebar>
        </div>

        <div class="col-sm-8">
          <h3>{{pmStore.message.subject}}</h3>
          <p>From: {{pmStore.message.sender.email}} <span class="pull-right">{{pmStore.message.sender.created_at}}</span></p>
          <div class="message">
            {{pmStore.message.message}}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
