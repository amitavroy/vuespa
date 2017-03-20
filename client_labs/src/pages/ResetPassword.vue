<template>
  <div class="ResetPassword__Wrapper">
    <section class="ResetPassword__Section">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Reset password</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleResetpasswordSubmit()">
                <div class="form-group">
                  <label>Password</label>
                  <input
                    class="form-control"
                    placeholder="Enter your password"
                    type="password" v-model="password">
                </div>
                <div class="form-group">
                  <label>Confirm password</label>
                  <input
                    class="form-control"
                    placeholder="Enter your password again"
                    type="password" v-model="cpassword">
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
    resetPassword
  } from './../config'
  export default {
    data () {
      return {
        password: '',
        cpassword: ''
      }
    },
    methods: {
      handleResetpasswordSubmit () {
        var postData = {
          password: this.password,
          confirm_password: this.cpassword,
          token: this.$route.params.token
        }
        this.$http.post(resetPassword, postData).then(response => {
          this.$router.push({name: 'home'})
        }).catch(response => {
          console.log('catch', response)
        })
      }
    }
  }
</script>

<style lang="sass">
  .ResetPassword__Wrapper
    margin-top: 50px
</style>
