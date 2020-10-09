<template>
  <div class="page page-reset-password w-full lg:w-1/3 md:w-1/2 mx-auto card">

          <h1 class="title is-4">Reset Password</h1>
          <form action="" @submit.prevent="store">
             <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@codecourse.com" v-model="form.email">
              </div>
            </div>
            <div class="field">
              <label class="label">New Password</label>
              <div class="control">
                <input class="input" type="text" placeholder="New Password" v-model="form.password">
              </div>
            </div>
             <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input class="input" type="text" placeholder="Confirm Password" v-model="form.confirmpassword">
              </div>
            </div>
           
            <div class="field">
              <p class="control">
                 <button class="button is-info is-medium">
                  Reset
                </button>
              </p>
            </div>
          </form>
        </div>
</template>

<script>
  export default {
    layout: 'blank',
    data () {
      return {
        form: {
           email:'',
           password: ''
        }
      }
    },

    middleware: [
      'redirectIfAuthenticated'
    ],

    methods: {
     async store () {
       await this.$auth.reset('local', {
          data: this.form
        })

        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect)
          return
        }

        this.$router.replace({
          name: 'index'
        })
      }
    }
  }
</script>
