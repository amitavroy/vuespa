<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        pmStore: state => state.privateMessageStore,
        userStore: state => state.userStore
      })
    },
    created () {
      this.$store.dispatch('getUserNotifications')
    },
    sockets: {
      message (data) {
        let message = JSON.parse(data)
        if (message.receiver.email === this.userStore.authUser.email) {
          console.log(message)
          this.$store.dispatch('newMessageNotification', message)
        }
      },
      messageRead (data) {
        let message = JSON.parse(data)
        this.$store.dispatch('messageReadNotification', message)
        console.log('messageReadNotification', message)
      }
    }
  }
</script>

<template>
  <li class="dropdown pm-message-notification">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      <i class="fa fa-envelope-o"></i>
      <span class="label label-success" v-if="pmStore.notifications.length > 0">{{pmStore.notifications.length}}</span>
    </a>
    <ul class="dropdown-menu">
      <div class="context">Your private messages</div>

      <div class="context" v-if="pmStore.notifications.length === 0">No unread Private messages</div>

      <li class="notification" v-for="notification in pmStore.notifications" v-if="pmStore.notifications.length > 0">
        <router-link :to="{name: 'pm-view', params: { pmId: notification.id }}">
          <div>
            <span class="from">{{notification.sender.name}} <span class="time"><i class="fa fa-clock-o"></i> {{notification.created_at}}</span></span>
            <span class="subject">{{notification.subject}}</span>
          </div>
        </router-link>
      </li>

      <div class="footer">
        <router-link :to="{name: 'my-pms'}">See all Private messages</router-link>
      </div>

    </ul>
  </li>
</template>

<style lang="scss">
  @import './../../assets/css/variables.scss';
  .pm-message-notification {
    &.open {
      background-color: $border-color;
    }
    .context {
      color: #999999;
      width: 300px;
      padding: 5px 10px 9px 10px;
      border-bottom: 1px solid $border-color;
      overflow: hidden;
    }
    li.notification {
      border-bottom: 1px solid $border-color;
      &:last-child {
        border-bottom: none;
      }
      padding: 5px 5px 5px 0px;
      span {
        display: block;
        &.from {
          color: #444444;
          .time {
            font-size: 0.7em;
            float: right;
          }
        }
        &.subject {
          font-size: 0.8em;
        }
      }
    }
    .footer {
      text-align: center;
    }
  }
</style>
