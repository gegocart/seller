<template>
<div class="section" >
    <div class="">
          <article class="message" >
            <DisplayStores />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayStores from '@/components/stores/DisplayStores'

  export default {
    components: {
      DisplayStores
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
