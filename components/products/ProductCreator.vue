<template>
  <div id="app">
  <portal-target name="producttab"></portal-target>
  <producttab> </producttab>
  <!--  <h1 class="title is-4">Add A New Product</h1> -->
  <div v-bind:class="[ this.product_tab==1?'block' :'hidden']">
 <form  action="#" @submit.prevent="store" class="custom-form" enctype="multipart/form-data">
   <div v-if="this.success!=null" class="w-1/2 my-4 bg-red-light p-4 flex  justify-between" id="success-alert">
      <p class="text-white" v-html="success">{{this.success}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
     </div>
  <div class="flex flex-col lg:flex-row md:flex-row">
   
<div class="w-full lg:w-3/5">
     <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Store</label>
          <div class="select is-fullwidth w-full lg:w-3/4">
            <StoreDropdown v-model="form.store_id" :class="{ 'is-danger': errors.store_id }" />
           <p class="help is-danger" v-if="errors.store_id">
                    {{ errors.store_id[0] }}
                  </p>
          </div>
        </div>
      </div>
     
      <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Product Name</label>
          <div class="control w-full lg:w-3/4">
            <input class="input" type="text" :class="{ 'is-danger': errors.name }" v-model="form.name"  autofocus="">
            <p class="help is-danger" v-if="errors.name">
                    {{ errors.name[0] }}
                  </p>
           
          </div>
        </div>
      </div>
       <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Category</label>
          <div class="select is-fullwidth w-full lg:w-3/4">
            <ActiveCategoryDropdown v-model="form.category_id"  :class="{ 'is-danger': errors.category_id }"/>
            <p class="help is-danger" v-if="errors.category_id">
                    {{ errors.category_id[0] }}
            </p>
          </div>
        </div>
      </div>
        
      <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Slug</label>
            <div class="control w-full lg:w-3/4">
             <!--  <input class="input" type="text" v-model="form.slug" :class="{ 'is-danger': errors.slug }"> -->
              <slugWidgetmy :title="form.name" @slug-changed="updateSlug" />
              <input type="hidden" name="slug" v-model="form.slug">

            
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
            <input class="input" type="text" :class="{ 'is-danger': errors.sku }" v-model="form.sku"  autofocus="">
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
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" v-model="form.status" :class="{ 'is-danger': errors.status }">
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
          <div class="columns mb-2 lg:mb-10 ">
            <div class="field column flex flex-col lg:flex-row ">
              <label class="label w-full lg:w-1/4">Price</label>
                <div class="control w-full lg:w-3/4">


             <input class="input" type="number" :class="{ 'is-danger': errors.price }" v-model="form.price"  autofocus="">               
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


             <input class="input" type="number" :class="{ 'is-danger': errors.weight }" 
             v-model="form.weight"  autofocus="">               
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
                 <select  v-model="form.tax_id">
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
                 <select  v-model="form.type">
                    <option value="">Please select</option>
                    <option value="physical">Physical</option>
                    <option value="giftcard">Giftcard</option>
                    <option value="downloadable">Downloadable</option>
              </select>
         <!--   <p class="help is-danger" v-if="errors.type">
                    {{ errors.type[0] }}
                  </p> -->
              </div>
            </div>
          </div>
      <div class="columns mb-2 lg:mb-10">
            <div class="column">
              <div class="field flex flex-col lg:flex-row">
                <label class="label w-full lg:w-1/4">Description</label>
                <div class="control w-full lg:w-3/4">
                  <textarea class="form-control" rows="5" cols="50"  v-model="form.description"></textarea>
                    <p class="help is-danger" v-if="errors.description">
                    {{ errors.description[0] }}
                  </p>
                  <!-- <input class="input" type="text" v-model="form.description"> -->
                </div>
              </div>
            </div>
           
          </div>

      </div>
        <div class="w-full lg:w-2/5 lg:mx-8 md:mx-8 mx-0">
       <!--     <div class="columns mb-10">
            <div class="field column">
              <div class="helper"></div>
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
        <!--  <addproductimage></addproductimage> -->

        <div class="dropzone-img">
          <dropzone  id="foo" ref="el" :options="options" :destroyDropzone="true" v-on:vdropzone-success="showSuccess" v-on:vdropzone-sending="sendingEvent" v-on:vdropzone-thumbnail="showthumbnail"></dropzone>

        </div>
         <!--  <p class="help is-danger" v-if="errors.product_image">
                    {{ errors.product_image[0] }}
              </p> -->
            <!-- <div class="columns mb-2 lg:mb-10">
            <div class="field column">
<div class="input-group control-group increment" >
          <input type="file" name="filename[]" v-on:change="onImageChange" class="">
          <div class="input-group-btn"> 
            <span @click="addimage()" class="btn btn-success" type="button"><i class="glyphicon glyphicon-plus"></i>Add</span>
          </div>
        </div>
        </div>
        </div>
         <div class="columns mb-2 lg:mb-10">
            <div class="field column"> -->
              <!-- <label class="label">Product Image</label>
              <input type="file" name="productimage" v-on:change="onImageChange" :class="{ 'is-danger': errors.product_image }"> -->  
          
         
        
     <!--    <div class="clone hide">
          <div class="control-group input-group" style="margin-top:10px">
            <input type="file" name="filename[]" v-on:change="onImageChange" class="">
            <div class="input-group-btn"> 
              <button @click="remove()" class="btn btn-danger" type="button"><i class="glyphicon glyphicon-remove"></i> Remove</button>
            </div>
          </div>
        </div> -->
             <!--  <p class="help is-danger" v-if="errors.product_image">
                    {{ errors.product_image[0] }}
              </p> -->
            </div>
         </div>
          <input type="hidden" v-model="form.imagecount" name=""> 
  <!--    </div>
    
       </div> -->


          <div class="field">
            <p class="control">
              <button class="button is-info">
                Add Product
              </button>
              <a class="button is-text"  @click="cancel">Cancel</a>
            </p>
          </div>
   </form>
 </div>  
<!--  <addproductattribute :productid="propsproduct_id" :categoryid="propscategoryid" 
 :price="productprice"></addproductattribute> -->

 <addproductattribute ></addproductattribute>

 </div>

</template>   

<script>
 import PortalVue from "portal-vue";
  import { mapGetters,mapActions} from 'vuex'
  import addproductimage from '@/components/products/AddProductImage'
  import StoreDropdown from '@/components/form/StoreDropdown'
  import ActiveCategoryDropdown from '@/components/form/ActiveCategoryDropdown'
  import slugWidgetmy from '@/components/form/slugWidgetmy'
  import jquery from 'jquery'
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'
  import producttab from '@/components/products/ProductTab'
  import addproductattribute from '@/components/products/AddProductAttribute'

  export default {
    data () {
      
      return {
  productimage:'',
        
        success:null,
        form: {
          user_id: this.$auth.user.id,
          store_id:'',
          name: '',
          category_id:'',
          slug: '',
          description: '',
          product_image:'',
          sku:'',
          price:'',
          weight:0,
          status:'',
          imagecount:'',
          tax_id:'',
          type:'',
         // default: true
        },
        stores:[],
        taxlists:[],
        newerrors:[],
        imagefile:[],
        attributes:[],
         inputdata:{
            product_id:'',
            attributes:[]
          },
          propsproduct_id:'',
          propscategoryid:'',
          productprice:'',
        // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "http://httpbin.org/anything",
        addRemoveLinks: true,
        maxFiles: 10,
      },
          product_tab:'',
      }
    },

     components: {
      addproductimage,
      StoreDropdown,
      ActiveCategoryDropdown,
      slugWidgetmy,
      jquery,
       Dropzone,
       producttab,
       addproductattribute
    },
    // https://www.sitepoint.com/image-upload-example/

    methods: {
            ...mapActions({
              flash: 'alert/flash'
            }),
            onImageChange(e){
        
                var files = e.target.files || e.dataTransfer.files;
              // var files=e.target.files[0];
                if (!files.length)
                    return;
                for (var i = files.length - 1; i >= 0; i--) {
                    this.imagefile.push(files[i]);
                }
                //console.log(this.imagefile);
                this.form.product_Image = e.target.files[0];
                 this.createFile(e.target.files[0]);//prev
                //console.log(this.form.product_Image);

            },

            
        removeAllFiles() {
          this.$refs.el.dropzone.removeAllFiles();
        },
        sendingEvent (file, xhr, formData) {
       
          //console.log(file);
          this.imagefile.push(file);
         },

         showSuccess(file,response){
            // console.log(response);
            // console.log(file);
         },
         showthumbnail(file,dataUrl)
         {
           // console.log(file);
           //  console.log(dataUrl);
         },


      async store () {
       /* if(this.imagefile.length==0)
        {
          this.success="Product Image is required";
          return;
         
        }*/

        this.propscategoryid=this.form.category_id;
         
        let formData = new FormData();
        formData.append('user_id',this.form.user_id);
        formData.append('store_id',this.form.store_id);
        formData.append('name',this.form.name);
        formData.append('category_id',this.form.category_id);
        formData.append('slug',this.form.slug);
        formData.append('sku',this.form.sku);
        formData.append('description',this.form.description);
       
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
        formData.append('price',this.form.price);
        formData.append('imagecount',this.imagefile.length);
        formData.append('tax_id',this.form.tax_id);
        formData.append('type',this.form.type);
        formData.append('weight',this.form.weight);

        if(this.form.status===true)
          formData.append('status',1);
        else
           formData.append('status',0);
      
        let response = await this.$axios.$post('products/addproducts', formData,
        {headers: {
                    'Content-Type': 'multipart/form-data'
                }}).then((response) => {
                                   
                         if(response.message!=="Product Saved Successfully"){
                              if(response.message=="Add Attributes for selected Category"){
                                  this.success=  response.message;
                              }
                              else{
                                this.success=response.message;
                               }
                           }
                           else{
                          
                            this.success="Saved Successfully";
                              //this.form="";
                              //console.log(response.data);
                              //this.$router.back();

                              this.propsproduct_id=response.productid;
                              this.productprice=this.form.price;
                              this.product_tab = 2;
                            
                                this.$nuxt.$emit('product_tab', this.product_tab); 
                                this.$nuxt.$emit('product_id',response.productid); 
                               
                                
                                this.form="";
                               //alert(this.product_tab);
                           }
                          }).catch((error) => {
                             // console.log(error);
                          });
        
        
      },
      close(){
         this.success=null;
      },
      cancel(){
         this.form="";
      },
       
       async getAttributes () {

        var url='attributes/'+this.categoryid;
        
        let response = await this.$axios.$get(url)
         this.attributes = response;
         
         
      },

      async getStores () {
        let response = await this.$axios.$get('stores')
        
        this.stores = response.data
      },

    
       updateSlug: function(val) {
          this.form.slug = val;
        },

        
        addimage: function() {
        
          var html = $(".clone").html();
          $(".increment").after(html);
        
      },
      remove:function(){

        $("body").on("click",".btn-danger",function(){ 
          $(this).parents(".control-group").remove();
         });
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



      async getTaxRate () {
        let response = await this.$axios.$get('tax/displaytax')
        this.taxlists = response
      },

       //preview end
      
    },
 
    created () {
      
      this.getStores();
         this.$nuxt.$on('product_tab', data => {
            this.product_tab = data;
            //alert(this.product_tab);
       
        });
        this.getTaxRate();
         //this.getAttributes();
    },
    mounted() {
    // Everything is mounted and you can access the dropzone instance
     const instance = this.$refs.el.dropzone
  }
    
  }
</script>