<template>
  <div class="page signin-page p-4 ">
      <div class="signin-wrapper w-full lg:w-1/3  md:w-1/2 mx-auto card">
          <h1 class="text-2xl">Sign in</h1>
          <form action="" @submit.prevent="signin">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" :class="{ 'is-danger': errors.email }" placeholder="e.g. alex@codecourse.com" v-model="form.email" id="email" autofocus="">
                 <p class="help is-danger" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" v-model="form.password" :class="{ 'is-danger': errors.email }">

                 <p class="help is-danger" v-if="errors.password">
                    {{ errors.password[0] }}
                  </p>
              </div>
            </div>

            <!-- <div class="field">
              <p class="control">
                <button class="button is-info is-medium">
                  Sign in
                </button>
                <nuxt-link :to="{name: 'auth-sellerregister'}" class="navbar-item">
                  Click here to Sign Up
                 </nuxt-link>
                  <nuxt-link :to="{name: 'auth-resetpassword'}" class="navbar-item">
                   Forgot Password ?
                 </nuxt-link>
              </p>
            </div> -->

            <div class="flex justify-between mt-4 items-center">
                <div>
                  <nuxt-link :to="{ name: 'auth-resetpassword' }" 
                  class="no-underline text-black text-sm my-2">
                  Forgot your password?
                  </nuxt-link>
                 </div>
                 <div class="">        
                  <button class="button is-info is-medium">
                  Sign in
                </button>
                 </div>
                 
              </div>

             

         <div class="">
        <p class="text-center text-grey-dark text-sm my-2">Dont have an account</p>
        <div class="flex justify-center">
          <nuxt-link :to="{name: 'auth-sellerregister'}" class=" no-underline hover:font-semibold" style="color:#ff5139">
                  Click here to Sign Up
                 </nuxt-link>
               </div>
        </div>
          </form>
  </div>
</div>
</template>

<script>
  export default {
    layout: 'blank',
    data () {
      return {
        form: {
          email: '',
          password: ''
        },
      }
    },

    middleware: [
      'redirectIfAuthenticated'
    ],

    methods: {
      async signin () {
        await this.$auth.loginWith('local', {
          data: this.form
        }).then((response) => {
              
                if (this.$route.query.redirect) {
                  this.$router.replace(this.$route.query.redirect)
                  return
                }

                this.$router.replace({
                  name: 'index'
                })
                
             }).catch((error) => {
             
              console.log(error);
            });

        
      }
    }
  }
</script>
