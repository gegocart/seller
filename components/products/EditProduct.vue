<template>
  <div id="app">
     <portal-target name="editproducttab"></portal-target>
     <editproducttab> </editproducttab>
 <!--  <h1 class="title is-4">Edit Product</h1> -->
  <div v-bind:class="[ this.product_tab==1?'block' :'hidden']">
 <form  action="#" @submit.prevent="store" class="custom-form" enctype="multipart/form-data">
  <div v-if="this.success!=null" class="w-1/2 my-4 bg-red-light p-4 flex  justify-between" id="success-alert">
      <p class="text-white" v-html="success">{{this.success}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
     </div>
  <div class="flex flex-col lg:flex-row md:flex-row">
    
<div class=" w-full lg:w-3/5">
     <!-- <div class="hidden columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Store</label>
          <div class="select is-fullwidth w-full lg:w-3/4">
           <select @change="changed" v-model="editproduct.store_id">
                <option value="">Please select</option>

                <option :value="store.id" v-for="store in stores" 
                :key="store.id">
                  {{ store.name }}
                </option>
              </select>
           <p class="help is-danger" v-if="errors.store_id">
                    {{ errors.store_id[0] }}
                  </p>
          </div>
        </div>
      </div> -->
    
      <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Product Name</label>
          <div class="control w-full lg:w-3/4">
            <input class="input" type="text" :class="{ 'is-danger': errors.name }" 
            v-model="editproduct.name"  autofocus="">
            <p class="help is-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
           
          </div>
        </div>
      </div>
       <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Category</label>
          <div class="select is-fullwidth w-full lg:w-3/4" >
           <select @categorychange="changed" v-model="editproduct.category_id">
              <option value="">Please select</option>

              <option :value="category.id" v-for="category in subcategories" 
              :key="category.id">
                {{ category.name }}
              </option>
            </select>
            <p class="help is-danger" v-if="errors.category_id">
                    {{ errors.category_id[0] }}
            </p>
          </div>
        </div>
      </div>
        
      <div class="hidden columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Slug</label>
            <div class="control w-full lg:w-3/4">
             <!--  <input class="input" type="text" v-model="editproduct.slug" :class="{ 'is-danger': errors.slug }"> -->
              <slugWidgetmy :title="editproduct.name" @slug-changed="updateSlug" />
              <input type="hidden" name="slug" v-model="editproduct.slug">
              <p class="help is-danger" v-if="errors.slug">
                    {{ errors.slug[0] }}
              </p>
            </div>
          </div>
        </div>
        <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">SKU</label>
          <div class="control w-full lg:w-3/4">
            <input class="input" type="text" :class="{ 'is-danger': errors.sku }" v-model="editproduct.sku"  autofocus="">
            <p class="help is-danger" v-if="errors.sku">
                    {{ errors.sku[0] }}
                  </p>
           
          </div>
        </div>
      </div>
        <div class="columns mt-2 lg:mt-0 mb-2 lg:mb-10">
            <div class="field column flex">
              <label class="label w-1/4">Status</label>
             <div class="onoffswitch">
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" v-model="editproduct.status" :class="{ 'is-danger': errors.status }">
                    <label class="onoffswitch-label" for="myonoffswitch">
                        <div class="onoffswitch-inner"></div>
                        <div class="onoffswitch-switch"></div>
                    </label>
                  </div>
            
                     <p class="help is-danger" v-if="errors.status">
                        {{ errors.status[0] }}
                    </p>              
             
            </div>
          </div>
            <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Price</label>
                <div class="control w-full lg:w-3/4">


             <input class="input" type="text" :class="{ 'is-danger': errors.price }" v-model="editproduct.price"  autofocus="">               
              <p class="help is-danger" v-if="errors.price">
                    {{ errors.price[0] }}
              </p>
              </div>
            </div>
          </div>
           <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Weight</label>
                <div class="control w-full lg:w-3/4">


             <input class="input" type="text" :class="{ 'is-danger': errors.weight }" v-model="editproduct.weight"  autofocus="">               
              <p class="help is-danger" v-if="errors.weight">
                    {{ errors.weight[0] }}
              </p>
              </div>
            </div>
          </div>
           <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Tax</label>
                <div class="control w-full lg:w-3/4">
                 <select  v-model="editproduct.tax_id">
                    <option value="">Please select</option>

                    <option :value="tax.id" v-for="tax in taxlists" 
                    :key="tax.id">
                    {{tax.tax_name}} - {{ tax.tax_rate }}
                    </option>
              </select>
           <p class="help is-danger" v-if="errors.tax_id">
                    {{ errors.tax_id[0] }}
                  </p>
              </div>
            </div>
          </div>
          <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Type</label>
                <div class="control w-full lg:w-3/4">
                 <select  v-model="editproduct.type">
                    <option value="">Please select</option>
                    <option value="physical">Physical</option>
                    <option value="giftcard">Giftcard</option>
                    <option value="downloadable">Downloadable</option>
              </select>
           <!-- <p class="help is-danger" v-if="errors.type">
                    {{ errors.type[0] }}
                  </p> -->
              </div>
            </div>
          </div>
          
          <div class="columns mb-2 lg:mb-10">
            <div class="columns">
              <div class="field flex flex-col lg:flex-row">
                <label class="label w-full lg:w-1/4">Description</label>
                <div class="control w-full lg:w-3/4">
                  <textarea class="form-control" rows="5" cols="50"  v-model="editproduct.description"></textarea>
                  <!-- <input class="input" type="text" v-model="form.description"> -->
                </div>
              </div>
            </div>
           
          </div>
          </div>
          <div class="w-full lg:w-2/5 lg:mx-8 md:mx-8 mx-0">
          <!--  <div class="columns mb-2 lg:mb-10">
            <div class="field column flex"> -->
             <!--  <label class="label">Product Image</label> -->

             <!--    <img v-bind:src="'http://admin-app.test/uploads/'+ editproduct.product_Image" class="w-32 h-32"> -->
              <!-- <input type="file" name="productimage" v-on:change="onImageChange" :class="{ 'is-danger': errors.product_Image }">               
              <p class="help is-danger" v-if="errors.product_Image">
                    {{ errors.product_Image[0] }}
              </p> -->
 <!--         <div class="helper"></div>
<div class="drop display-inline align-center h-32" @dragover.prevent @drop="onDrop" >
    <div class="helper"></div>
    <label v-if="!productimage" class="btn display-inline">Add Product Logo
          <input type="file" name="productimage"  v-on:change="onImageChange" :class="{ 'is-danger': errors.product_Image }">
        </label>
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
        <div class="upload-bg" v-bind:style="{ backgroundImage: 'url(' + productimage + ')' }">
        <a class="remove-btn float-right" @click="removeFile">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" xml:space="preserve" class="w-2 h-2 fill-current m-1 "><g><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z">
    </path></g>
    </svg>
    </a>
    </div>
      </div>
    </div> 
            </div>
          </div> -->
         <div class="dropzone-img">
          <dropzone  id="foo" ref="el" :options="options" v-on:vdropzone-sending="sendingEvent"  :destroyDropzone="true" v-on:vdropzone-removed-file="vcanceled"></dropzone>
        </div>
          <div class="main-edit my-4">
              <div class="flex flex-wrap">

                <div class="edit-img" v-for="images in editproduct.productgallery" :key="images.id">
               
                      <div class="editimage" >
                             <img v-bind:src="rooturl +'/uploads/'+images.imagepath" class="rounded" :key="images.id">
                      </div>
                      <div class="removeedit">
                           <a href="#" class="edit-remove" :key="images.id" @click="removeFiles(images.id,images.product_id)">Remove</a>
                      </div>
                 </div>

                 
              </div>
         </div>
    </div>
    </div>
          <div class="field">
            <p class="control">
              <button class="button is-info">
                Update Product
              </button>
              <a class="button is-text"  @click.prevent="$emit('cancel')">Cancel</a>
            </p>
          </div>
   </form>
 </div>
  <editproductattribute :productid="propsproduct_id" :categoryid="propscategoryid" 
 :price="productprice" ></editproductattribute>
 </div>
</template>

<script>
 
  import { mapGetters,mapActions } from 'vuex'
  import addproductimage from '@/components/products/AddProductImage'
  import StoreDropdown from '@/components/form/StoreDropdown'
  import CategoryDropdown from '@/components/form/CategoryDropdown'
  import slugWidgetmy from '@/components/form/slugWidgetmy'
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'
  import editproducttab from '@/components/products/EditProductTab'
  import editproductattribute from '@/components/products/EditProductAttribute'

  export default {
    props:['product_id'],
    data () {
      return {
         productimage:'',
         success:null,
        editproduct: {
          user_id: this.$auth.user.id,
          store_id:'',
          name: '',
          category_id:'',
          slug: '',
          description: '',
          price:'',
          weight:0,
          sku:'',
          product_image:'',
          imagecount:'',
          status:'',
          tax_id:'',
          type:''
         
        },
        stores:[],
        taxlists:[],
        subcategories:[],
        imagefile:[],
        rooturl:process.env.SITEURL,
        productid:this.$route.params.product_id,
         options: {
        url: "http://httpbin.org/anything",
        addRemoveLinks: true,
        maxFiles: 10,
        },
       propsproduct_id:'',
       propscategoryid:'',
       productprice:'',
       product_tab:'',
      attributes:[]
    }
    },
     components: {
        addproductimage,
        StoreDropdown,
        CategoryDropdown,
        slugWidgetmy,
        Dropzone,
        editproducttab,
        editproductattribute
    },
    // https://www.sitepoint.com/image-upload-example/

    methods: {
            ...mapActions({
              flash: 'alert/flash'
            }),
            onImageChange(e){
              this.createFile(e.target.files[0]);//prev
                this.editproduct.product_image = e.target.files[0];
                 },

            //dropzone
        removeAllFiles() { //not
          
          this.$refs.el.dropzone.removeAllFiles();
         },
         close(){
           this.success=null;
         },
        async removeFiles(id,productid){
          
          let response = await this.$axios.$get('products/deleteproductimage/' + id +productid)
       
          this.editproduct.productgallery = response;
        },
        sendingEvent (file, xhr, formData) {
          
          this.imagefile.push(file);
         },
          showSuccess(file,response){
            //alert('hi');
         },
         vcanceled(file){
          if(file.name!="" || file.name!=undefined){
            for(var i=0;i<this.imagefile.length;i++){
              if(this.imagefile[i].name===file.name){
                this.imagefile.splice(i,1);
              }
             }
          }
         

         },
        //end dropzone
       
      async store () {
            this.propscategoryid=this.editproduct.category_id;
        let formData = new FormData();
      //  formData.append('user_id',this.$auth.user.id);
        formData.append('store_id',this.editproduct.store_id);
        formData.append('name',this.editproduct.name);
        formData.append('category_id',this.editproduct.category_id);
        formData.append('slug',this.editproduct.slug);
        formData.append('description',this.editproduct.description);
        formData.append('product_image',this.editproduct.product_image);
        formData.append('sku',this.editproduct.sku);
        formData.append('price',this.editproduct.price);
        formData.append('weight',this.editproduct.weight);
        formData.append('imagecount',this.imagefile.length);
        formData.append('tax_id',this.editproduct.tax_id);
        formData.append('type',this.editproduct.type);
        if(this.editproduct.status===true)
          formData.append('status',1);
        else
           formData.append('status',0);
        for(let i=0; i<this.imagefile.length;i++)
        {
            if(typeof this.imagefile[i] !== "undefined")
           {
             formData.append('product_image'+i,this.imagefile[i]);
           }
           else
           {
             formData.append('product_image'+i,'');
           }

          /// formData.append('product_image',this.form.imagefile);
        }

        let response = await this.$axios.$post('products/editproducts/'+ this.productid, 
            formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }}).then((response) => {
                 
                  var self=this;
                 if(response.message!=="Updated"){

                 // alert(response.message);
                }
                else{
                   
                    self.productprice=self.editproduct.price;
                    self.product_tab = 2;
                    self.$nuxt.$emit('product_tab', self.product_tab); 
                    self.$nuxt.$emit('product_id',self.propsproduct_id);
                   self.success="Updated Successfully";
                  //this.$router.back();
                 
               }
             }).catch((error) => {
               self.success=error;
            });


      },

      
      async getStores () {
        let response = await this.$axios.$get('stores/getmystores')
        
        this.stores = response.data
      },
      async geteditproduct () {

        let response = await this.$axios.$get('products/editproducts/' + this.productid )
        this.editproduct = response.data;
        this.editproduct.store_id=this.editproduct.storedetail.id;
        this.editproduct.category_id=this.editproduct.category[0].id;
         this.propscategoryid=this.editproduct.category_id;
         this.propsproduct_id=this.editproduct.id;
        this.productprice=this.editproduct.price;
         //this.product_tab = 2;
        //this.$emit('product_tab', this.product_tab);
       
        // this.productimage=process.env.SITEURL+'/uploads/'+this.editproduct.product_Image;
    
     //   http://admin-app.test/uploads/'+ editproduct.product_Image
      
      },
       async getTaxRate () {
        let response = await this.$axios.$get('tax/displaytax')
        this.taxlists = response
      },
      async getSubCategories () {
        let response = await this.$axios.$get('activecategory')
         this.subcategories = response;
      },
      changed ($event) {
        this.$emit('input', $event.target.value)
      },
      categorychanged ($event) {
        this.$emit('input', $event.target.value)
      },
      //preview start
        onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
    /*  onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },*/
  
      createFile(file) {
        if (!file.type.match('image.*')) {
        //  alert('Select an image');
          return;
        }
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.productimage = e.target.result;
        }
        reader.readAsDataURL(file);
      },
      removeFile() {
        this.productimage = '';
      },


       async getAttributes () {

        var url='attributes/'+this.editproduct.category_id;
        //alert(this.editproduct.category_id);
        let response = await this.$axios.$get(url)
         this.attributes = response;
         
         
      },
       //preview end
      updateSlug: function(val) {
          this.editproduct.slug = val;
        },
      
    },
    created () {
      //this.getStores();
        this.$nuxt.$on('product_tab', data => {
            this.product_tab = data;

        });
        
      this.geteditproduct();
      this.getSubCategories();
      this.getTaxRate();

    },
     mounted() {
    // Everything is mounted and you can access the dropzone instance
    const instance = this.$refs.el.dropzone
  }
    
  }
</script>