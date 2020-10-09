<template>  

<div class="page form-page">
  <div class="w-full my-3 lg:mx-3 md:mx-3 ">
    <div >
        <h1 class="mb-3">Order Detail</h1>
        <br>
        <br/>
       
        <div class="shadow-md bg-white border rounded p-5" v-for="orderview in order" :key=orderview.id>
           <div class="flex border-b">
              <div class="w-1/4  py-4">
                <div><h5>Order No#</h5></div>
              </div>
              <div class="w-3/4 py-4">
                <p>{{orderview.orderno}}</p>
              </div>
            </div>
            <div class="flex border-b">
              <div class="w-1/4  py-4">
                <div><h5>Product Name</h5></div>
              </div>
              <div class="w-3/4 py-4">
                <p>{{orderview.productname}}</p>
                <p><img v-bind:src="rooturl + orderview.thumbnailimage"></p>
              </div>
            </div>
            <div class="flex border-b">
              <div class="w-1/4  py-4">
                <div><h5>Store Name</h5></div>
              </div>
              <div class="w-3/4 py-4">
                <p>{{orderview.storename}}</p>
              </div>
            </div>
            <div class="flex border-b">
              <div class="w-1/4  py-4">
                <div><h5>Purchased On</h5></div>
              </div>
              <div class="w-3/4 py-4">
                <p>{{orderview.purchased_on}}</p>
              </div>
            </div>
            <div class="flex border-b">
              <div class="w-1/4  py-4">
                <div><h5>Address</h5></div>
              </div>
              <div class="w-3/4 py-4">
                <p>{{orderview.address}}</p>
              </div>
            </div>
            <div class="flex border-b">
              <div class="w-1/4  py-4">
                <div><h5>Status</h5></div>
              </div>
              <div class="w-3/4 py-4">
                <p>{{orderview.status}}</p>
              </div>
            </div>
        </div>
      </div>
   </div>


</div>
</template>

<script>
 
  export default {
     data () {
      return {
        order:[],
        orderid:'',
        rooturl:process.env.SITEURL,
      }
    },
    // components: {
    //   OrderView
    // },

    middleware: [
      'redirectIfGuest'
    ],
     async asyncData ({ params, app }) {
        
      let response = await app.$axios.$get(`orderdetailview/${params.orderid}`)
         return {
           order: response
      }
    },
    
  }
</script>
