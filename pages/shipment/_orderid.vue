<template>  

<div id="app" class="page form-page">
 
  <div class="w-full my-3 lg:mx-3 md:mx-3 ">
    <div v-if="this.success!=null" class="w-1/2 my-4 bg-red-light p-4 flex  justify-between" id="success-alert">
      <p class="text-white" v-html="success">{{this.success}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
    </div>
    <div >
        <h1 class="mb-3">New Shipment for order  {{order[0].orderno}}</h1>
        <br/>
       <form action="#" @submit.prevent="store">
 <div class="flex lfex-col lg:flex-row">
 <div class="w-full lg:w-1/2">
            <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>{{order[0].orderno}} <!-- (the order confirmation email was sent) --></h5>
              </div>
            </div>
        <div class="bg-white border p-5 mb-4">
           
            <div class="flex  mb-2">
              <div class="w-2/5">
                <div><h6 class="mt-0">Order Date</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{order[0].purchased_on}}</p>
               </div>
            </div>
            <div class="flex mb-2">
              <div class="w-2/5">
                <div><h6 class="mt-0">Purchased From</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{order[0].storename}}</p>
              </div>
            </div>
            
            <div class="flex mb-2">
              <div class="w-2/5">
                <div><h6 class="mt-0">Order Status</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{order[0].status}}</p>
              </div>
            </div>
            
            </div>
            </div>
 <div class="w-full lg:w-1/2 mx-3">
        <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Information</h5>
              </div>
            </div>
            <div class=" bg-white border  p-3 mb-4 ">
             <div class="flex">
              <div class="w-1/4  py-2">
                <div><h6 class="mt-0">Name & Address</h6></div>
                   <div class="leading-loose">
                   <p class="text-sm">{{order[0].billname}}</p>
                      <p class="text-sm">{{order[0].billaddress}}</p>
                      <p class="text-sm">{{order[0].billcity}}</p>
                      <p class="text-sm">{{order[0].postcode}}</p>
                      <p class="text-sm">{{order[0].billstate}}</p>
                      <p class="text-sm">{{order[0].country}}</p>
                      <p class="text-sm">{{order[0].billmobileno}}</p>
                 </div>
              </div>
              <div class="w-3/4 py-2">
               
              </div>
            </div>
            
            </div>
           </div>


        </div>

       <!-- start -->
<!-- <div class="flex flex-col lg:flex-row">
           <div class="w-full lg:w-1/2">
               <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Billing Address</h5>
              </div>
            </div>
            <div class="bg-white border p-3 mb-4">
          <div class="mb-2">
              <div class="leading-loose">
                 <p class="text-sm">{{order[0].billname}}</p>
                <p class="text-sm">{{order[0].billaddress}}</p>
                <p class="text-sm">{{order[0].billcity}}</p>
                <p class="text-sm">{{order[0].postcode}}</p>
                <p class="text-sm">T: 987654321</p>
              </div>
              </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 mx-3">
              <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Shipping Address</h5>
              </div>
            </div>
            <div class="bg-white border p-3 mb-4">
          <div class="mb-2">
              <div class="leading-loose">
               <p class="text-sm">{{order[0].billname}}</p>
                <p class="text-sm">{{order[0].billaddress}}</p>
                <p class="text-sm">{{order[0].billcity}}</p>
                <p class="text-sm">{{order[0].postcode}}</p>
                <p class="text-sm">T: 987654321</p>
              </div>
              </div>
              </div>
            </div>
</div> -->
<!-- end -->
 <!-- start -->    
<div class="flex flex-col lg:flex-row">
           <div class="w-full lg:w-1/2">
               <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Payment Method</h5>
              </div>
            </div>
            <div class="bg-white border p-3 mb-4">
          <div class="mb-2">
              <div class="leading-loose">
               <!-- <p class="text-sm">Check / Money order </p> -->
                <p class="text-sm">{{order[0].paymentmethod}}</p>
                <p class="text-sm">Order was placed using {{order[0].currencycode}}</p>
              </div>
              </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 mx-3">
              <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Shipping Information</h5>
              </div>
            </div>
            <div class="bg-white border p-3 mb-4">
               <div class="mb-2">
              <div class="leading-loose">
               <p class="text-sm"><!-- Free shipping - Free --> Total shipping charges: {{order[0].shippingprice}}</p>
                <p class="text-sm">{{order[0].shippingmethod}}</p>
              </div>
              </div>
              <table class="table table-hover order-table hidden">
                <thead>
                  <tr>
                    <th>Carrier</th>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      
                    </td>
                    <td>
                      
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>  
              </table>
             </div>
            </div>
</div>
<!-- end -->
 <!-- start -->
<div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Items</h5>
              </div>
            </div>
<div class="border mb-4">
 <table class="table table-hover order-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Tax Rate%</th>
        <th>Item Tax</th>
        <th>Shipping price</th>
        <th>Shipping Tax</th>
        
       <!--  <th>Qty to Invoice</th> -->
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="orderview in order" :key="orderview.id">
          <td width="50%">{{orderview.productname}} /{{orderview.variationname}}</td>
       
        <td>{{orderview.quantity}}</td>
       <td>{{orderview.price}}</td>
       <td>{{orderview.taxrate}}</td>
        <td>{{orderview.taxamount}}</td>
        <td>{{orderview.shippingprice}}</td>
        <td>{{orderview.shippingtaxamount}}</td>
        <td>{{orderview.overalltotalamount}}</td> 

       <!--  <td width="50%">Mobile </td>
        <td>$199.99</td>
        <td>Ordered 1</td>
        <td><input type="text" name="" class="border mx-1 text-xs"></td>
        <td>$199.99</td>
        <td>16.33</td>
        <td>$0.00</td>
        <td>256.29</td> -->
      </tr>
      
    </tbody>
  <!--   <tfoot>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Update Qty's</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tfoot> -->
  </table>
</div>
<!-- end -->
          <!-- start -->    
<div class="flex flex-col lg:flex-row">
           <div class="w-full lg:w-1/2">
               <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Shipment History</h5>
              </div>
            </div>
            <div class="bg-white border p-3 mb-4">
          <div class="mb-2">
              <div class="leading-loose">
               <p class="text-xs font-bold">Shipment comments</p>
               <textarea class="border w-full" v-model="form.comments" rows="6"></textarea>
              </div>
              </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 mx-3">

            <div class="bg-white border p-3 mb-4">
          <div class="mb-2">
              <div class="leading-loose flex flex-col items-end">
           <div class="w-full text-right">
                <p class="text-sm hidden">Append Comments<span class="m-1"><input type="checkbox" name=""/></span></p>
                 <p class="text-sm hidden">Email copy of Invoice<span class="m-1"><input type="checkbox" name=""/></span></p>

                 <div class="">
                <button class="button is-info"> Submit Shipment</button>
            </div>
</div>
              </div>
              </div>
              </div>
            </div>
</div>
<!-- end -->

        </form>
      </div>
   </div>

 
</div>
</template>

<script>
   import { mapGetters } from 'vuex'
  export default {
     data () {
      return {
        success:null,
        order:[],
        rooturl:process.env.SITEURL,
        form:{
        order_id:'',
        order_item_id:[],
        from_status:'',
        to_status:'',
        created_by:'',
        updated_by:'',
        comments:''
      }
        
      }
    },
    // components: {
    //   OrderView
    // },

    middleware: [
      'redirectIfGuest'
    ],
   

    methods:{
      close(){
           this.success=null;
      },
      async store () {
     
         this.form.order_id=this.order[0].orderid;
         //this.form.order_product_id=this.order[0].order_product_id;
         this.form.from_status=this.order[0].status;
         this.form.to_status='shipped';
         this.form.created_by=this.$auth.user.id;
         this.form.updated_by=this.$auth.user.id;
          let response = await this.$axios.$post('storestatus', this.form)
                                        .then((response) => {
                                              
                                          if(response.message!=="Saved Successfully"){
                                              
                                              this.success=response.message;
                                           }
                                           else{
                                              this.form="";
                                              this.$router.replace({
                                                name: 'orders',
                                                //params:orderid
                                               });
                                           }
                                          }).catch((error) => {
                                              console.log(error);
                                          });
         
        },

         getorderproductid(){
          if(this.order.length>0){
            
            for (var i=0;i<this.order.length;i++) {
              this.form.order_item_id.push(this.order[i].order_product_id)
            }
          }
        }
        
    },
    created(){
      this.getorderproductid()
    },
    async asyncData ({ params, app }) {
         let response = await app.$axios.$get(`orderdetailview/${params.orderid}`)
         return {
           order: response.data
      }
    },
    
  }
</script>
