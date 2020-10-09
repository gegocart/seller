<template>
  <div class="section">
  	<DisplayCategory/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayCategory from '@/components/seller/DisplayCategory'

  export default {
    components: {
      DisplayCategory
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>