<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditAttributeset />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditAttributeset from '@/components/seller/EditAttributeset'

  export default {
    components: {
      EditAttributeset
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
