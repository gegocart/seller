<template>
  <!-- <div class="column is-three-quarters"> -->
        
            <!-- <nuxt-link  :to="{name: 'seller-addattributeset'}" class="button is-info">
             Add Attributeset
            </nuxt-link> -->
         <!-- <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col" style="visibility: hidden;">Id</th>
              <th scope="col">Attributeset Name</th>
              <th scope="col">Status</th>
              <th scope="col" colspan="2">Actions</th>
              
            </tr>
          </thead>
         <tbody>
        <tr v-for="attributeset in attributesets" :key="attributeset.id">
        <input type="hidden" name="attributesetid"  :value="attributeset.id"/>
        
       <td></td>
        <td>
          <p :class="{ 'has-text-weight-bold': attributeset.id }">
            {{attributeset.name}}
         
            
           </p>
        </td>
        <td>
          <p :class="{ 'has-text-weight-bold': attributeset.id }">
            
           <label v-if="attributeset.status===1">Active</label>
           <label v-else>InActive</label>
            
           </p>
        </td>
        <td> 
          <nuxt-link  :to="{name: 'seller-editattributeset',params:{attributesetid:attributeset.id}}" class="button is-info">
             Edit
            </nuxt-link>
       </td>
       <td>
           <a href=""  class="button is-info" @click.prevent="destroy(attributeset.id)">Delete</a>
       </td>
       <td> 
          <a href="" class="button is-info" @click.prevent="addattributes(attributeset.id)">Add Attributes</a>
       </td>
      

      </tr>
    </tbody>
  </table> -->
<div>
<portal-target name="addattributesetform"></portal-target>
<portal-target name="editattributesetform"></portal-target>
   <h1 class="pb-2 font-bold">Attributeset</h1>
     <div class="my-3">
   <ul class="breadcrumb">
  <li><nuxt-link :to="{name: 'dashboard'}">Home</nuxt-link></li>
  <li>Attributeset</li>
   </ul>
   </div>
    <div class="bg-card">
    <div class="cart-header flex flex-col lg:flex-row md:flex-row">
    <div class="flex-1 py-1">
   <!--  <img src="~/assets/img/menu.svg" class="w-3 h-3"><span class="mx-2 font-bold">Attributeset</span> -->
   <p class="font-bold text-xs uppercase text-grey-darker flex">
   <span class="my-2 mr-2">Show</span>
    <span>
     <div class="relative">
        <select class="block appearance-none w-12  border  text-black px-2 py-2 leading-tight focus:outline-none" id="count" @change="changepage">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
   </span>
    <span class="my-2 ml-2">Entries</span>
    </p>
    </div>
    <div class="flex-1 justify-start lg:justify-end md:justify-end flex my-3 lg:my-0 md:my-0">
   <portal-target name="addattributeset"></portal-target>
     <!-- <a href="" class="add-btn btn btn-sm btn-success hover:text-white" @click.prevent="addattributes(attributeset.id)">Add Attributes</a> -->
   <!-- <a href="" class="" @click.prevent="addattributes(attributeset.id)">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 455 455" style="color:#000;" xml:space="preserve" class="w-10 h-10 fill-current border rounded-full p-3 mx-3">
<polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
  455,242.5 "/>
  </svg>
</a> -->
<form >
    <div class="mb-4 flex">
    <span class="absolute my-2 mx-3">
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 250.313 250.313" style="color:#ced8e3;" xml:space="preserve" class="w-4 h-4 fill-current mt-1">
<g id="Search">
  <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
    c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
    c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
    c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
    c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
    C170.146,140.044,140.043,170.146,102.911,170.146z"/>
</g></svg>

    </span>
      <input class="border rounded-full w-full py-2 pl-8 pr-3 text-grey-darker leading-tight focus:outline-none" id="username" type="text" placeholder="Search...">
    </div>
    </form>
  </div>
    </div>
    <div class="overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto cart-list">
    <table class="table table-hover bg-table">
    <thead class="">
       <tr>
        <th class="hidden"><p>Id</p></th>
        <th><p>Attributeset Name</p></th>
        <th><p>Status</p></th>
        <th><p>Action</p></th>
      </tr>
    </thead>
    <tbody class="bg-custom">
      <tr v-if="attributesets.length==0">
        <span><p class="text-red p-4">{{recordnotfound}}</p></span>
      </tr>
      <tr v-for="attributeset in attributesets" :key="attributeset.id">
       <input type="hidden" name="attributesetid"  :value="attributeset.id"/>
        <td><p :class="{ '': attributeset.id }">
            {{attributeset.name}}</p></td>
       
       
        <td>
         <p :class="{ 'has-text-weight-bold': attributeset.id }"></p>
           <span v-if="attributeset.status===1" class="btn-success inline-block rounded text-xs text-white p-1">Active</span>
           <span v-else class="btn-danger inline-block rounded  text-xs text-white p-1">Inactive</span></td>
        <td class="whitespace-no-wrap flex">

      <!--   <span><a href="#"><img src="~/assets/img/visualization.svg" class="w-4 h-4"></a></span> -->


      <!--   <span><a href="" data-toggle="tooltip" title="Add" @click.prevent="addattributes(attributeset.id)"><img src="~/assets/img/plus-button.svg" class="w-4 h-4"></a></span> -->
       
        <portal-target name="editattributeset" :slot-props="{attributesetid:attributeset.id}"></portal-target>
       
        <span ><a href="" data-toggle="tooltip" title="Delete" @click.prevent="cancel(attributeset.id)"><img src="~/assets/img/delete.svg" class="w-4 h-4"></a></span>
<!-- 
        <span><a href="" @click.prevent="addattributes(attributeset.id)"><img src="~/assets/img/plus-button.svg" class="w-4 h-4"></a></span> -->
        
        </td>
      </tr>
    </tbody>
  </table>
  </div>
    <div v-if="this.page_count>1">
     <paginate
       v-model="page"
       :page-count="this.page_count"
       :page-range="3"
       :margin-pages="1"
       :click-handler="getattributeset"
       :prev-text="'<'"
       :next-text="'>'"
       :container-class="'pagination'"
       :page-class="'page-item'">
       
     </paginate>
   </div>
  </div> 
   <addattributesetform/>
     <editattributesetform/>
</div>
</template>

<script>
import PortalVue from "portal-vue";
import { mapActions } from 'vuex'
import addattributesetform from '@/components/seller/AttributesetCreator'
import editattributesetform from '@/components/seller/EditAttributeset'
import VueSwal from 'vue-swal';

  export default {
    data()
    {
      return{
       attributesets:[],
       refresh:false,
       page: 1,
       page_count: 0,
       showfilter:0,
       recordnotfound:'',
       total:'',
      }
    },
 components:{
      addattributesetform,
      editattributesetform
    },
 
     methods: {
     async changepage($event){
      
        this.showfilter=$event.target.value;
        let response = await this.$axios.$get('seller/displayattributeset?show='+ this.showfilter)
            
         this.attributesets = response.data;
        this.page_count = response.last_page;
        this.total = response.total;
       
      },
      async getattributeset (page = 1) {
       this.showfilter=0;
        let response = await this.$axios.$get('seller/displayattributeset?show=' +this.showfilter
                                                                                 +'?&page='+page)
        this.attributesets = response.data;
        if(this.attributesets.length>0){
          this.page_count = response.last_page;
          this.total = response.total;
        }
        else{
          this.recordnotfound="No Records Found...";
        }
        
      },
      
      async destroy(attributesetid)
      {
        
         let response = await this.$axios.$get('seller/deleteattributeset/'+ attributesetid);
         this.getattributeset();
      },
        cancel(attributesetid) {
          var thisswal = this;
               swal({
                 title: "Delete this attributeset?",
                 text: "Are you sure? You won't be able to revert this!",
                 icon: "warning",
                 buttons: [
                     "No",
                     "Yes"
                 ],
               dangerMode: true,
             }).then(function(isConfirm) {
                 if (isConfirm) {

                     thisswal.destroy(attributesetid);
                 }
                 else {
                     //swal(thisswal.trans.reject_cancel);
                 }
             });

       },

      async addattributes(attributesetid){
        this.$router.replace({
          name: 'seller-addattribute',
          params: { attributesetid: attributesetid, }
        })
      }

      
    },
    created () {
      this.getattributeset();
       this.$nuxt.$on('dataaddattributeset', data => {
          
          this.refresh=data;
         
           if(this.refresh===true)
           {
              this.getattributeset();
           }
        
        });
    },


  }
</script>
