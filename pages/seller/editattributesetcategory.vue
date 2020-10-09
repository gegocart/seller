<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditAttributesetCategory />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditAttributesetCategory from '@/components/seller/EditAttributesetCategory'

  export default {
    components: {
      EditAttributesetCategory
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
