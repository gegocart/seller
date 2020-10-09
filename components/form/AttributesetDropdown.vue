<template>
  <select @change="changed">
    <option value="">Please select</option>

    <option :value="attributeset.id" v-for="attributeset in attributesets" 
    :key="attributeset.id">
      {{ attributeset.name }}
    </option>
  </select>


</template>

<script>

  export default {
    data () {
      return {
        attributesets:[]
      }
    },
   

    methods: {
      async getattributeset () {
        let response = await this.$axios.$get('seller/displayattributeset')
        this.attributesets = response.data;
      },
      changed ($event) {
        this.$emit('input', $event.target.value)
      }
     
    },

    created () {
    
      this.getattributeset();

      

    }
  }


</script>
