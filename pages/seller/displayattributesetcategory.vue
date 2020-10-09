<template>
  <div class="section">
  	<DisplayAttributesetCategory/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayAttributesetCategory from '@/components/seller/DisplayAttributesetCategory'

  export default {
    components: {
      DisplayAttributesetCategory
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>