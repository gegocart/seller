<template>
<div class="notifictaion-wrapper">
<portal to="addsubcategory">
  <p slot-scope="{categoryid,seg}">
<a  class=""  @click="enableform(categoryid,seg)">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 455 455" style="color:#000;" xml:space="preserve" :class="[seg=='selected_cat'?'w-5 h-5 fill-current border rounded-full p-1':'w-10 h-10 fill-current border rounded-full p-3 mr-3']">
<polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
  455,242.5 "/>
  </svg>

</a>  
</p>

</portal>
<portal to="addsubcategoryform">
  <div class="hide-menu" id="addsubform">
    <div class="z-40 pin-r fixed  bg-white shadow-md portal-section" >
      <div class="flex flex-col justify-between h-screen mb-8">
        <div class="w-full flex items-center justify-between mb-8 p-4 border-b">
          <div class=" text-xl font-bold ">Add Subcategory</div>
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
        <!--  <input type="label" name="" v-model="form.errormessage"> -->
     
 <input type="input" v-model="category_id" value="category_id">

     <div class="columns">

        <div class="field column is-6" :class="[this.selected_cat!='selected_cat'?'block': 'hidden']">
          <label class="label">Category Name</label>
          <div class="control">
            
           <MainCategoryDropdown v-model="form.parent_id" :class="{ 'is-danger': errors.category_id }"/>
            <p class="help is-danger" v-if="errors.category_id">
                    {{ errors.category_id[0] }}
            </p>
           
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="field column is-6">
          <label class="label">Sub Category Name</label>
          <div class="control">
            <input class="input" type="text" :class="{ 'is-danger': errors.name }" v-model="form.name"  autofocus="">
            <p class="help is-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
           
          </div>
        </div>
      </div>
       <div class="columns">
        <div class="field column is-6">
          <label class="label">Slug</label>
          <div class="control">
            <!--  <input class="input" type="text" :class="{ 'is-danger': errors.slug }" v-model="form.slug"> -->

             <slugWidgetmy :title="form.name" @slug-changed="updateSlug" />
             <input type="hidden" name="slug" v-model="form.slug">
            <p class="help is-danger" v-if="errors.slug">
                    {{ errors.slug[0] }}
            </p>
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
 // import { mapGetters } from 'vuex'
   import slugWidgetmy from '@/components/form/slugWidgetmy'
   import MainCategoryDropdown from '@/components/form/MainCategoryDropdown'
  export default {
    props:['category_id'],
    data () {
      return {
         data:[], 
        form: {
         name:'',
         slug:'',
         parent_id:'',
         category_id:'',
        
         
       //parent_id:this.$route.params.categoryid,
        // errormessage:'',
        },
        success:null,
        failure:null,
        selected_cat:'null',
      
      }
    },

    components: {
      slugWidgetmy,
      MainCategoryDropdown,
    },
    methods: {
        enableform(categoryid,selectedcat)
          {
           
            $('#addsubform').removeClass('hide-menu').addClass('block');
            this.selected_cat=selectedcat;
            this.form.parent_id=categoryid;
            this.form.category_id=categoryid;
            
        
          },
         disableform()
          {
            $('#addsubform').removeClass('block').addClass('hide-menu');
          }, 
          updateSlug: function(val) {
          this.form.slug = val;
          },
          cancel:function(){
           // this.form="";
            this.disableform();
              
          },
            async close(){
               this.success=null;
            },
            async fclose(){
               this.failure=null;
            },
      async store () {
       
        let response = await this.$axios.$post('seller/storesubcategory',this.form) 
                                .then((response) => {
                                       if(response.message==="Saved Successfully"){
                                            this.form="";

                                            this.disableform();
                                            this.$nuxt.$emit('dataaddsubcategory',{'refresh':true, 'message':response.message});

                                            this.$router.replace({
                                             name: 'seller-displaysubcategory',
                                             params: { category_id: this.parent_id, }
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
                               
                                   this.failure=error;
                                });
              
       
      
      },
    },
    created () {

  
    },
    
  }
</script>