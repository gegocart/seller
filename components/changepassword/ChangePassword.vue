<template>
	<div class="container mx-auto">
    
    <div class="w-full  p-10">
       <div v-if="this.success!=null"  class="w-1/2 my-4 bg-red-light p-4" id="success-alert">
            <p class="text-white">{{this.success}}</p>
           <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
          </div>
           <div v-if="this.failure!=null" class="w-1/2 my-4 bg-red-light p-4 flex justify-between" id="success-alert">
            <p class="text-white">{{this.failure}}</p>
           <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
          </div>
			 <h1 class="title is-4">Change Password</h1>
         <form action="" @submit.prevent="store" class="custom-form">
            <div class="flex flex-col lg:flex-row md:flex-row">
            <div class="w-full lg:w-1/2 flex my-4 bg-transparent border-b border-grey p-4 mr-4">
              <i class="fa fa-lock fa1" aria-hidden="true"></i>
              <div class="control">
                <input class="outline-none ml-4 bg-transparent w-full" type="password"  
                v-model="form.oldpassword" placeholder="Old Password" >
                 <p class="text-red-dark" v-if="errors.oldpassword">
                    {{ errors.oldpassword[0] }}
                  </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 flex my-4 bg-transparent border-b border-grey p-4">
              <i class="fa fa-lock fa1" aria-hidden="true"></i>
              <div class="control">
                <input class="outline-none ml-4 bg-transparent w-full" type="password" 
                v-model="form.newpassword" placeholder="New Password">
                 <p class="text-red-dark" v-if="errors.newpassword">
                    {{ errors.newpassword[0] }}
                  </p>
              </div>
            </div>
            </div>
            <div class="flex flex-col lg:flex-row w-full">
            <div class="w-full lg:w-1/2 mr-4 flex my-4 bg-transparent border-b border-grey p-4">
              <i class="fa fa-lock fa1" aria-hidden="true"></i>
              <div class="control">
                <input class="outline-none ml-4 bg-transparent w-full" type="password"  
                v-model="form.confirmpassword" placeholder="Confirm Password">
                <p class="text-red-dark" v-if="errors.confirmpassword">
                    {{ errors.confirmpassword[0] }}
                  </p>
              </div>
            </div>
                </div>

                  
                <div class="flex justify-center">
                    <div class="flex">        
                    <button class="button is-info">Change Password</button>
                    </div>
                </div>

          </form>      
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'blank',
		data() {
			return {
         // errors:[],
        form:{
           oldpassword:'',
           newpassword:'',
           confirmpassword:'',
           id:'',

        },
       
         success:null,
        failure:null,
      }
		},
    
    methods:{
       async close(){
         this.success=null;
      },
      async fclose(){
         this.failure=null;
      },
      async store(){
              this.form.id=this.$auth.user.id;
                 let response = await this.$axios.$post('users/passwordchange',this.form) 
                                .then((response) => {
                                 
                                       if(response.message=="Password is changed successfully"){
                                           this.success=response.message;
                                           this.form='';
                                       }
                                       else{
                                             this.failure=response.message;
                                       }
                                  }).catch((error) => {
                                    
                                   //this.errors=error.response.data.errors;
                                  
                                  });

      }
    }
	}
</script>
