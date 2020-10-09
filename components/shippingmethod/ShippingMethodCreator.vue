<template>
<div class="notifictaion-wrapper">

  <portal to="addshippingmethod"> <a  class="" @click="enableform()" title="Add">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 455 455" style="color:#8699aa;" xml:space="preserve" class="w-10 h-10 fill-current border rounded-full p-3 mr-3" >
<polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
  455,242.5 "/>
  </svg>
</a>
</portal>
<portal to="addshippingmethodform" >
  <div class="hide-menu" id="addform">
    <div class="z-40 pin-r fixed  bg-white shadow-md portal-section">
      <div class="flex flex-col justify-between h-screen mb-8">
        <div class="w-full flex items-center justify-between mb-8 p-4 border-b">
          <div class=" text-xl font-bold ">Add Shipping Method</div>
          <a @click="disableform()"  class=""><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve" class="w-3 h-3 fill-current  mx-3">
<g>
  <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
</g></svg></a>
        </div>
        <div class="flex-1 px-4 ">
             <!-- <div v-for="notification in notifications" class=" px-4 py-4 border-b border-black border-dotted"  >
             <a href="#"   class="no-underline hover:bg-yellow" @click="view(notification.notification_id)">
                <div class="text-base font-semibold text-black text-left" >
                 <p class="font-muller"> {{ notification.data  }}</p>
                 <p class="font-muller">{{ notification.date }}</p>
                </div>
             </a>
             </div> -->
             <form  action="#" @submit.prevent="store">
         
      <div class="columns">
        <div class="field px-2 w-5/6 mb-5">
          <label class="label text-sm">Shipping Name</label>
          <div class="control">
            <input class="input" type="text" :class="{ 'is-danger': errors.name }" v-model="form.name"  autofocus="">
            <p class="help is-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
           
          </div>
        </div>
      </div>
       <div class="columns">
        <div class="field px-2 w-5/6 mb-5">
          <label class="label text-sm">Price</label>
          <div class="control">
             <input class="input" type="text" :class="{ 'is-danger': errors.price }" v-model="form.price">
           
            <p class="help is-danger" v-if="errors.price">
                    {{ errors.price[0] }}
            </p>
          </div>
        </div>
      </div>
               
          <div class="field px-2">
            <p class="control">
              <button class="button is-info">
                Save
              </button>
              <a class="button is-text"  @click.prevent="cancel()">Cancel</a>
            </p>
          </div>
   </form>

        </div>
      </div>
    </div>
  </div>
  </portal>

</div>
</template>

<script>
import PortalVue from "portal-vue";
//import Vue from 'vue'
 import { mapActions } from 'vuex';

  export default {
   
    data(){
        return {
           // data:[],  
        form: {
         name:'',
         price:''
        },  
       
                      
        }
    },

     methods:{
          enableform()
          {
            $('#addform').removeClass('hide-menu').addClass('block');
          },
         disableform()
          {
            $('#addform').removeClass('block').addClass('hide-menu');
          }, 
          
          cancel:function(){
           // this.form="";
            this.disableform();
              
          },

       async store () {
      
         let response = await this.$axios.$post('', this.form)
                                          .then((response) => {
                                              
                                          if(response.message!=="Saved Successfully"){
                                              
                                              alert(response.message);
                                           }
                                           else{
                                              this.form="";
                                               this.disableform();
                                                 this.$nuxt.$emit('dataaddshippingmethod',true);

                                                
                                           }
                                          }).catch((error) => {
                                              console.log(error);
                                          });
        },
         
    },
  }
</script>