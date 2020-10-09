<template>
 <div class="w-full">
    <input class="input w-full" disabled type="text"  v-model="slug" >
 </div>

</template>

<script>

 import Slug from 'slug'
//import Vue from 'vue'
  export default {
    props:{
      title:{
        required:true,
        type:String
      }
    },
    data () {
      return {
        
         //form: {
           slug:null,
        //}
      }
    },
   

    methods: {
       convertTitle: function() {
       
         if(this.title!=null){
            return Slug(this.title)
          }
          else{
            return null;
          }
        },
    },

    watch: {
        title:function(){
          this.slug=this.convertTitle()
        },
        slug: function(val) {
          if(this.slug!=null)
          this.$emit('slug-changed', this.slug);
        }
      }

  }

</script>
