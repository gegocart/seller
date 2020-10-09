<template>
	<div class="page dashboard--page">
		<h1 class="text-2xl"> Dashboard </h1>
	<div class="my-3">
		<div class="flex flex-wrap">
		   <div class="w-full lg:w-1/4 flex">
		   	<div class="mx-2 py-4 bg-white px-4 shadow-md my-2 rounded w-full" style="box-shadow: 0 1px 1px rgba(0,0,0,.05);background:linear-gradient(to right, #ffbc59 0%, #fdca7c 100%);">
		   
		   	<div class="flex justify-between w-full">
		   		<p class="font-medium text-base text-white tracking-wide">Products</p>
		   		<div class="">
		  	<select class="text-black text-xs border bg-grey-lightest ">
		  		<option value="all">All</option>
		  		<option value="10days">10 Days</option>
		  		<option value="20days">20 Days</option>
		  	</select>
		  	</div>
		   		</div>
		   	<div class="flex items-center justify-between pt-4">
		  		<img src="~/assets/img/product.svg" class="w-8 h-8" style="filter:brightness(0) invert(1);">
		  		<p class="text-white text-3xl italic">{{productcount}}</p>
		  	</div>
		   	</div>
		   </div>
 		   <div class="w-full lg:w-1/4 flex">
 		   	<div class="mx-2 py-4 bg-white px-4 shadow-md my-2 rounded w-full" style="box-shadow: 0 1px 1px rgba(0,0,0,.05);background:linear-gradient(to right, #ff5b77 0%, #ff8097 100%)">
 		   	
 		   	<div class="flex justify-between w-full">
 		   	<p class="font-medium text-base text-white tracking-wide">Store</p>
 		   	<div class="">
		  	<select class="text-black text-xs border bg-grey-lightest ">
		  		<option value="all">All</option>
		  		<option value="10days">10 Days</option>
		  		<option value="20days">20 Days</option>
		  	</select>
		  	</div>
 		   	</div>
 		   	<div class="flex items-center justify-between pt-4">
		  		<img src="~/assets/img/store.svg" class="w-8 h-8" style="filter:brightness(0) invert(1);">
		  		<div class="flex items-center">
		  		<p class="text-white text-3xl italic">{{storecount}}</p>
		  		</div>
		  	</div>
 		   	</div>
 		   </div>

 		    <div class="w-full lg:w-1/4 flex">
 		   	<div class="mx-2 py-4 bg-white px-4 shadow-md my-2 rounded w-full" style="box-shadow: 0 1px 1px rgba(0,0,0,.05);background:linear-gradient(to right, #ff5b77 0%, #ff8097 100%)">
 		   	
 		   	<div class="flex justify-between w-full">
 		   	<p class="font-medium text-base text-white tracking-wide">Seller Amount</p>
 		   	<div class="">
		  	<select class="text-black text-xs border bg-grey-lightest ">
		  		<option value="all">All</option>
		  		<option value="10days">10 Days</option>
		  		<option value="20days">20 Days</option>
		  	</select>
		  	</div>
 		   	</div>
 		   	<div class="flex items-center justify-between pt-4">
		  		<img src="~/assets/img/store.svg" class="w-8 h-8" style="filter:brightness(0) invert(1);">
		  		<div class="flex items-center">
		  		<p class="text-white text-3xl italic">{{transactionamount}}</p>
		  		</div>
		  	</div>
 		   	</div>
 		   </div>	

 		   <div class="w-full lg:w-1/2">
		  	<div class="mx-2 py-4 bg-white px-4 my-2 rounded" style="box-shadow: 0 1px 1px rgba(0,0,0,.05);background:linear-gradient(to right, #36daba 0%, #54dfc2 100%)">
		  		
		  	<div class="flex justify-between w-full">
		  		<p class="font-medium text-base text-white tracking-wide">Orders</p>
		  		<div class="">
		  	<select class="text-black text-xs border bg-grey-lightest ">
		  		<option value="all">All</option>
		  		<option value="10days">10 Days</option>
		  		<option value="20days">20 Days</option>
		  	</select>
		  	</div>
		  		</div>
		  		<div class="flex items-center justify-between mt-4">
		  		<div class="w-1/3">
		  		<img src="~/assets/img/order.svg" class="w-8 h-8" style="filter:brightness(0) invert(1);">
		  		</div>
		  		<div class="flex w-2/3 justify-between">
		  			<div class="text-white leading-normal  border-r  border-white text-center w-1/4">
		  			<p class="text-2xl font-semibold italic">{{ordercount}}</p>
		  			<p class="text-xs">Total Order</p>
		  			</div>
		  			<div class="text-white leading-normal border-r  border-white text-center w-1/4">
		  			<p class="text-2xl font-semibold italic">{{ordercompletedcount}}</p>
		  			<p class="text-xs">Completed</p>
		  			</div>
		  			<div class="text-white leading-normal  border-r  border-white text-center w-1/4">
		  			<p class="text-2xl font-semibold italic">{{orderprocessingcount}}</p>
		  			<p class="text-xs">Processing</p>
		  			</div>
		  			<div class="text-white leading-normal  text-center w-1/4">
		  			<p class="text-2xl font-semibold italic">{{ordercancelcount}}</p>
		  			<p class="text-xs">Cancel</p>
		  			</div>
		  			</div>
		  		</div>
		  	
		  	</div>
		  </div>
		

		</div>
	</div>
     
   <div class="flex flex-col lg:flex-row my-3">
	<div class="w-full lg:w-1/2 mx-2">
	<no-ssr>
		 <ChartBar />
		 </no-ssr>
	</div>
	<div class="w-full lg:w-1/2 mx-2">
		<no-ssr>
		  <ChartDoughnut />
		 </no-ssr>
	</div>

	</div>

     <div class="flex flex-col lg:flex-row">
     <div class="w-full lg:w-1/2 mx-2">
		<no-ssr>
		 <ChartLine />
		 </no-ssr>
	</div>
	 <div class="w-full lg:w-1/2 mx-2">
	
		<div class="bg-card  mx-2">
		 <div class="overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto cart-list">
		 <table class="table table-hover w-full dashboard-table">
		 <thead>
		 <tr>

		 <th><p>Product</p></th>
		  <th><p>Stock</p></th> 
		   <th><p>Status</p></th> 
		   </tr>
		   </thead>
		   <tbody >
		   	 <tr v-for="product in productlists" :key="product.id">
			    <td>{{product.name}}</td>
			    <td>{{product.stock_count}}</td>
			    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		   </tbody>
		    <!-- <tbody>
		    <tr>
		    <td>Clothing</td>
		    <td>81.00</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		     <tr>
		    <td>Building Material</td>
		    <td>100</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		    <tr>
		    <td>Clothing</td>
		    <td>990</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		     <tr>
		    <td>Building Material</td>
		    <td>70.00</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		    <tr>
		    <td>Clothing</td>
		    <td>300.00</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#e6615a;">Inactive</p></td>
		    </tr>
		     <tr>
		    <td>Clothing</td>
		    <td>120.00</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		     <tr>
		    <td>Building Material</td>
		    <td>12.00</td>
		    <td><p class="text-white text-xs inline-block px-2 rounded leading-normal" style="background-color:#28d094;">Active</p></td>
		    </tr>
		    
		  </tbody> -->
		</table>
           </div></div>
	</div>
	</div>

	<div class="flex flex-col lg:flex-row my-3">
		<div class="w-full mx-2">
		<p class="font-medium text-sm uppercase text-grey-darker tracking-wide mb-3">Recent Orders</p>
			<div class="bg-white shadow  cart-list">

			<table class="w-full dashboard-table">
			<thead>
		 <tr>
		 <th><p>Order #</p></th>
		  <th><p>Name</p></th> 
		  <th><p>Product Name</p></th> 
		  <th><p>Purchased from Store</p></th> 
		  <th><p>Purchased on</p></th> 
		  <th><p>Amount</p></th>
		   </tr>
		   </thead>
		   <tbody class="text-sm text-grey-dark">
		   	 <tr v-for="order in orderlists" :key="order.orderid">
		   	 	 <td><p class="text-sm text-grey-dark">
		   	 	<nuxt-link  :to="{name: 'orders-orderid',params: {orderid:order.orderid} }" 
	              class="order-a"  title="View">{{order.orderno}}
	              </nuxt-link>
		   	 	</p></td>
					<td>
						<div class="flex items-center">
			            <a href="#" class="text-sm">{{order.billname}}</a>
			            <p class="text-white text-xs mx-3 rounded px-2 paid leading-normal">
			            	{{order.status}}
			            </p>
					    </div>
					</td>
					<td>{{order.productname}}</td>
					<td>{{order.storename}}</td>
					<td>2{{order.purchased_on}}</td>
					<td>
						<div>
				        <p class="text-sm font-semibold flex items-center text-grey-darker">
                   	    <img src="~/assets/img/rupee-indian.svg" class="w-3 h-3 mx-1" > 
                        <span>{{order.total_value}}</span>
                        </p>
                        </div>
					</td>
		   	 </tr>
		   </tbody>
				<!-- <tbody class="text-sm text-grey-dark">
				<tr>
					<td><p class="text-sm text-grey-dark">OR#001</p></td>
					<td>
						<div class="flex items-center">
			            <a href="#" class="text-sm">Andrew D.</a>
			            <p class="text-white text-xs mx-3 rounded px-2 paid leading-normal">Completed</p>
					    </div>
					</td>
					<td>Samsung Mobile</td>
					<td>Mobile Stores</td>
					<td>24-May-19</td>
					<td>
						<div>
				        <p class="text-sm font-semibold flex items-center text-grey-darker">
                   	    <img src="~/assets/img/rupee-indian.svg" class="w-3 h-3 mx-1" > 
                        <span>1000</span>
                        </p>
                        </div>
					</td>
				</tr>
				<tr>
					<td><p class="text-sm text-grey-dark">OR#002</p></td>
					<td>
						<div class="flex items-center">
			            <a href="#" class="text-sm">Elizabeth W.</a>
			            <p class="text-white text-xs mx-3 rounded px-2 processing leading-normal">Processing</p>
					    </div>
					</td>
					<td>Samsung Mobile</td>
					<td>Mobile Stores</td>
					<td>24-May-19</td>
					<td>
						<div>
				        <p class="text-sm font-semibold flex items-center text-grey-darker">
                   	    <img src="~/assets/img/rupee-indian.svg" class="w-3 h-3 mx-1" > 
                        <span>1000</span>
                        </p>
                        </div>
					</td>
				</tr>
				<tr>
					<td><p class="text-sm text-grey-dark">OR#003</p></td>
					<td>
						<div class="flex items-center">
			            <a href="#" class="text-sm">Lawrence M.</a>
			            <p class="text-white text-xs mx-3 rounded px-2 cancel leading-normal">Payment_Failed</p>
					    </div>
					</td>
					<td>Samsung Mobile</td>
					<td>Mobile Stores</td>
					<td>24-May-19</td>
					<td>
						<div>
				        <p class="text-sm font-semibold flex items-center text-grey-darker">
                   	    <img src="~/assets/img/rupee-indian.svg" class="w-3 h-3 mx-1" > 
                        <span>1000</span>
                        </p>
                        </div>
					</td>
				</tr>
				<tr>
					<td><p class="text-sm text-grey-dark">OR#004</p></td>
					<td>
						<div class="flex items-center">
			            <a href="#" class="text-sm">Andrew K.</a>
			            <p class="text-white text-xs mx-3 rounded px-2 cancel leading-normal">Cancel</p>
					    </div>
					</td>
					<td>Samsung Mobile</td>
					<td>Mobile Stores</td>
					<td>24-May-19</td>
					<td>
						<div>
				        <p class="text-sm font-semibold flex items-center text-grey-darker">
                   	    <img src="~/assets/img/rupee-indian.svg" class="w-3 h-3 mx-1" > 
                        <span>1000</span>
                        </p>
                        </div>
					</td>
				</tr>
					<tr>
					<td><p class="text-sm text-grey-dark">OR#005</p></td>
					<td>
						<div class="flex items-center">
			            <a href="#" class="text-sm">Elizabeth W.</a>
			            <p class="text-white text-xs mx-3 rounded px-2 paid leading-normal">Completed</p>
					    </div>
					</td>
					<td>Samsung Mobile</td>
					<td>Mobile Stores</td>
					<td>24-May-19</td>
					<td>
						<div>
				        <p class="text-sm font-semibold flex items-center text-grey-darker">
                   	    <img src="~/assets/img/rupee-indian.svg" class="w-3 h-3 mx-1" > 
                        <span>1000</span>
                        </p>
                        </div>
					</td>
				</tr>

				</tbody> -->
			</table>
			</div>
		</div>
	</div>
	</div>
</template>
<script >

import ChartBar from "@/components/chart/chart-bar";
import ChartDoughnut from "@/components/chart/chart-doughnut";
import ChartLine from "@/components/chart/chart-line";


	export default {
		layout: 'default',
		data(){
			return{
               productcount:0,
               ordercount:0,
               storecount:0,
               productlists:[],
               orderlists:[],
               ordercompletedcount:0,
               orderprocessingcount:0,
               ordercancelcount:0,
               transactionamount:0
			}
		},
		  middleware: [
      		'redirectIfGuest'
    	],
    	 components: {
		      ChartBar,
		     ChartDoughnut,
		     ChartLine
		  },
		  methods:{
             async getproductcount () {
      
		     let response = await this.$axios.$get('seller/products');
		        this.productcount=response;
		      },
		      async getstorecount () {
      
		     let response = await this.$axios.$get('seller/stores');
		        this.storecount=response;
		      },
		      async getordercount () {
      
		        let response = await this.$axios.$get('seller/orders');
		        this.ordercount=response.ordercount;
		        this.ordercompletedcount=response.ordercompleted;
		        this.orderprocessingcount=response.orderprocessing;
		        this.ordercancelcount=response.ordercancel;
		        this.transactionamount=response.transactionamount;
		      },
		       async getOrderdetail(){
          
		          let response = await this.$axios.$get('seller/orderstatusdetail' 
		          	                     ); 
		          this.orderlists=response;
		       },
		       async getproductdetail(){
          
		          let response = await this.$axios.$get('seller/activeproducts' 
		          	                     ); 
		          this.productlists=response.data;
		       },
		       async getOrdercompleted(){
          
		          let response = await this.$axios.$get('seller/orderstatuscompleted' 
		          	                     ); 
		          this.ordercompletedcount=response;
		       },
		       async getOrderprocessing(){
          
		          let response = await this.$axios.$get('seller/orderstatusprocessing') 
		          	                     ; 
		          this.orderprocessingcount=response;
		       },
		       async getOrdercancel(){
          
		          let response = await this.$axios.$get('seller/orderstatuscancel' 
		          	                      ); 
		          this.ordercancelcount=response;
		       },
		  },
		  created(){
            this.getproductcount();
            this.getordercount();
            this.getstorecount();
            this.getOrderdetail();
            this.getproductdetail();
            

		  }

	}

</script>
<style>
	.dashboard--page .btn-success {
	padding: 5px 10px;
    margin-right: 10px;
    display: inline-flex;
    align-items: center;
    background-color: #98ddde;
	}
	.dashboard-table thead {
		background-color: #b3b8cf;
	}
	.dashboard-table thead th {
		color: #fff !important;
	}
	.dashboard-table tbody {
		background-color: #fff !important;
	 }
	 .dashboard--page .paid {
	 	background-color: #0dcf92;
	 }
	 .dashboard--page .processing {
	 	background-color: #fd7e14;
	 }
	 .dashboard--page .cancel {
	 	background-color: #e6615a;
	 }
	 .dashboard-table tbody td {
	 	white-space: unset !important;
	 	line-height: 1.625;
	 }
</style>

