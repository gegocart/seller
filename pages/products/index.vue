<template>
  <div class="section">
  	<DisplayProduct/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayProduct from '@/components/products/DisplayProduct'

  export default {
    components: {
      DisplayProduct
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>