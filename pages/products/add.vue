<template>
<div class="page form-page form-page-add-product" >
    <div class="">
             
         <!--  <article class="message" > -->
            <ProductCreator />
         <!--  </article> -->
    </div>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import ProductCreator from '@/components/products/ProductCreator'

  export default {
    components: {
      ProductCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
