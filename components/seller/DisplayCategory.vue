<template>
<!--   <div class="column is-three-quarters">
        
            <nuxt-link  :to="{name: 'seller-addcategory'}" class="button is-info">
             Add Category
            </nuxt-link>
         <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col" style="visibility: hidden;">Id</th>
              <th scope="col">Category Name</th>
              <th scope="col">Slug</th>
              <th scope="col" colspan="2">Actions</th>
              
            </tr>
          </thead>
         <tbody>
        <tr v-for="category in categories" :key="category.id">
        <input type="hidden" name="categoryid"  :value="category.id"/>
        
       <td></td>
        <td>
          <p :class="{ 'has-text-weight-bold': category.id }">
            {{category.name}}
         
            
           </p>
        </td>
        <td>
          <p :class="{ 'has-text-weight-bold': category.id }">
            {{category.slug}}
           
            
           </p>
        </td>
        <td> 
           <a href=""  class="button is-info" @click.prevent="getsubcategory(category.id)">Sub Category</a>
       </td>
       <td> 
          <nuxt-link  :to="{name: 'seller-editcategory',params:{categoryid:category.id}}" class="button is-info">
             Edit
            </nuxt-link>
       </td>
       <td>
           <a href=""  class="button is-info" @click.prevent="destroy(category.id)">Delete</a>
       </td>
       <td>
           <a  href="" class="button is-info"  @click.prevent="attachattributeset(category.id)">Attach AttributeSet</a>
       </td>

      </tr>
    </tbody>
  </table>

</div> -->

<div>
  <portal-target name="addcategoryform"></portal-target>
   <portal-target name="editcategoryform"></portal-target>
     <portal-target name="addsubcategoryform" ></portal-target>

   <h1 class="pb-2 font-bold">Category</h1>
   <div class="my-3">
       <ul class="breadcrumb">
          <li><nuxt-link :to="{name: 'dashboard'}">Home</nuxt-link></li>
          <li>Category</li>
       </ul>
   </div>
   <div v-if="this.success!=null" class="w-1/2 my-4 bg-green-light p-4 flex justify-between" id="success-alert">
    <p class="text-white">{{this.success}}</p>
    <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
  </div>

    <div class="bg-card">
    <div class="cart-header flex flex-col lg:flex-row md:flex-row">
    <div class="flex-1 py-1">
   <p class="font-bold text-xs uppercase text-grey-darker flex">
   <span class="my-2 mr-2">Show</span>
    <span>
     <div class="relative" >
        <select  class="block appearance-none w-12  border  text-black px-2 py-2 leading-tight focus:outline-none" id="count">
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
   
       <portal-target name="addcategory" ></portal-target>

<form  method="POST" role="search">
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
      <input class="border rounded-full w-full py-2 pl-8 pr-3 text-grey-darker leading-tight focus:outline-none" v-model="searchresult.name"  id="search" type="text" placeholder="Search..." name="q" v-on:change="searchevent()" >
    <!--   <a href="#" class="button is-info" @click="search()">Search</a> -->
    
    </div>
    </form>
  </div>
    </div>
    <div class="overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto cart-list">
    <table class="table table-hover bg-table">
    <thead class="">
       <tr>
        <th class="hidden"><p>Id</p></th>
        <th><p>Category Name</p></th>
        <th><p>Slug</p></th>
        <th><p>Commission Fee</p></th>
        <th><p>Actions</p></th>
        <th><p>Options</p></th>
      </tr>
    </thead>
    <tbody class="bg-custom">
    <tr v-for="category in categories" :key="category.id">
        <input type="hidden" name="categoryid"  :value="category.id"/>
        <td>
        <p>
            {{category.name}}
        </p>
        </td>
        <td>
           <p>
            {{category.slug}}
           </p>
        </td>
        <td>
          <p>
            {{category.commission_fee}}
          </p>
        </td>
        <td class="whitespace-no-wrap flex items-center">
        <!--  <span class="mx-2">

      <nuxt-link  :to="{name: 'seller-editcategory',params:{categoryid:category.id}}" class="" data-toggle="tooltip" title="Edit"><img src="~/assets/img/edit.svg" class="w-4 h-4">

        </nuxt-link> 
        </span> --><!-- :slot-props="{categoryid:category.id}" -->
          <portal-target name="addsubcategory" :slot-props="{categoryid:category.id,'seg':'selected_cat'}"></portal-target>
 <portal-target name="editcategory" :slot-props="{categoryid:category.id}" ></portal-target>
       
        <span> <a  title="Delete"  class="underline" @click.prevent="cancel(category.id)"><img src="~/assets/img/delete.svg" class="w-4 h-4"></a></span>

        </td>
        <td>
         <a  class="underline cursor-pointer" @click.prevent="getsubcategory(category.id,category.slug)">Sub Category</a><span class="mx-1">{{category.count}}</span>
         
                <!-- <a  href="" class="mx-2 underline"  @click.prevent="attachattributeset(category.id)">Attach AttributeSet</a> -->
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="this.page_count>1">
     <paginate
       v-model="page"
       :page-count="this.page_count"
       :page-range="3"
       :margin-pages="1"
       :click-handler="getcategory"
       :prev-text="'<'"
       :next-text="'>'"
       :container-class="'pagination'"
       :page-class="'page-item'">    
     </paginate>
   </div>
  </div>
  </div> 
  <addcategoryform/>
  <editcategory />
    <addsubcategoryform/>
</div>
</template>

<script>
import PortalVue from "portal-vue";
import { mapActions } from 'vuex'
import addcategoryform from '@/components/seller/AddCategoryForm'
import editcategory from '@/components/seller/EditCategory'
import addsubcategoryform from '@/components/seller/SubCategoryCreator'

import VueSwal from 'vue-swal';
//import Paginate from 'vuejs-paginate'
import $ from 'jquery'
  export default {
    data()
    {
      return{
       categories:[],
       categoryid:'',
       categoryname:'',
       segment:'',
      // errors:[]
       refresh:false,
       success:null,
       page: 1,
       page_count: 0,
       total:'',
       searchresult:{
        name:''
       }
      }
    },
    components:{
      addcategoryform,
      editcategory,
            addsubcategoryform,

      //Paginate
    },

 
     methods: {

   
      async getcategory (page = 1) {
       
        let response = await this.$axios.$get('seller/displaycategory?' +'&page='+page)
       
        this.categories = response.data;
       
        this.page_count = response.meta.last_page;
        this.total = response.meta.total;
      },

      async searchevent(){
        
        let response = await this.$axios.$post('seller/searchcategory',this.searchresult)
             
        this.categories = response.data;
      },
      
      async close(){
         this.success=null;
      },
      async destroy(categoryid)
      {
       
         let response = await this.$axios.$get('seller/deletecategory/'+ categoryid);
         this.getcategory();
         this.success="Deleted Successfully";
      }, 
      cancel(categoryid) {
      var thisswal = this;
           swal({
             title: "Delete this Category?",
             text: "Are you sure? You won't be able to revert this!",
             icon: "warning",
             buttons: [
                 "No",
                 "Yes"
             ],
           dangerMode: true,
         }).then(function(isConfirm) {
             if (isConfirm) {

                 thisswal.destroy(categoryid);
             }
             else {
                 //swal(thisswal.trans.reject_cancel);
             }
         });

      },
 
      async getsubcategory(categoryid,name){
         this.categoryid=categoryid;
         this.categoryname=name;
         this.$router.replace({
          name: 'seller-displaysubcategory',
          //params: { category_id: categoryid ,category_name: name},
           query: {category_id: this.categoryid ,slug: this.categoryname}
        
        })
      },


      async attachattributeset(categoryid){
        this.$router.replace({
          name: 'seller-displayattributesetcategory',
          params: { category_id: categoryid }
        })
      },
      
      
     
    },
    created () {
      this.getcategory()
      this.$nuxt.$on('dataaddcategory', data => {
      //this.$nuxt.$on('dataaddcategory',function(refresh,message) {
     
          this.refresh=data.refresh;
         
           if(this.refresh===true)
           {
              this.getcategory();
              this.success=data.message;
           }
        
        });

       //this.$nuxt.$emit('getCategory()',true);
    },
    watch:{
      // searchresult:function(searchresult){
      //   alert('hhh');
      //   this.searchresult=searchresult;
      //  this.searchevent();
      // }
    }


    

  }
</script>
<style lang="css">
.pagination {
  list-style: none;
  display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
}
.page-item {
  border: 2px solid;
    padding: 9px;
    margin-right: 1px;
}
.prev-text
{
  background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.next-text
{
background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.disabled
{

}
.prev
{
  background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.next
{
 background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px; 
}
.page-item active
{
  background-color: white;
  border:2px solid #d8d8d8;
}
</style>

