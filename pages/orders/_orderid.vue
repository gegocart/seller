<template>  

<div class="page form-page">
  <div class="w-full my-3 lg:mx-3 md:mx-3 ">
    <div>
      <div v-if="orderstatus!=='approved'" >
       <div style="float: right;padding-right:8px;">

         <nuxt-link  :to="{name: 'approve-orderid',params:{orderid:orderid}}" 
         title="ship" class="button is-info">Approved
        </nuxt-link>
      </div>
     </div>
    <div v-if="orderstatus!=='shipped'" >
       <div style="float: right;padding-right:8px;">

         <nuxt-link  :to="{name: 'shipment-orderid',params:{orderid:orderid}}" 
         title="ship" class="button is-info">Ship
        </nuxt-link>
      </div>
     </div>
   </div>
     <div>
     <div v-if="invoicestatus!=='invoiced'" >
     <div style="float: right;padding-right:8px;">
            
       <nuxt-link  :to="{name: 'invoice-orderid',params:{orderid:orderid}}" 
         title="Invoice" class="button is-info">Invoice
        </nuxt-link>
      </div>
    </div>
  </div>
  <div>
     <div v-if="orderrefund!=='refunded'">
     <div style="float: right;padding-right:8px;">
            
        <a  id="" href="#" class="font-muller text-sm px-4 py-2 cursor-pointer bg-hayvn-pink font-muller button is-info" @click="getrefundModal()">Refund</a>
      </div>
    </div>
  </div>
    <div>
      <div style="float: right;padding-right:8px;">
          <a  id="" href="#" class="font-muller text-sm px-4 py-2 cursor-pointer bg-hayvn-pink font-muller button is-info" @click="getCancelComments()">Cancel</a>
      </div>
      </div>
      
      <div v-if="orderhold==='hold'">
        <div style="float: right;padding-right:8px;">
           <a  id="" href="#" class="font-muller text-sm px-4 py-2 cursor-pointer bg-hayvn-pink font-muller button is-info" @click="getComments()">Unhold</a>
        </div>
      </div>
   
      <div v-else-if="orderhold!==hold">
         <div style="float: right;padding-right:8px;">
           <a  id="" href="#" class="font-muller text-sm px-4 py-2 cursor-pointer bg-hayvn-pink font-muller button is-info" @click="getComments()">Hold</a>
        </div>

      </div>
      <div >
        <h1 class="mb-3">Detail</h1>
        <br/>
        <div class="flex flex-col lg:flex-row">
<div class="w-full lg:w-1/2">
         <div class="border">
              <div class="p-2 bg-grey-light">
                
                <h5>Order No# {{order[0].orderno}} <!-- (the order confirmation email was sent) --></h5>
              </div>

            </div>
             <div class="bg-white border p-5 mb-4">
         <div class="flex">
              <div class="w-1/4  py-2">
                <div><h6 class="mt-0">Order Date</h6></div>
              </div>
              <div class="w-3/4 py-2">
                <p class="text-sm">{{order[0].purchased_on}}</p>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/4  py-2">
                <div><h6 class="mt-0">Order Status</h6></div>
              </div>
              <div class="w-3/4 py-2">
                <p class="text-sm">{{order[0].status}}</p>
              </div>
            </div>
               <div class="flex">
              <div class="w-1/4  py-2">
                <div><h6 class="mt-0">Purchased From</h6></div>

              </div>
              <div class="w-3/4 py-2">
                <p class="text-sm">{{order[0].storename}}</p>
              </div>
            </div>
           
            </div>

       <!--  <div class="bg-white border p-3 mb-4" v-for="orderview in order" :key="orderview.id">

         
            <div class="flex mb-2">
              <div class="w-2/5  ">
                <div><h6 class="mt-0">Product Name</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{orderview.productname}}</p>
                <img v-bind:src="rooturl + orderview.thumbnailimage">
                <h5>Variation:</h5><p class="text-sm">{{orderview.variationname}}</p>
              </div>
            </div>
            <div class="flex mb-2">
              <div class="w-2/5 ">
                <div><h6 class="mt-0">Store Name</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{orderview.storename}}</p>
              </div>
            </div>
            <div class="flex mb-2">
              <div class="w-2/5">
                <div><h6 class="mt-0">Purchased On</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{orderview.purchased_on}}</p>
              </div>
            </div>
            <div class="flex mb-2">
              <div class="w-2/5">
                <div><h6 class="mt-0">Price</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{orderview.total}}</p>
              </div>
            </div>
            <div class="flex mb-2">
              <div class="w-2/5">
                <div><h6 class="mt-0">Quantity</h6></div>
              </div>
              <div class="w-3/5">
                <p class="text-sm">{{orderview.quantity}}</p>
              </div>
            </div>
           
        </div> -->


        </div>


        <div class="w-full lg:w-1/2 mx-3">
        <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Information</h5>
              </div>

        </div>
        <div class="bg-white border p-3 mb-4">

         <div class="flex">
              <div class="w-1/4  py-2">
                <div><h6 class="mt-0">Name & Address</h6></div>
                   <div class="leading-loose">
                   <p class="text-sm">{{order[0].billname}}</p>
                      <p class="text-sm">{{order[0].billaddress}}</p>
                      <p class="text-sm">{{order[0].billcity}}</p>
                      <p class="text-sm">{{order[0].billpostcode}}</p>
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

   <div class="flex flex-col lg:flex-row">
<div class="w-full lg:w-1/2">
         <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Payment Method</h5>
              </div>
            </div>
        <div class=" bg-white border p-3 mb-4">
            <div class="mb-2">
              <div class="leading-loose">

                <p class="text-sm">{{order[0].paymentmethod}}</p>
                       
                <p class="text-sm">Order was placed using 
                {{order[0].currencycode}}</p>
                <p v-if="order[0].paymentmethod=='PayTM'">Transaction No.{{order[0].transaction_id}}</p>
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
                <p class="text-sm">Shipment Method:{{order[0].shippingmethod}}</p>   
                <!-- Free shipping - Free  -->
                <p class="text-sm">Total shipping charges:{{order[0].shippingprice}} </p>

                <!-- <p class="text-sm">Create shipment<span class="m-1"><input type="checkbox" name=""/></span></p> -->
              </div>
            </div>
            </div>
</div>
</div>

<!-- ************** -->
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
        
       <!--  <th>Price</th> -->
     
        <th>Qty</th>
        <th>Price</th>
        <th>Tax Rate %</th>
        <th>Item Tax</th>
        <th>Shipping price</th>
        <th>Shipping Tax</th>
        <!-- <th>Qty to Invoice</th> -->
        <th>Total</th>

        <!-- <th>Tax Amount</th>
        <th>Discount Amount</th>
        <th>Row Total</th> -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="orderview in order" :key="orderview.id">
        <td width="50%">{{orderview.productname}} /{{orderview.variationname}}</td>
       
        <td>{{orderview.quantity}}</td>
        <td>{{orderview.price}}</td>
        <td>{{orderview.taxrate}}%</td>
        <td>{{orderview.taxamount}}</td>
        <td>{{orderview.shippingprice}}</td>
        <td>{{orderview.shippingtaxamount}}</td>
        <td>{{orderview.overalltotalamount}}</td>
       <!--  <td>$199.99</td> -->
       <!--  <td>Ordered 1</td>
        <td><input type="text" name="" class="border mx-1 text-xs"></td>
        <td>$199.99</td>
        <td>16.33</td>
        <td>$0.00</td>
        <td>256.29</td> -->
      </tr>
      
    </tbody>
  </table>
</div>
<div class="w-full  ">
              <div class="border">
              <div class="p-2 bg-grey-light">
                <h5>Total</h5>
              </div>
            </div>
            <div class="bg-white border p-3 mb-4">
          <div class="mb-2">
              <div class="leading-loose flex flex-col items-end">
             
              <table class="mb-2">
                 <!--  <tr>
                    <td class="text-right"><p class="text-sm mr-5">Total </p> </td>
                    <td class="text-right"><p class="text-sm">order[0].shippingprice</p></td>
                  </tr> -->
                  <!-- <tr>
                    <td  class="text-right"><p class="text-sm mr-5">Tax</p></td>
                    <td class="text-right"><p class="text-sm">$16.50</p></td>
                  </tr> -->
                  <tr>
                    <td class="text-right"><p class="text-sm mr-5">SubTotal</p>
                    </td>
                    <td class="text-right"><p class="text-sm">{{order[0].currency}} {{pricetotal}}</p></td>
                  </tr>
                  <tr>
                    <td class="text-right"><p class="text-sm mr-5">Shipping Price</p>
                    </td>
                    <td class="text-right"><p class="text-sm">{{order[0].currency}} {{shippingpricetotal}}</p></td>
                  </tr>
                  <tr>
                    <td class="text-right"><p class="text-sm mr-5">Tax</p>
                    </td>
                    <td class="text-right"><p class="text-sm">{{order[0].currency}} {{overalltaxtotal}}</p></td>
                  </tr>
                  <tr>

                    <td class="text-right"> <p class="text-sm  mr-5">Grand Total</p></td>
                    <td class="text-right "><p class="text-sm text-orange">
                      {{order[0].currency}} {{overalltotalamount}}</p></td>
                  </tr>
              </table>
          
              </div>
              </div>
              </div>
            </div>
<!-- ***************** -->
<!-- ************** -->
<!-- <div class="border flex flex-wrap p-4 bg-grey-lighter">
  <div class="w-full lg:w-1/5 text-center leading-normal">
    <p class="text-sm">Paid Amount</p>
    <p class="text-sm">$0.00</p>
  </div>
  <div class="w-full lg:w-1/5 text-center leading-normal">
    <p class="text-sm">Refund Amount</p>
    <p class="text-sm">$0.00</p>
  </div>
  <div class="w-full lg:w-1/5 text-center leading-normal">
    <p class="text-sm">Shipping Amount</p>
    <p class="text-sm">$0.00</p>
  </div>
  <div class="w-full lg:w-1/5 text-center leading-normal">
    <p class="text-sm">Shipping Refund</p>
    <p class="text-sm">$0.00</p>
  </div>
  <div class="w-full lg:w-1/5 text-center leading-normal">
    <p class="text-sm text-orange font-bold">Order Grand Total</p>
    <p class="text-sm text-orange font-bold">$216.49</p>
  </div>
</div> -->
<!-- ***************** -->
      </div>
   </div>
<template>
 <div>

    <div  v-if="this.showComments">    
 
    <div class="modal-mask">
      <div class="modal-wrapper px-4">
        <div class="modal-container w-full  max-w-md px-8 mx-auto">
          <div class="modal-header flex justify-between items-center">
          <h2>Hold Order </h2>
             <button class="modal-default-button text-2xl py-1"  @click="closeModal()">
                &times;
            </button>
          </div>


          <div class="modal-body">
            <div class="flex">
              <div class="w-1/4  py-4">
                <div><h5>Status</h5></div>
              </div>
              <div class="w-3/4 py-4">
              <select @change="changed" v-model="form.to_status" class="w-full border">
                <option selected="processing" value="processing">processing</option>
                <option value="cancel">cancel</option>
                <option value="hold">hold</option>
                <option value="completed">completed</option>

              </select>
              </div>
            </div>    
             <div class="flex">
              <div class="w-1/4  py-4">
                <div><h5>Comments</h5></div>
              </div>
             <div class="control w-full lg:w-3/4">
                  <textarea class="form-control w-full" rows="5"   v-model="form.comments"></textarea>
              </div>
            </div>   
            <button class="button is-info" @click="store()">Save</button>   
         
          </div>

          
        </div>
      </div>
    </div>
   </div>
</div>
</template>
<template>
 <div>

    <div  v-if="this.showcancelComments">    
 
    <div class="modal-mask">
      <div class="modal-wrapper px-4">
        <div class="modal-container w-full  max-w-md px-8 mx-auto">
          <div class="modal-header flex justify-between items-center">
          <h2>Cancel Order</h2>
             <button class="modal-default-button text-2xl py-1"  @click="closecancelModal()">
                &times;
            </button>
          </div>


          <div class="modal-body">
            <div class="flex">
              <div class="w-1/4  py-4">
                <div><h5>Status</h5></div>
              </div>
              <div class="w-3/4 py-4">
              <select @change="subchanged" v-model="cancel.to_status" class="w-full border">
                <option selected value="processing">processing</option>
                <option value="cancel">cancel</option>
               <!--  <option value="cancel">hold</option> -->
               </select>
              </div>
            </div>    
             <div class="flex ">
              <div class="w-1/4  py-4">
                <div><h5>Comments</h5></div>
              </div>
             <div class="control w-full lg:w-3/4">
                  <textarea class="form-control w-full " rows="5"   
                  v-model="cancel.comments"></textarea>
              </div>
            </div>   
            <button class="button is-info" @click="cancelstore()">Save</button>   
         
          </div>

          
        </div>
      </div>
    </div>
   </div>
</div>
</template>
<template>
 <div>

    <div  v-if="this.showrefund">    
 
    <div class="modal-mask">
      <div class="modal-wrapper px-4">
        <div class="modal-container w-full  max-w-md px-8 mx-auto">
          <div class="modal-header flex justify-between items-center">
          <h2>Refund</h2>
             <button class="modal-default-button text-2xl py-1"  @click="closerefundModal()">
                &times;
            </button>
          </div>
      <div v-if="this.msg!=null" class="w-1/2 my-4 bg-red-light p-4 flex  justify-between" id="success-alert">
      <p class="text-white" v-html="success">{{this.msg}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
    </div>

          <div class="modal-body">
            <div class="flex">
              <div class="border mb-4 w-full">
             <table class="table table-hover order-table ">
                <thead>
                  <tr>
                    <th>Product</th>
                    
                   <!--  <th>Price</th> -->
                 
                    <th>Qty</th>
                    <th>Return To Stock</th>
                    <th>Total</th>
                    <!-- <th>Tax Amount</th>
                    <th>Discount Amount</th>
                    <th>Row Total</th> -->
                  </tr>
                </thead>
                <tbody>

                  <tr v-for="orderview in order" :key="orderview.orderid">
                    <td width="50%">{{orderview.productname}} /{{orderview.variationname}}</td>
                   
                    <td>{{orderview.quantity}}</td>
                    <td><input type="checkbox" name="" @click="checkevent(orderview.orderid,orderview.order_product_id)" v-model="refundval.chkstock" :value="orderview.id" class="border mx-1 text-xs"></td>
                    <td>{{orderview.overalltotalamount}}</td>

                   <!--  <td>$199.99</td> -->
                   <!--  <td>Ordered 1</td>
                    <td><input type="text" name="" class="border mx-1 text-xs"></td>
                    <td>$199.99</td>
                    <td>16.33</td>
                    <td>$0.00</td>
                    <td>256.29</td> -->
                  </tr>
                  
                </tbody>
              </table>

            </div>

            </div>
             <div class="flex justify-end"><button class="button is-info" @click="saverefund()">Refund</button> </div>
         </div>
      </div>
    </div>
   </div>
</div>
</div>
</template>
</div>
</template>

<script>
 
  export default {
     data () {
      return {
        order:[],
        orderid:'',
        status:[],
        invoice:[],
        invoicestatus:[],
        rooturl:process.env.SITEURL,
        showComments:0,
        showcancelComments:0,
        showrefund:0,
        orderstatus:'',
        ordercancel:'',
        orderhold:'',
        orderrefund:'',
        refundval:{
        user_id:this.$auth.user.id,
        chkorderitemid:'',
        refundchk_orderid:'',
        type:'',
        action:"cod",
        status:"refunded",
        comment:"Amount is refunded to customer",
        request:'',
        response:'',
        balance_before:'',
        balance_after:'',
         chkstock:'',
        },
        
        form:{
           comments:'',
           order_id:'',
           from_status:'',
           to_status:'',
           created_by:'',
           updated_by:''
        },
        cancel:{
           comments:'',
           order_id:'',
           from_status:'',
           to_status:'',
           created_by:'',
           updated_by:''
        },
        showcompleted:false,
        showhold:false,
        showunhold:false,
        showcancel:false,
        showinvoice:false,
        msg:null
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
           order: response.data
      }
      
    },

    computed: {
      taxamount(){
        let taxrate=0;
        return this.order.reduce(function(total, item){
           if(item.taxrate!=''){
              taxrate=((item.taxrate/100) * item.pricevalue).toFixed(2);
              
           }
           return taxrate;
        },0);
      },
      
       totalamount(){
        let total=0;
        let taxrate=0;
         return this.order.reduce(function(total, item){
           if(item.taxrate!=''){
              taxrate=((item.taxrate/100) * item.pricevalue).toFixed(2);
              
              total=Number(taxrate) + Number(item.totalvalue);
              
           }
           return total;
        },0);
      },
      pricetotal(){
        let pricevalue=0;
        return this.order.reduce(function(total, item){
           pricevalue+=Number(item.pricevalue);
           return pricevalue.toFixed(2);
        },0);
      },
      shippingpricetotal(){
        let shippingtotal=0;
        return this.order.reduce(function(total, item){
           shippingtotal+=Number(item.shippingpricetotal);
           return shippingtotal.toFixed(2);
        },0);
      },
      overalltotalamount(){
        let overalltotal=0;
        return this.order.reduce(function(total, item){
           overalltotal+=Number(item.totalvalue);
           return overalltotal.toFixed(2);
        },0);
      },
      overalltaxtotal(){
        let overalltaxtotal=0;
        return this.order.reduce(function(total, item){
           overalltaxtotal+=Number(item.taxtotal);
           return overalltaxtotal.toFixed(2);
        },0);
      }
    },
    methods:{
        async getOrderStatus(){
          
          let response = await this.$axios.$get('getorderstatus/' + this.orderid)
           this.status=response;
           //for(var i=0;i<this.status.length;i++){
            if(this.status.to_status==='completed'){
               this.orderstatus='completed';
              // this.showcompleted=true;

            }
            else if(this.status.to_status==='hold'){
              this.orderhold='hold';
              //this.showhold=true;
            }
            else if(this.status.to_status==='cancel'){
              this.ordercancel='cancel';
              //this.showcancel=true;
            }
            else if(this.status.to_status==='unhold'){
              this.orderhold='unhold';
            }
            else if(this.status.to_status==='refunded'){
              this.orderrefund='refunded';
            }
         // }
       },

        async getInvoicestatus(){
          let response = await this.$axios.$get('getinvoicestatus/' + this.orderid)
           this.invoice=response;
          for (var i=0;i<this.invoice.invoice.length;i++) {
            if(this.invoice.invoice[i].user.id==this.$auth.user.id){
               this.invoicestatus=this.invoice.invoice[i].status;
               this.showinvoice=true;
            }
                       
          }
       },
       close(){
         this.msg=null;
       },
       getComments()
        {
          
         this.showComments=1;
        },
        closeModal()
        {
         this.showComments=0;
        },   

        getrefundModal()
        {
          
         this.showrefund=1;
        },
        closerefundModal()
        {
         this.showrefund=0;
        }, 

        changed ($event) {
          this.$emit('input', $event.target.value)
        },

        getCancelComments(){
          
           this.showcancelComments=1;
        },
        closecancelModal(){
          this.showcancelComments=0;
        },

         subchanged ($event) {
          this.$emit('input', $event.target.value)
        },

        
          async store () {
     
         if(this.orderhold==='hold'){
          this.form.from_status='unhold';
         }
         else{
          this.form.from_status=this.order[0].status;
         }
         this.form.order_id=this.order[0].orderid;
         this.form.order_product_id=this.order[0].order_product_id;
         
         this.form.created_by=this.$auth.user.id;
         this.form.updated_by=this.$auth.user.id;
         let response = await this.$axios.$post('storestatus', this.form)
                                        .then((response) => {
                                              
                                          if(response.message!=="Saved Successfully"){
                                              
                                              alert(response.message);
                                           }
                                           else{
                                              this.form="";
                                              this.showComments=0;
                                              this.getOrderStatus();
                                              this.$router.replace({
                                                name: 'orders',
                                                //params:orderid
                                               });
                                           }
                                          }).catch((error) => {
                                              console.log(error);
                                          });
         
        },
        async cancelstore () {
    
         this.cancel.order_id=this.order[0].orderid;
         this.cancel.from_status=this.order[0].status;
         this.cancel.created_by=this.$auth.user.id;
         this.cancel.updated_by=this.$auth.user.id;
         let response = await this.$axios.$post('storestatus', this.cancel)
                            .then((response) => {
                                  
                              if(response.message!=="Saved Successfully"){
                                  
                                  alert(response.message);
                               }
                               else{
                                  this.cancel="";
                                  this.showcancelComments=0;
                                  this.$router.replace({
                                    name: 'orders-orderid',
                                    //params:orderid
                                   });
                               }
                              }).catch((error) => {
                                  console.log(error);
                              });
         
        },

        async checkevent(chkorderid,chkorderitemid)
        {
          this.refundval.refundchk_orderid=chkorderid;
          this.refundval.chkorderitemid=chkorderitemid;
        },

       async saverefund(){
             //alert(this.chkstock);
             let response = await this.$axios.$post('storerefund', this.refundval)
                            .then((response) => {
                                  
                              if(response.message!=="Saved"){
                                  
                                  this.msg=response.message;
                               }
                               else{
                                 this.showrefund=0;
                               }
                              }).catch((error) => {
                                  console.log(error);
                              });
       }

    },
   
    created(){
     this.orderid=this.order[0].orderid;
     this.getOrderStatus();
     this.getInvoicestatus();
    }
    
  }
</script>
<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

