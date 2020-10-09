<template>
<div class="section" >
    <div class="container is-fluid">
      

          <!-- <article class="message" > -->
            <AttributeCreator />
         <!--  </article> -->
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import AttributeCreator from '@/components/seller/AttributeCreator'

  export default {
    components: {
      AttributeCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
