<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditStore />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditStore from '@/components/stores/EditStore'

  export default {
    components: {
      EditStore
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
