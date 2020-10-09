<template>
  <div class="section">
    <DisplaySubCategory/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplaySubCategory from '@/components/seller/DisplaySubCategory'

  export default {
    components: {
      DisplaySubCategory
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>