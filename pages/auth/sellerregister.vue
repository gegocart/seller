<template>
 
      
        <div class="signin-wrapper w-full lg:w-1/3  md:w-1/2 mx-auto card">
          <h1 class="title is-4">Seller Register</h1>
          <form action="" @submit.prevent="register">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Enter Name" v-model="form.name">
              </div>
                 <p class="text-red-dark" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
            </div>
            <div class="field">
              <label class="label">E-Mail Address</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alex@codecourse.com" v-model="form.email">
              </div>
                <p class="text-red-dark" v-if="errors.email">
                    {{ errors.email[0] }}
                  </p>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" type="password" v-model="form.password">
              </div>
               <p class="text-red-dark" v-if="errors.password">
                    {{ errors.password[0] }}
                  </p>
            </div>
            <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input class="input" type="password" v-model="form.password_confirmation">
              </div>
            </div>
             
            <div class="field flex justify-between items-center">
              <p class="control">
                <button class="button is-info is-medium">
                  Register
                </button>
              </p>
              <div class="">
          <nuxt-link :to="{name: 'auth-signin'}" class=" no-underline hover:font-semibold" style="color:#ff5139">
                  Sign In
                 </nuxt-link>
               </div>
            </div>
             
          </form>
       
  </div>
</template>

<script>
  export default {
    layout: 'blank',
    data () {
      return {
        errors:[],
        form: {
          name:'',
          email: '',
          password: '',
          password_confirmation: '',
          usergroup_id:'3'
        }
      }
    },

    middleware: [
      'redirectIfAuthenticated'
    ],

    methods: {
      async signin () {
        await this.$auth.loginWith('local', {
          data: this.form
        })

        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect)
          return
        }

        this.$router.replace({
          name: 'index'
        })
      },
        async register () {
        
        let response = await this.$axios.$post('auth/register', this.form).then((response) => {
                
                 this.$router.replace({
                    name: 'index'
                  })
                
             }).catch((error) => {
            
             this.errors=error.response.data.errors;
              //console.log(error);
            });
       
        //console.log(response.data)
      }
    }
  }
</script>
