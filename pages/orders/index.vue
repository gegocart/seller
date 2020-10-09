<template>
<div class="page form-page">
    <div class="">
             
          <article class="message" >
            <OrderDetails />
          </article>
    </div>
</div>
</template>

<script>
 
  import OrderDetails from '@/components/orders/OrderDetails'

  export default {
    components: {
      OrderDetails
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
