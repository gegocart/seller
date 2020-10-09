<template>
	<div class="container mx-auto">
      <shippingaddress/>
	</div>
</template>
<script>
 import shippingaddress from '@/components/shippingaddress/ShippingAddressCreator'
	export default {

      data(){
    return {
               
      }

    },
     middleware: [
          'redirectIfGuest'
      ],
    components: {
      shippingaddress
    },
	}
</script>
