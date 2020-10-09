<template>
<div class="section" >
    <div class="">
       <EditPincode />
     </div>
</div>
</template>

<script>
 
  import EditPincode from '@/components/setting/EditPincodeList'

  export default {
    components: {
      EditPincode
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
