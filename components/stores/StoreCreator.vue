<template>
  <div id="app">
   <h1 class="title is-4">Create a Store</h1>
   <div v-if="this.success!=null" class="w-1/2 my-4 bg-red-light p-4" id="success-alert"><p class="text-white">{{this.success}}</p></div>

 <!--   <div  class="w-1/2 my-4 bg-red-light p-4" id="success-alert"><p class="text-white">aaaaaaaaaaaaaaa</p></div> -->

 <form action="#" @submit.prevent="store" class="custom-form">
 <div class="flex flex-col lg:flex-row md:flex-row">
       <div class="w-full lg:w-3/5">
          <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
               <label class="label w-full lg:w-1/4">Name</label>
                <div class="control w-full lg:w-3/4">
                        <input class="input" :class="{ 'is-danger': errors.name }" type="text" v-model="form.name" autofocus="">
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
            <slugWidgetmy :title="form.name" @slug-changed="updateSlug" />
             <!--  <input :value="slug" type="text" class="form-control" disabled> -->
               <p class="help is-danger" v-if="errors.slug">
                    {{ errors.slug[0] }}
                  </p>

              <input type="hidden" name="slug" v-model="form.slug">
             </div> 
            
            
              
          </div>
        </div>
        <div class="columns mt-2 lg:mt-0 mb-2 lg:mb-10">
           <div class="field column  flex">
            <label class="label w-1/4">Status</label>
            
              <!-- <input  type="radio" value="1" :class="{ 'is-danger': errors.status }" v-model="form.status">  &nbsp;<span>Active</span>&nbsp;
              <input type="radio" value="0" v-model="form.status">
                &nbsp; <span>Inactive</span> -->
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
          <div class="columns mb-2 lg:mb-10">
            <div class="column">
              <div class="field flex flex-col lg:flex-row">
                <label class="label w-full lg:w-1/4">Description</label>
                <div class="control w-full lg:w-3/4">
                  <textarea class="form-control" rows="5" cols="50" :class="{ 'is-danger': errors.description }"  v-model="form.description">
                  </textarea>
                   <p class="help is-danger" v-if="errors.description">
                    {{ errors.description[0] }}
                  </p>
                  </div>
              
              </div>
            </div>
           
          </div>
           <div class="columns mb-2 lg:mb-10">
            <div class="field column  flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Keywords</label>
             <div class="control w-full lg:w-3/4">
                <textarea class="form-control" rows="5" cols="50" v-model="form.keywords"></textarea>
                   <p class="help is-danger" v-if="errors.keywords">
                    {{ errors.keywords[0] }}</p>
             </div>
            
           <!--     <div>
                   <span v-if="errors.keywords"><small class="text-danger">{{errors.keywords}}</small></span>
              </div> -->
          </div>
        </div>
        
        <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Address</label>
            <div class="control  w-full lg:w-3/4">
                <textarea class="form-control" rows="5" cols="60" :class="{ 'is-danger': errors.address }"
                 v-model="form.address"></textarea>
                 </div>
              
          </div>
          <p class="help is-danger" v-if="errors.address">
                    {{ errors.address[0] }}
                  </p>
        </div>
        </div>
        <div class="w-full lg:w-2/5 lg:mx-8 md:mx-8 mx-0">
        <div class="columns mb-2 lg:mb-10">
            <div class="field column">
             <!--  <label class="label">Logo Image</label> -->
              <!-- <input type="file" name="logoimage" v-on:change="onImageChange" :class="{ 'is-danger': errors.storelogo }">               
              <p class="help is-danger" v-if="errors.storelogo">
                    {{ errors.storelogo[0] }}
              </p> -->
                      <div class="helper"></div>
<div class="drop display-inline align-center h-32" @dragover.prevent @drop="onDrop" >
    <div class="helper"></div>
    <label v-if="!logoimage" class="btn display-inline">Add Store Logo
          <input type="file" name="logoimage"  v-on:change="onImageChange" :class="{ 'is-danger': errors.storelogo }">

        </label>
          <p class="help is-danger" v-if="errors.storelogo">
                    {{ errors.storelogo[0] }}
                  </p>
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
          <div class="upload-bg" v-bind:style="{ backgroundImage: 'url(' + logoimage + ')' }">
       <!--  <img :src="logoimage" alt="" class="img w-32 h-32"  /> -->
        
        <a class="remove-btn float-right" @click="removeFile">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" xml:space="preserve" class="w-2 h-2 fill-current m-1"><g><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
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
             <!--  <label class="label">Cover Image</label> -->
             <!--  <div class="control">
                 <input type="file" name="coverimage" v-on:change="onCoverImageChange" :class="{ 'is-danger': errors.storeimage }">               
                  <p class="help is-danger" v-if="errors.storeimage">
                        {{ errors.storeimage[0] }}
                  </p>
          </div> -->
                     <div class="helper"></div>
<div class="drop display-inline align-center h-32" @dragover.prevent @drop="onCoverDrop" >
    <div class="helper"></div>
    <label v-if="!coverimage" class="btn display-inline">Add Cover Logo
          <input type="file" name="coverimage"  v-on:change="onCoverImageChange" :class="{ 'is-danger': errors.storeimage }">
        </label>
          <p class="help is-danger" v-if="errors.storeimage">
                    {{ errors.storeimage[0] }}
                  </p>
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
        <div class="upload-bg" v-bind:style="{ backgroundImage: 'url(' + coverimage + ')' }">
        <!-- <img :src="coverimage" alt="" class="img w-32 h-32"  /> -->
       
        <a class="remove-btn float-right" @click="removeCoverFile">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" xml:space="preserve" class="w-2 h-2 fill-current m-1"><g><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
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
                Add Store
              </button>
              <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
            </p>
          </div>
   </form>
 </div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
//import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import slugWidgetmy from '@/components/form/slugWidgetmy'
 
  export default {
    data () {
      return {
        logoimage:'',
        coverimage:'',
        form: {
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
       success:null
        // title:Slug(this.form.name)
        
      }
    },
 components: {
    slugWidgetmy
  },

    methods: {
      
          onImageChange(e){
                  this.createFile(e.target.files[0]);//prev
                  this.form.storelogo = e.target.files[0];
                   
                  },

            onCoverImageChange(e){
               this.createCoverFile(e.target.files[0]);//prev
               
                this.form.storeimage = e.target.files[0];
               
            },

      async store () {
     
       
        let formData = new FormData();
        formData.append('user_id',this.form.user_id);
        formData.append('name',this.form.name);
        formData.append('slug',this.form.slug);

        if(this.form.status===true)
          formData.append('status',1);
        else
          formData.append('status',0);

        //formData.append('status',this.form.status);
        formData.append('description',this.form.description);
        formData.append('keywords',this.form.keywords);
        formData.append('storelogo',this.form.storelogo);
        formData.append('storeimage',this.form.storeimage);
        formData.append('address',this.form.address);
         debugger;
        let responses = await this.$axios.$post('stores/addstores', formData,{headers: {
                                              'Content-Type': 'multipart/form-data'
                                          }}).then((response) => {

                                              if(response.message!=="Saved"){
                                              this.success=response.message;
                                              
                                           }
                                           else{
                                              this.form="";

                                              //console.log(response.data);
                                              this.$nuxt.$emit('savemessage',response.message);
                                             this.$router.replace({
                                                name: 'stores',
                                               });
                                              
                                           }
                                          }).catch((error) => {
                                              console.log(error);
                                          });
                  

      
      },
      
      // async getStores () {
      //   let response = await this.$axios.$get('getstoreuser/'+ this.$auth.user.id)
        
      //   this.stores = response.data
      // },
        updateSlug: function(val) {
          this.form.slug = val;
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
      //this.getStores()
    },
  
  }
</script>