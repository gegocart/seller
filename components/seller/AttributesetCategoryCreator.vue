<template>
<div class="notifictaion-wrapper">

  <portal to="addattributesetcategory"> 
 <p slot-scope="{categoryid}">
 <a class="" @click="enableform(categoryid)">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 455 455" style="color:#000;" xml:space="preserve" class="w-5 h-5 fill-current border rounded-full p-1">
<polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
  455,242.5 "/>
  </svg>
</a>
</p>
</portal>

<portal to="addattributesetcategoryform" >
  <div class="hide-menu" id="addattributesetform">
    <div class="z-40 pin-r fixed  bg-white shadow-md portal-section"  >
      <div class="flex flex-col justify-between h-screen mb-8">
        <div class="w-full flex items-center justify-between mb-8 p-4 border-b">
          <div class=" text-xl font-bold ">Add Attributeset</div>
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
  <div id="app">
 <form  action="#" @submit.prevent="store">
          
      <div class="columns">
        <div class="field column is-6">
          <label class="label">Category Name</label>
          <div class="select is-fullwidth">
          <select @subchange="changed" v-model="form.categoryid">
              <option value="">Please select</option>
               
              <option :value="category.id" v-for="category in categories" 
              :key="category.id">
                {{ category.name }} 
               
              </option>
            </select>
          </div>
        </div>
      </div>
          
      <div class="columns">
        <div class="field column is-6">
          <label class="label">Attributeset Name</label>
          <div class="select is-fullwidth">
            <AttributesetDropdown v-model="form.attributeset_id" />
          </div>
        </div>
      </div>
                
          <div class="field">
            <p class="control">
              <button class="button is-info">
                Save
              </button>
              <a class="button is-text"  @click="cancel()">Cancel</a>
            </p>
          </div>

          <div v-if="this.success!=null" class="w-1/2 my-4 bg-green-light p-4 flex justify-between" id="success-alert">
          <p class="text-white">{{this.success}}</p>
          <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
        </div>

         <div v-if="this.failure!=null" class="w-1/2 my-4 bg-red-light p-4 flex justify-between" id="success-alert">
            <p class="text-white">{{this.failure}}</p>
           <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
          </div>
   </form>
   </div>
   </div>
      </div>
    </div>
  </div>
  </portal>
 </div>
</template>

<script>
 import PortalVue from "portal-vue";
  import { mapGetters } from 'vuex'
  import AttributesetDropdown from '@/components/form/AttributesetDropdown'
  export default {
    //props:['category_id'],
    data () {
      return {
         data:[],  
        categories: [],
        form: {
        
        // categoryid:this.$route.params.category_id,
         categoryid:this.$route.params.category_id, 
         attributeset_id:'',
        },
        success:null,
        failure:null
       
      }
    },
    components: {
      AttributesetDropdown,
    },
    
    methods: {
       enableform(categoryid)
          {
            $('#addattributesetform').removeClass('hide-menu').addClass('block');
            this.form.categoryid=categoryid;
          },
         disableform()
          {
            $('#addattributesetform').removeClass('block').addClass('hide-menu');
          }, 
        async close(){
         this.success=null;
      },
      async fclose(){
         this.failure=null;
      },


      async store () {
    
        let response = await this.$axios.$post('seller/storeattributesetcategory',this.form)
                                         .then((response) => {
                                         if(response.message==="Saved Successfully"){
                                            this.form="";

                                            this.disableform();
                                            this.$nuxt.$emit('dataattributesetcategory',{'refresh':true, 'message':response.message});
                                                
                                                         this.$router.replace({
                                                          name: 'seller-displayattributesetcategory',
                                                         
                                                        })
                                         }
                                         else if(response.message==="Duplicate Entry"){
                                          this.failure=response.message;
                                         // this.form.errormessage=response.message;
                                         }
                                         else{
                                            this.failure=response.message;
                                          // this.form.errormessage=response.message;
                                         }
                                         }).catch(function (error) {
                                         
                                           console.log(error);
                                          });
       
        },
       async getCategories () {
        //let response = await this.$axios.$get('categories')
        let response = await this.$axios.$get('subcategory')
          this.categories = response;
      },
      changed ($event) {
        this.$emit('input', $event.target.value)
      },
      //  subchanged ($event) {
      //   this.$emit('input', $event.target.value)
      // },

      cancel:function(){
        this.disableform();
      }
    },
    created () {
       this.getCategories();
    },
    
  }
</script>