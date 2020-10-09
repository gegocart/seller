<template>
  <div class="section">
  	<AddProductAttribute/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import AddProductAttribute from '@/components/products/AddProductAttribute'

  export default {
    components: {
      AddProductAttribute
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>