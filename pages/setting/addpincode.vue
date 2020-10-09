<template>
<div class="section" >
    <div class="">
       <PincodeCreator />
     </div>
</div>
</template>

<script>
 
  import PincodeCreator from '@/components/setting/PincodeListCreator'

  export default {
    components: {
      PincodeCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
