<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditAttribute />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditAttribute from '@/components/seller/EditAttribute'

  export default {
    components: {
      EditAttribute
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
