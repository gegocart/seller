<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <AttributesetCreator />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import AttributesetCreator from '@/components/seller/AttributesetCreator'

  export default {
    components: {
      AttributesetCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
