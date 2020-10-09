<template>
  <!-- <div class="column is-three-quarters">
                   
          
          <button class="button is-info" @click.prevent="addsubcategory()">Add SubCategory</button>  
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
          <nuxt-link  :to="{name: 'seller-editsubcategory',params:{categoryid:category.id,parentid:category.parent_id}}" class="button is-info">
             Edit
            </nuxt-link>
       </td>
       <td>
           <a href=""  class="button is-info" @click.prevent="destroy(category.id)">Delete</a>
       </td>

      </tr>
    </tbody>
  </table>

</div> -->
<div>
 

  <portal-target name="addsubcategoryform" :slot-props="{categoryid:category_id}">
    
  </portal-target>
  <portal-target name="editsubcategoryform"></portal-target>
   <portal-target name="addattributesetcategoryform"></portal-target>
   <h1 class="pb-2 font-bold">Subcategory</h1>
   <h6>Parent Category : {{categoryname}}</h6>
   <div class="my-3">
       <ul class="breadcrumb">
      <li><nuxt-link :to="{name: 'dashboard'}">Home</nuxt-link></li>
      <li><nuxt-link :to="{name: 'seller-displaycategory'}" >Category</nuxt-link></li>
      <li>Subcategory</li>
       </ul>
   </div>
    <div v-if="this.success!=null" class="w-1/2 my-4 bg-green-light p-4 flex justify-between" id="success-alert">
    <p class="text-white">{{this.success}}</p>
    <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
  </div>
    <div class="bg-card">
    <div class="cart-header flex flex-col lg:flex-row md:flex-row">
    <div class="flex-1 py-1">
   <!--  <img src="~/assets/img/menu.svg" class="w-3 h-3"><span class="mx-2 font-bold">Attributeset</span> --><p class="font-bold text-xs uppercase text-grey-darker flex">
   <span class="my-2 mr-2">Show</span>
    <span>
     <div class="relative">
        <select class="block appearance-none w-12  border  text-black px-2 py-2 leading-tight focus:outline-none" id="count">
          <option>5</option>
          <option>10</option>
          <option>15</option>
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
  <portal-target name="addsubcategory"></portal-target>
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
     <!--  <input type="hidden" v-model="id"  name="">
      <input type="hidden" v-model="name"  name=""> -->
    <table class="table table-hover bg-table">
    <thead class="">
       <tr>
        <th class="hidden"><p>Id</p></th>
        <th><p>Category Name</p></th>
        <th><p>Slug</p></th>
        <th><p>Actions</p></th>
        <th><p>Attach AttributeSet</p></th>
      </tr>
    </thead>
    <tbody class="bg-custom">
     <tr v-for="category in categories" :key="category.id">
        <input type="hidden" name="categoryid"  :value="category.id"/>
        <td> <p :class="{ '': category.id }">
            {{category.name}}</p></td>
       
       
        <td>
          <p>
            {{category.slug}}  
           </p></td>

        <td class="whitespace-no-wrap flex">
       <portal-target name="editsubcategory" :slot-props="{categoryid:category.id}"></portal-target>
       
        <span><a href="" data-toggle="tooltip" title="Delete" class="" @click.prevent="cancel(category.id)"><img src="~/assets/img/delete.svg" class="w-4 h-4"></a></span>
        </td>
        <td>
         <div v-if="category.attributesetcount>0">
             <a  href="#" class="underline">Attached</a>
          </div>

       
       
          <div v-if="category.attributesetcount<=0" class="flex items-center">
             <a  class="underline mx-1" @click.prevent="attachattributeset(category.id)">Attach</a>
              <portal-target name="addattributesetcategory" :slot-props="{categoryid:category.id}"></portal-target>
          </div>
          
          <!-- <a  href="" class="mx-2 underline"  @click.prevent="attachattributeset(category.id)">Attach AttributeSet</a>  -->

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
       :page-class="'page-item'"
       :prev-link-class="'prev'"
       :next-link-class="'next'">
     </paginate>
   </div>
  </div>
  </div> 
  <addsubcategoryform/>
  <editsubcategoryform />
   <addattributesetcategoryform/>
</div>
</template>

<script>

import PortalVue from "portal-vue";
import { mapActions } from 'vuex'
   import addsubcategoryform from '@/components/seller/SubCategoryCreator'
   import editsubcategoryform from '@/components/seller/EditSubCategory'
    import addattributesetcategoryform from '@/components/seller/AttributesetCategoryCreator'
   import VueSwal from 'vue-swal';
 // import Paginate from 'vuejs-paginate'

   export default {
 //  props:['category_id','category_name'],
    data()
    {
      return{
       categories:[],
       categoryid:'',
       categoryname:'',
       refresh:false,
       success:null,
       page: 1,
       page_count: 0,
       total:'',
       // id:this.$route.params.category_id,
       // name:this.$route.params.category_name

      }
    },

 components:{
      addsubcategoryform,
      editsubcategoryform,
      addattributesetcategoryform,
      //Paginate
    },


     methods: {
    
      async getcategory (page = 1) {
  
         // this.categoryid=this.$route.params.category_id;
         // this.categoryid=this.$route.params.category_id;
         this.categoryid=this.$route.query.category_id;
         this.categoryname=this.$route.query.slug;

        let response = await this.$axios.$get('seller/displaysubcategory/'+this.categoryid+'?' +'&page='+page)
       
        this.categories = response.data;
        this.page_count = response.meta.last_page;
           this.total = response.meta.total;
      },
       
       async attachattributeset(categoryid){
        this.$router.replace({
          name: 'seller-displayattributesetcategory',
          query: { category_id: categoryid }
        })
      },
      
      async destroy(categoryid)
      {
       
         let response = await this.$axios.$get('seller/deletesubcategory/'+ categoryid);
         this.getcategory();
          this.success="Deleted Successfully";
      },
       async close(){
         this.success=null;
      },

      cancel(categoryid) {
      var thisswal = this;
           swal({
             title: "Delete this SubCategory?",
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

      
      async addsubcategory(){
      
         this.$router.replace({
          name: 'seller-addsubcategory',
          params: { category_id: this.categoryid }
        })
      }
    
    },
     async add(categoryid) {
    
        this.categoryid=this.$route.query.category_id;
         this.$router.replace({
          name: 'seller-addattributesetcategory',
          params: { category_id: this.categoryid }
        })
      },
      
    
    created () {
      this.getcategory()
         this.$nuxt.$on('dataaddsubcategory', data => {
          
          this.refresh=data.refresh;
         
           if(this.refresh===true)
           {
              this.getcategory();
              this.success=data.message;
           }
        
        });
    },


    

  }
</script>
<style lang="css">
.pagination {
}
.page-item {
}
select {
   background: url(/uploads/static/wallet_all.png) no-repeat right;

}
option
{
 color:havyn-purble;
}

</style>
