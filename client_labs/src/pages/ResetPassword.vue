<template>
  <div class="ResetPassword__Wrapper">
    <section class="login">
      <div class="row">
        <div class="col-md-6 col-md-push-3">
          <div class="panel panel-default">
            <div class="panel-heading"><strong>Reset password</strong></div>
            <div class="panel-body">
              <form v-on:submit.prevent="handleResetPasswordSubmit()">
                <div class="form-group">
                  <label>Password</label>
                  <input
                    class="form-control"
                    placeholder="Enter your password"
                    type="password"
                    v-model="password"
                  >
                </div>

                <div class="form-group">
                  <label>Confirm password</label>
                  <input
                    class="form-control"
                    placeholder="Enter your password again"
                    type="password"
                    v-model="confirmPassword"
                  >
                </div>

                <button class="btn btn-primary">Reset password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {resetPassword} from './../config'
  export default {
    data () {
      return {
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      handleResetPasswordSubmit () {
        var postData = {
          password: this.password,
          confirm_password: this.confirmPassword,
          token: this.$route.params.token
        }

        this.$http.post(resetPassword, postData).then(response => {
          console.log('response', response)
          this.$router.push({name: 'home'})
        }).catch(response => {
          console.log('response', response)
        })
      }
    }
  }
</script>

<style lang="sass">
  .ResetPassword__Wrapper
    margin-top: 50px
</style>
