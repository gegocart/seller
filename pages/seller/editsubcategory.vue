<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditSubCategory />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditSubCategory from '@/components/seller/EditSubCategory'

  export default {
    components: {
      EditSubCategory
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
