<template>
<div class="dropzone-img">
  <dropzone  id="foo" ref="el" :options="options" :destroyDropzone="true" v-on:vdropzone-success="showSuccess" v-on:vdropzone-sending="sendingEvent"></dropzone>
</div>
</template>


<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
 
export default {
  // props:{
  //     imagefile:{
  //       type:Array,
  //       default() {return [];},
  //     }
  //   },
  components: {
    Dropzone
  },
  data() {
    return {

      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "http://httpbin.org/anything",
        addRemoveLinks: true,
        maxFiles: 10,
      },

    }
  },
  methods: {
    removeAllFiles() {
      this.$refs.el.dropzone.removeAllFiles();
    },
    sendingEvent (file, xhr, formData) {
      debugger;
      console.log(file);
     },


  },
  mounted() {
    // Everything is mounted and you can access the dropzone instance
     const instance = this.$refs.el.dropzone
  }
}
</script>