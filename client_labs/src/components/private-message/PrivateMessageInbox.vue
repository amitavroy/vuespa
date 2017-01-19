<script>
  import PrivateMessageSidebar from './PrivateMessageSidebar'
  import {mapState} from 'vuex'

  export default {
    components: {
      'private-message-sidebar': PrivateMessageSidebar
    },
    computed: {
      ...mapState({
        pmStore: state => state.privateMessageStore
      })
    },
    created () {
      this.$store.dispatch('setUserMessagesRec')
    },
    sockets: {
      messageRead (data) {
        let message = JSON.data
        this.$store.dispatch('messageReadNotification', message)
        console.log('messageReadNotification')
      }
    }
  }
</script>

<template>
  <div class="PrivateMessage PrivateMessage-Inbox">
    <section class="header">
      <h1 class="page-title">Private Messages - Inbox <small>My private messages.</small></h1>
    </section>

    <section class="content">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-with-right-border">
          <private-message-sidebar></private-message-sidebar>
        </div>

        <div class="col-sm-8">
          <table class="table table-striped table-hover table-bordered table-condensed message-table">
            <tbody>
              <tr v-for="message in pmStore.messageRec" v-bind:class="[message.read == 0 ? 'unread' : 'read']">
                <td class="col-sm-3">{{message.sender.name}}</td>
                <td class="col-sm-7">
                  <router-link :to="{name: 'pm-view', params: { pmId: message.id }}">{{message.subject}}</router-link>
                </td>
                <td class="col-sm-2">{{message.created_at}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </div>
</template>
