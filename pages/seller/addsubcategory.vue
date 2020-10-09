<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <SubCategoryCreator/>
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import SubCategoryCreator from '@/components/seller/SubCategoryCreator'

  export default {
    components: {
      SubCategoryCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
