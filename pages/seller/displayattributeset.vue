<template>
  <div class="section">
  	<DisplayAttributeset/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayAttributeset from '@/components/seller/DisplayAttributeset'

  export default {
    components: {
      DisplayAttributeset
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>