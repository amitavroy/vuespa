<script>
  import {mapState} from 'vuex'
  import TopMenu from './components/TopMenu'

  export default {
    components: {
      TopMenu
    },
    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    },
    created () {
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    },
    sockets: {
      connect () {
        console.log('socket connected')
      }
    }
  }
</script>

<template>
  <div>
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<style lang="sass">
  @import './assets/css/bootstrap.css'
  @import './assets/css/global.scss'
</style>
