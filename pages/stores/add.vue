<template>
<div class="section" >
    <div class="">
         <!--  <article class="message" > -->
        
            <StoreCreator />
        <!--   </article> -->
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import StoreCreator from '@/components/stores/StoreCreator'

  export default {
    components: {
      StoreCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
