<template>
<div class="notifictaion-wrapper">
<portal to="editattributeset">
   <p slot-scope="{attributesetid}"> 
<span class="mx-2">
 <a @click="enableform(attributesetid)" class="" data-toggle="tooltip" title="Edit"><img src="~/assets/img/edit.svg" class="w-4 h-4">
 </a> 
 </span>
 <!-- <span class="mx-2">
        <nuxt-link  :to="{name: 'seller-editattributeset',params:{attributesetid:attributeset.id}}" data-toggle="tooltip" title="Edit" ><img src="~/assets/img/edit.svg" class="w-4 h-4">
        </nuxt-link>
        </span> -->
      </p>
</portal>
<portal to="editattributesetform" >
  <div class="hide-menu" id="edit_attributeset">
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
          <div class="control">
            <input class="input" type="text" :class="{ 'is-danger': errors.name }" v-model="attributeset.name"  autofocus="">
            <p class="help is-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
          
          </div>
        </div>
      </div>
       <div class="columns">
        <div class="field column is-6">
          <label class="label">Status</label>
          <div class="control">
            <div class="control">
            <!--  <div class="col-sm-2">
              Active <input type="radio" name="rdnstatus" v-model="attributeset.status" class="form-control" value="1"  id="statusactive"/>
                           
              </div>
              <div class="col-sm-2">
                Inactive <input type="radio" name="rdnstatus" v-model="attributeset.status" class="form-control" value="0" id="statusinactive"/>
               v-model="form.status" :class="{ 'is-danger': errors.status }" 
              </div> -->
               <div class="onoffswitch">
     <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" v-model="attributeset.status" id="myonoffswitch" >
     <label class="onoffswitch-label" for="myonoffswitch">
         <div class="onoffswitch-inner"></div>
         <div class="onoffswitch-switch"></div>
     </label>
 </div>
              </div>
          </div>
        </div>
      </div>
               
          <div class="field">
            <p class="control">
              <button class="button is-info">
                Save
              </button>
              
               <a class="button is-text" @click="cancel()">Cancel</a>
            </p>
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
     props:['attributesetid'],
    data () {
      return {
         data:[],
        attributeset:{
          name:'',
          status:'',
        },
          attributeset_id:this.$route.params.attributesetid,    
     
      }
    },

    
    methods: {
      enableform(attributesetid)
          {
            $('#edit_attributeset').removeClass('hide-menu').addClass('block');
            this.attributeset_id=attributesetid;
            this.getAttributeset();
          },
         disableform()
          {
            $('#edit_attributeset').removeClass('block').addClass('hide-menu');
          }, 
          updateSlug: function(val) {
          this.form.slug = val;
          },
      async store () {
       if(this.attributeset.status===""){
        this.attributeset.status=false;
       }
       else{
        this.attributeset.status=true;
       }
        let response = await this.$axios.$post('seller/editattributeset/' + this.attributeset_id, this.attributeset).then((response) => {
                                              
                                          if(response.message!=="Updated Successfully"){
                                              
                                              alert(response.message);
                                           }
                                           else{
                                              this.form="";
                                               this.disableform();
                                              
                                                 this.$nuxt.$emit('dataaddattributeset',true);

                                                 this.$router.replace({
                                                    name: 'seller-displayattributeset'
                                                  })
                                           }
                                          }).catch((error) => {
                                              console.log(error);
                                          });
       
       
      },
      async getAttributeset () {
      
       let response = await this.$axios.$get('seller/editattributeset/'+this.attributeset_id)
       
       console.log(response.data);
       this.attributeset=response.data;
    },
    cancel:function(){
      this.disableform();
    }

    },
   
    created () {
      this.getAttributeset();
    },
    
  }
</script>