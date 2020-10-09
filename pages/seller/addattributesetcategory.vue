<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <AttributesetCategoryCreator />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import AttributesetCategoryCreator from '@/components/seller/AttributesetCategoryCreator'

  export default {
    components: {
      AttributesetCategoryCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
