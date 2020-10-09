<template>
  <div id="app">
  <h1 class="title is-4">Edit Store</h1>
 <form action="#" @submit.prevent="store" class="custom-form">
    <div class="flex flex-col lg:flex-row md:flex-row">
       <div class=" w-full lg:w-3/5">
         <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Name</label>
            <div class="control w-full lg:w-3/4">
              <input class="input" :class="{ 'is-danger': errors.name }" type="text" v-model="viewstore.name" autofocus="" id="name">
             <p class="help is-danger" v-if="errors.name">
                      {{ errors.name[0] }}
                    </p>
             </div>
         </div>
      </div>
   
      <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Slug</label>
<div class="control w-full lg:w-3/4">
           <slugWidgetmy :title="viewstore.name" @slug-changed="updateSlug" />
             
              <input type="hidden" name="slug" v-model="viewstore.slug">
             <!--  <input class="input w-3/4" type="text" v-model="viewstore.slug" :class="{ 'is-danger': errors.slug }"> -->
            

           
              <p class="help is-danger" v-if="errors.slug">
                    {{ errors.slug[0] }}
                  </p>
            </div>
          </div>
        </div>
          <div class="columns mt-2 lg:mt-0 mb-2 lg:mb-10">
           <div class="field column  flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Status</label>
            
              <!-- <input  type="radio" value="1" v-model="viewstore.status" :class="{ 'is-danger': errors.status }">  &nbsp;<span>Active</span>&nbsp;
              <input type="radio" value="0" v-model="viewstore.status" :class="{ 'is-danger': errors.status }">
                &nbsp; <span>Inactive</span> -->
                <div class="onoffswitch">
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked v-model="viewstore.status" :class="{ 'is-danger': errors.status }">
                    <label class="onoffswitch-label" for="myonoffswitch">
                        <div class="onoffswitch-inner"></div>
                        <div class="onoffswitch-switch"></div>
                    </label>
               </div>
            
            <p class="help is-danger" v-if="errors.slug">
                    {{ errors.status[0] }}
                  </p>
          </div>
         </div>
          <div class="columns mb-2 lg:mb-10">
            <div class="column">
              <div class="field flex flex-col lg:flex-row">
                <label class="label w-full lg:w-1/4">Description</label>
                <div class="control w-full lg:w-3/4">
                  <textarea class="form-control" rows="5" cols="" :class="{ 'is-danger': errors.description }"  v-model="viewstore.description">
                    
                  </textarea>
                   <p class="help is-danger" v-if="errors.description">
                    {{ errors.description[0] }}
                  </p>
                </div>
              </div>
            </div>
           
          </div>
           <div class="columns mb-2 lg:mb-10">
            <div class="field  flex flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Keywords</label>    
              <div class="control w-full lg:w-3/4">       
                <textarea class="form-control" rows="5" cols="" v-model="viewstore.keywords"></textarea>
              </div>
               <p class="help is-danger" v-if="errors.keywords">
                    {{ errors.keywords[0] }}
                  </p>
          </div>
        </div>
         <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Address</label>
            <div class="control w-full lg:w-3/4">
                <textarea class="form-control" rows="5" cols="50" :class="{ 'is-danger': errors.address }"
                 v-model="viewstore.address"></textarea>
            </div>
              <p class="help is-danger" v-if="errors.address">
                    {{ errors.address[0] }}
                  </p>
          </div>
        </div>
 </div>
       


       
          <div class="w-full lg:w-2/5 lg:mx-8 md:mx-8 mx-0">
          <div class="columns mb-2 lg:mb-10">
            <div class="field column">
             <!--  <label class="label">Logo Image</label> -->
             <!--  <img v-bind:src="'http://admin-app.test/uploads/' + viewstore.storelogo" class="w-16 h-16">
              <input type="file" name="logoimage" v-on:change="onImageChange" :class="{ 'is-danger': errors.storelogo }">               
              <p class="help is-danger" v-if="errors.storelogo">
                    {{ errors.storelogo[0] }}
              </p> -->
                                    <div class="helper"></div>
<div class="drop display-inline align-center h-32" @dragover.prevent @drop="onDrop" >
    <div class="helper"></div>
    <label v-if="!logoimage" class="btn display-inline">Add Store Logo
          <input type="file" name="logoimage"  v-on:change="onImageChange" :class="{ 'is-danger': errors.storelogo }">
        </label>
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
        <div class="upload-bg" v-bind:style="{ backgroundImage: 'url(' + logoimage + ')' }">
        <!--upload-bg   style="background-image: url("'logoimage'")" -->
       <!--  <img :src="logoimage" alt="" class="img w-32 h-32"  /> -->
        
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
        </div>
     
        <div class="columns mb-2 lg:mb-10">
            <div class="field column">
            <!--   <label class="label">Cover Image</label> -->
               <!--   <img v-bind:src="'http://admin-app.test/uploads/'+ viewstore.storeimage" class="w-16 h-16">
                 <input type="file" name="coverimage" v-on:change="onCoverImageChange" :class="{ 'is-danger': errors.storeimage }">               
                  <p class="help is-danger" v-if="errors.storeimage">
                        {{ errors.storeimage[0] }}
                  </p> -->
                                                      <div class="helper"></div>
<div class="drop display-inline align-center h-32" @dragover.prevent @drop="onCoverDrop" >
    <div class="helper"></div>
    <label v-if="!coverimage" class="btn display-inline">Add Cover Logo
          <input type="file" name="coverimage"  v-on:change="onCoverImageChange" :class="{ 'is-danger': errors.storeimage }">
        </label>
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
        <div class="upload-bg" v-bind:style="{ backgroundImage: 'url(' + coverimage + ')' }">
       <!--  <img :src="coverimage" alt="" class="img w-32 h-32"  /> -->
       
        <a class="remove-btn float-right" @click="removeCoverFile">
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
       </div>
        </div>
       </div>
       
          <div class="field">
            <p class="control">
              <button class="button is-info">
                Save
              </button>
              <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
            </p>
          </div>
   </form>
 </div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'

  import { mapGetters } from 'vuex'
  import slugWidgetmy from '@/components/form/slugWidgetmy' 
  export default {
    props:['store_id'],
    data () {
      return {
          logoimage:'',
          coverimage:'',
        viewstore: {
          user_id: this.$auth.user.id,
          name: '',
          slug: '',
          status: '',
          description: '',
          keywords:'',
          storelogo:'',
          storeimage:'',
          address:''
                  
          },
         
          storeid:this.$route.params.store_id,
         // errors:[],
        
      }
    },
 components: {
    slugWidgetmy
  },
    
    methods: {
    updateSlug: function(val) {
          this.viewstore.slug = val;
        },
       onImageChange(e){
                   this.createFile(e.target.files[0]);//prev
                      
                      this.viewstore.storelogo = e.target.files[0];
                      
                  },

            onCoverImageChange(e){
               this.createCoverFile(e.target.files[0]);//prev
                
                this.viewstore.storeimage = e.target.files[0];
                
            },


      async store() {
      //debugger;
       let formData = new FormData();
        formData.append('user_id',this.viewstore.user_id);
        formData.append('name',this.viewstore.name);
        formData.append('slug',this.viewstore.slug);
        formData.append('status',this.viewstore.status);
        formData.append('description',this.viewstore.description);
        formData.append('keywords',this.viewstore.keywords);
        formData.append('storelogo',this.viewstore.storelogo);
        formData.append('storeimage',this.viewstore.storeimage);
        formData.append('address',this.viewstore.address);

        let responses = await this.$axios.$post('stores/editstores/'+this.storeid, formData,                                {headers: {
                                              'Content-Type': 'multipart/form-data'
                                          }})
                                          .then((response) => {
                                              if(response.message!=="Updated"){
                                            
                                              alert(response.message);
                                           }
                                           else{
                                              this.form="";
                                              //console.log(response.data);
                                              this.$router.back();
                                             // this.$emit('created', response.data);
                                           }
                                          }).catch((error) => {
                                              console.log(error);
                                          });

      },

      async getStoredata () {
        let response = await this.$axios.$get('stores/editstores/' + this.storeid )
       
        this.viewstore = response;
        this.viewstore.storelogo=response.storelogo;
       this.viewstore.storeimage=response.storeimage;
       this.logoimage=process.env.SITEURL+'/uploads/'+this.viewstore.storelogo;
   
        this.coverimage=process.env.SITEURL+'/uploads/'+this.viewstore.storeimage;
       
      },
 //preview start
        onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
       onCoverDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createCoverFile(files[0]);
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
          vm.logoimage = e.target.result;
        }
        reader.readAsDataURL(file);
      },
       createCoverFile(file) {
        if (!file.type.match('image.*')) {
        //  alert('Select an image');
          return;
        }
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.coverimage = e.target.result;
        }
        reader.readAsDataURL(file);
      },
      removeFile() {
        this.logoimage = '';
        this.form.storelogo='';
      },
       removeCoverFile() {
        this.coverimage = '';
        this.form.storeimage='';
      }
       //preview end
      

    },
    created () {
      this.getStoredata()
    },
 
  }
</script>