<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditProduct />
          </article>
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import EditProduct from '@/components/products/EditProduct'

  export default {
    components: {
      EditProduct
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
