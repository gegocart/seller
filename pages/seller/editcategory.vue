<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditCategory />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditCategory from '@/components/seller/EditCategory'

  export default {
    components: {
      EditCategory
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
