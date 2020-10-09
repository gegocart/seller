<template>
<div class="notifictaion-wrapper">
<portal to="editcategory">
  <p slot-scope="{categoryid}">
   
<span class="mx-2">
 <a @click="enableform(categoryid)" :to="{name: 'seller-editcategory',params:{categoryid:category.id}}"  class="" data-toggle="tooltip" title="Edit"><img src="~/assets/img/edit.svg" class="w-4 h-4">
 </a>
 </span>
 </p>
</portal>
<portal to="editcategoryform" >
  <div class="hide-menu" id="editform">
    <div class="z-40 pin-r fixed  bg-white shadow-md portal-section" >
      <div class="flex flex-col justify-between h-screen mb-8">
        <div class="w-full flex items-center justify-between mb-8 p-4 border-b">
          <div class=" text-xl font-bold ">Edit Category</div>
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
         <input type="hidden" v-model="category_id" name="">
      <div class="columns">
        <div class="field column is-6">
          <label class="label">Category Name</label>
          <div class="control">
            <input class="input" type="text" :class="{ 'is-danger': errors.name }" v-model="category.name"  autofocus="">
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
            <!--  <input class="input" type="text" :class="{ 'is-danger': errors.slug }" v-model="category.slug"> -->
            <slugWidgetmy :title="category.name" @slug-changed="updateSlug" />
             <input type="hidden" name="slug" v-model="category.slug">
            <p class="help is-danger" v-if="errors.slug">
                    {{ errors.slug[0] }}
            </p>
          </div>
        </div>
      </div>
         <div class="columns">
        <div class="field column is-6">
          <label class="label text-sm">Commission Fee</label>
          <div class="control">
            <input class="input" type="number"   v-model="category.commission_fee"  autofocus="">
              <p class="help is-danger" v-if="errors.commission_fee">
                    {{ errors.commission_fee[0] }}
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
  import { mapGetters } from 'vuex'
  import slugWidgetmy from '@/components/form/slugWidgetmy'
  
  export default {
     props:['categoryid'],
    data () {
      return {
        data:[],  
        category:{
          name:'',
          slug:'',
          commission_fee:0
        },
       category_id:'',
       success:null,
       failure:null
        //category_id:this.$route.params.categoryid,
      
      }
    },
   components: {
      slugWidgetmy
    },
   methods: {
          enableform(categoryid)
          {
            $('#editform').removeClass('hide-menu').addClass('block');
           
            this.category_id=categoryid;
           this.getCategory(categoryid);
          },
         disableform()
          {
            $('#editform').removeClass('block').addClass('hide-menu');
          }, 
          updateSlug: function(val) {
          this.category.slug = val;
          },
          async close(){
             this.success=null;
          },
          async fclose(){
               this.failure=null;
            },
      async store () {
      
        let response = await this.$axios.$post('seller/editcategory/'+this.category_id, this.category).then((response) => {
                                              
                                          if(response.message!=="Updated Successfully"){
                                              
                                              this.failure=response.message;
                                           }
                                           else{
                                              this.form="";
                                               this.disableform();
                                              
                                                 this.$nuxt.$emit('dataaddcategory',{'refresh':true, 'message':response.message});

                                                this.$router.replace({
                                                name: 'seller-displaycategory',
                                               });
                                           }
                                          }).catch((error) => {
                                              this.failure=error;
                                          });
       
      },
          async getCategory (categoryid) {
           let response = await this.$axios.$get('seller/editcategory/'+ categoryid)
           this.category=response.data;
        },

         cancel:function(){
           // this.form="";
            this.disableform();
              
          },

    },
   
    created () {
      this.getCategory();
    },
    
  }
</script>