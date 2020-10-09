<template>
  <div class="section">
    <DisplayPincode/>
  </div>
  </template>



<script>
  import DisplayPincode from '@/components/Setting/DisplayPincode'

  export default {
    components: {
      DisplayPincode
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>