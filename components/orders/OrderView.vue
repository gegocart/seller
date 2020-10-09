<template>
  <table class="table is-hoverable is-fullwidth">
     <thead>

       <tr>
        <th>Order #</th>
        <th>Product Name</th>
        <th>Purchased from Store</th>
        <th>Purchased On</th>
        <th>Address</th>
        <th>Status</th>
       </tr>
      </thead>
    <tbody>
       <tr>
        <td>{{order.orderno}}</td>
        <td>{{order.productname}}</td>
        <td>{{order.storename}}</td>
        <td>{{order.purchased_on}}</td>
        <td>{{order.address}}</td>
        <td>{{order.status}}</td>
    </tr>
    </tbody>  
  </table>
</template>
<script>
  export default {
   props:['orderid'],
    data () {
      return {
        order: []
       
      }
    },
    middleware: [
      'redirectIfGuest'
    ],
    methods:{
        async getorderdetailview(){
           let response = await app.$axios.$get(`orderdetailview/${params.orderid}`)
           this.order = response;
               
        }
    },
    created(){
      this.getorderdetailview();
    }
   

  }
</script>