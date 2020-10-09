<template>
<div class="notifictaion-wrapper">
<portal to="editattributesetcategory">
<p slot-scope="{id}"><!-- {{id}}  -->
    <span class="mx-2">
     <!-- <a @click="enableform()" :to="{name: 'seller-editattributesetcategory',params:{id:attributesetcategory.id,category_id:attributesetcategory.category_attributeset.id}}"  class="" data-toggle="tooltip" title="Edit"><img src="~/assets/img/edit.svg" class="w-4 h-4">
     </a> -->
     <a @click="enableform(id)" class="" data-toggle="tooltip" title="Edit"><img src="~/assets/img/edit.svg" class="w-4 h-4">
     </a> 
     </span>
</p>
</portal>
<portal to="editattributesetcategoryform" >
  <div class="hide-menu" id="editattributesetform">
    <div class="z-40 pin-r fixed  bg-white shadow-md portal-section" >
      <div class="flex flex-col justify-between h-screen mb-8">
        <div class="w-full flex items-center justify-between mb-8 p-4 border-b">
          <div class=" text-xl font-bold ">Edit Attributeset</div>
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
          <label class="label">Attributeset Name</label>
          <div class="select is-fullwidth">
            <select @change="changed" v-model="attributesetcategory.attributeset_id">
                <option value="">Please select</option>

                <option :value="attributeset.id" v-for="attributeset in attributesets" 
                :key="attributeset.id">
                  {{ attributeset.name }}
                </option>
              </select>

           
          </div>
        </div>
      </div>
                    
      <div class="columns">
        <div class="field column is-6">
          <label class="label">Category Name</label>
          <div class="select is-fullwidth">
          <select @subchange="changed" v-model="attributesetcategory.category_id">
              <option value="">Please select</option>
               
              <option :value="category.id" v-for="category in categories" 
              :key="category.id" >
                {{ category.name }} 
               
              </option>
            </select>
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
 
  import { mapGetters } from 'vuex'

  export default {
   //  props:['id','categoryid'],
    data () {
      return {

         data:[],  
        attributesets:[],
        categories: [],
        attributesetcategory:{
          
         attributeset_id:'',
         category_id:''
         //categoryid:this.$route.params.category_id,
        },
         setid:'',//this.$route.params.id,     
          success:null,
          failure:null
      }
    },
  
    
    
    methods: {
         enableform(id)
          {
           
            $('#editattributesetform').removeClass('hide-menu').addClass('block');
            this.setid=id;
          //  this.categoryid=categoryid;
            this.getattributesetcategory();
          },
         disableform()
          {
            $('#editattributesetform').removeClass('block').addClass('hide-menu');
          }, 
            async close(){
         this.success=null;
      },
        async fclose(){
         this.failure=null;
      },
          
      async store () {
      
         
        let response = await this.$axios.$post('seller/editattributesetcategory/' + this.setid, this.attributesetcategory).then((response) => {
                                     
                                        if(response.message==="Updated Successfully"){
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
        async getattributesetcategory () {
           
         let response = await this.$axios.$get('seller/editattributesetcategory/'+this.setid)
        
         this.attributesetcategory=response;
         
       },

      async getattributeset () {
        let response = await this.$axios.$get('seller/displayattributeset')
       // console.log(response);
        this.attributesets = response.data;
      },
      changed ($event) {
        this.$emit('input', $event.target.value)
      },

      
      async getCategories () {
        //let response = await this.$axios.$get('categories')
        let response = await this.$axios.$get('subcategory')
      
        //console.log(response);
        this.categories = response;
      },

       subchanged ($event) {
        this.$emit('input', $event.target.value)
      },

      cancel:function(){
        this.disableform();
      }
    },
   
    created () {
      this.getattributesetcategory();

       this.getattributeset();
       this.getCategories();
    },
    
  }
</script>