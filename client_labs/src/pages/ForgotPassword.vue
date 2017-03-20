<template>
  <div class="ForgotPassword__Wrapper">
    <section class="ForgotPassword__Section">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Forgot password</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleForgotpasswordSubmit()">
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    class="form-control"
                    placeholder="Enter your email address"
                    type="text" v-model="email">
                </div>
                <button class="btn btn-primary">Send Email</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    apiDomain,
    forgotPassword
  } from './../config'
  export default {
    data () {
      return {
        email: ''
      }
    },
    methods: {
      handleForgotpasswordSubmit () {
        var postData = {
          email: this.email,
          url: apiDomain
        }
        this.$http.post(forgotPassword, postData).then(response => {
          console.log('response', response)
          this.$router.push({name: 'home'})
        }).catch(response => {
          window.alert(response.body.data)
        })
      }
    }
  }
</script>

<style lang="sass">
  .ForgotPassword__Wrapper
    margin-top: 50px
</style>
