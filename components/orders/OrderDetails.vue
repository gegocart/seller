<template>
  <div class="section order-section">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-12 flex justify-between border-b">
          <h1 class="py-2 is-4">Orders</h1>
          <!-- <a href="#" class="button is-info flex" style="display: none;">
          <svg class="w-4 h-4 fill-current mx-1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 31.059 31.059" style="enable-background:new 0 0 31.059 31.059;" xml:space="preserve">
<g>
  <g>
    <path style="fill:#fff;" d="M15.529,31.059C6.966,31.059,0,24.092,0,15.529C0,6.966,6.966,0,15.529,0
      c8.563,0,15.529,6.966,15.529,15.529C31.059,24.092,24.092,31.059,15.529,31.059z M15.529,1.774
      c-7.585,0-13.755,6.171-13.755,13.755s6.17,13.754,13.755,13.754c7.584,0,13.754-6.17,13.754-13.754S23.113,1.774,15.529,1.774z"
      />
  </g>
  <g>
    <path style="fill:#fff;" d="M21.652,16.416H9.406c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.397-0.888,0.888-0.888h12.246
      c0.49,0,0.887,0.398,0.887,0.888C22.539,16.02,22.143,16.416,21.652,16.416z"/>
  </g>
  <g>
    <path style="fill:#fff;" d="M15.529,22.539c-0.49,0-0.888-0.397-0.888-0.887V9.406c0-0.49,0.398-0.888,0.888-0.888
      c0.49,0,0.887,0.398,0.887,0.888v12.246C16.416,22.143,16.02,22.539,15.529,22.539z"/>
  </g>
</g></svg>Create New Order</a> -->
        </div>

      </div>
      <div v-if="this.page_count>1">
          <paginate
           v-model="orderpage"
           :page-count="this.page_count"
           :page-range="5"
           :margin-pages="1"
           :click-handler="getOrders"
           :prev-text="'<'"
           :next-text="'>'"
           :container-class="'pagination'"
           :page-class="'page-item'">
       </paginate>
          
        </div>
      <div class="flex flex-col lg:flex-row md:flex-row my-4">
        
      <div class="flex flex-1" >
        
      <!-- <p class="m-1" >Page</p>
       <a  class="border bg-grey-lighter px-2" @click="minus()">-</a>
       <input type="text" name="name" v-model="orderpage" class="w-6 border mx-1 text-xs">
       <a   class="border bg-grey-lighter px-1" @click="add()">+</a>
       <p class="m-1 border-r pr-3 border-black">of {{orderpage}} pages </p> -->
       <!-- <p class="my-1 mx-2">|</p> -->
        <!-- <p class="m-1">View</p>
        <select class="border text-xs mx-1" >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        </select> -->
        <!--  <p class="m-1 border-r pr-3 border-black">per page</p> -->
          <!-- <p class="my-1 mx-2">|</p> -->
          <!-- <p class="m-1 border-r pr-3 border-black">Total {{orders.length}} records found</p> -->
           <!-- <p class="my-1 mx-2">|</p> -->
          <div class="flex m-1" style="display: none;">
          <svg class="w-4 h-4 fill-current" style="color:#ff5139;" height="1063pt" viewBox="-33 -100 1063.7506 1063" width="1063pt" xmlns="http://www.w3.org/2000/svg"><path d="m566.332031 254.230469-151.777343-22.148438 28.882812 99.679688 146.964844 4.085937-6.625-38.066406c-7.390625-13.660156-13.277344-28.253906-17.445313-43.550781zm174.816407 454.882812c40.949218 0 74.152343 33.214844 74.152343 74.152344 0 40.957031-33.203125 74.15625-74.152343 74.15625-40.945313 0-74.152344-33.199219-74.152344-74.15625 0-40.9375 33.207031-74.152344 74.152344-74.152344zm11.113281 63.050781c-9.859375-9.863281-26.828125-2.875-26.828125 11.101563 0 13.980469 16.96875 20.96875 26.828125 11.121094 6.136719-6.136719 6.136719-16.097657 0-22.222657zm-357.160157-63.050781c40.945313 0 74.152344 33.214844 74.152344 74.152344 0 40.957031-33.210937 74.15625-74.152344 74.15625-40.949218 0-74.15625-33.199219-74.15625-74.15625 0-40.9375 33.207032-74.152344 74.15625-74.152344zm11.109376 63.050781c-9.859376-9.863281-26.820313-2.875-26.820313 11.101563 0 13.980469 16.964844 20.96875 26.820313 11.121094 6.132812-6.136719 6.132812-16.097657 0-22.222657zm250.214843-397.261718 18.960938 109c45.921875-12.28125 85.042969-40.738282 110.726562-79.179688-46.460937 4.753906-91.75-6.238281-129.6875-29.820312zm206.105469 6.332031c-31.25 88.820313-109.820312 153.003906-205.085938 165.46875l-310.285156 40.59375c-15.710937 3.703125-23.773437 21.984375-14.777344 36.332031 4.914063 7.828125 12.398438 11.816406 21.738282 11.816406h457.890625c16.136719 0 29.21875 13.085938 29.21875 29.222657 0 16.140625-13.082031 29.222656-29.21875 29.222656h-457.890625c-60.921875 0-101.988282-62.859375-75.8125-118.285156 3.449218-7.289063 7.738281-13.84375 12.765625-19.609375l-150.789063-371.210938-36.570312-26.476562c-32.625 17.472656-72.972656 7.261718-93.539063-23.378906-22.136719-32.96875-13.292969-77.621094 19.652344-99.738282 32.96875-22.132812 77.613281-13.289062 99.730469 19.652344 10.910156 16.257812 15.152344 37.242188 10.117187 57.460938l35.828125 25.9375 383.660156 55.984374c3.035157-111.019531 94.007813-200.109374 205.765626-200.109374 56.859374 0 108.351562 23.0625 145.601562 60.34375l34.832031-34.84375c11.417969-11.410157 29.917969-11.410157 41.328125 0 11.40625 11.40625 11.40625 29.910156 0 41.316406l-40.816406 40.8125c54.40625 100.003906 16.871094 225.40625-83.34375 279.488281zm-183.539062-170.789063c-11.410157-11.414062-11.410157-29.910156 0-41.328124 11.402343-11.410157 29.910156-11.410157 41.3125 0l37.785156 37.78125 111.121094-111.125c-56.230469-58.136719-151.996094-56.574219-208.519532-.046876-57.554687 57.554688-57.554687 150.898438 0 208.464844 57.570313 57.558594 150.910156 57.558594 208.46875 0 42.871094-42.859375 53.796875-105.554687 32.832032-158.5625l-123.242188 123.246094c-11.40625 11.414062-29.910156 11.414062-41.3125 0zm-597.820313-123.179687c-6.472656-9.644531-22.210937-7.246094-24.609375 4.960937-2.429688 12.390626 11.261719 20.449219 20.929688 13.964844 6.144531-4.125 7.78125-12.808594 3.679687-18.925781zm261.9375 441.730469c30.820313-3.167969 62.511719-8.082032 93.332031-12.125l-37.101562-128.082032-114.480469-3.183593zm117.339844-138.511719 34.414062 118.753906 122.898438-16.082031-17.183594-98.777344zm-199.527344-63.804687 121.394531 3.375-31.0625-107.210938-140.859375-20.5625zm0 0" fill-rule="evenodd"/></svg>
           <a  href="#" class="order-a mx-1">New Order</a>
          </div>
      </div>
       <div class="flex text-sm w-1/4" style="display: none;">
   <p class="m-1">Export to:</p>
    <select class="border text-xs mx-1" >
          <option value="any">CSV</option>
          <option value="select">CSV</option>
        </select>
        <button class="is-info rounded text-xs p-1">Export</button>
   </div>
   <div class="flex">
    <input class="input"  v-model="searchquery" type="text" 
    placeholder="Search..">
    <button class="is-info rounded text-xs p-1 mx-1" @click="search()">Search</button>
    <button class="is-info rounded text-xs p-1 mx-1" @click="resetfilter()">Reset Filter</button>
     
   </div>
      </div>
      <div class="order-breadcrumb breadcrumb flex flex-col lg:flex-row md:flex-row justify-between mt-3">
      <div>
   <ul class="">
  <li><a href="#" class="order-a">Home</a></li>
  <li>Orders</li>
   </ul>
   </div>
   <div class="flex text-sm">
   <p class="m-1">Actions</p>
    <select class="border text-xs mx-1" v-model="statusfilter" >
          <option value="">Select</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="payment_failed">Payment_Failed</option>
          <option value="cancel">Cancel</option>
        </select>
        <button class="is-info rounded text-xs p-1" @click="filterstatus()">Submit</button>
       
   </div>
   </div>
        <div class="overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto">
      <table class="table table-hover order-table">
      <thead>

       <tr>
       <!-- <th></th> -->
        <th>Order #</th>
        <!-- <th class="whitespace-no-wrap">Purchased From Store</th> -->
        <th>Product Name</th>
        <th>Purchased from Store</th>
        <th>Purchased On</th>
        <th>Address</th>
        <th>Status</th>
        <th>Action</th>
        <th>Print</th>
       </tr>
      </thead>
     
     <!--  <tr>
        <td>
        <select class="">
          <option value="any">Any</option>
          <option value="select">Select</option>
        </select>
        </td>
        <td>
          <input type="text" name="name" class="w-16">
        </td>
        <td>
        <select class="w-full">
          <option value="any"></option>
          <option value="select"></option>
        </select>
        </td>
        <td>
        <form action="">
         <div class="mb-1 flex"><p class="w-10">From:</p>
         <input type="text" name="from" class="w-16"></div>
        <div class="flex"> <p class="w-10">To:</p>
         <input type="text" name="to" class="w-16"></div>
         </form>
        </td>
        <td width="18%">
          <input type="text" name="name" class="w-full">
        </td>
        <td width="18%">
          <input type="text" name="name" class="w-full">
        </td>
        <td>
        <form action="">
         <div class="mb-1 flex"><p class="w-10">From:</p>
         <input type="text" name="from" class="w-16"></div>
        <div class="flex"> <p class="w-10">To:</p>
         <input type="text" name="to" class="w-16"></div>
         </form>
        </td>
        <td>
      <form action="">
         <div class="mb-1 flex"><p class="w-10">From:</p>
         <input type="text" name="from" class="w-16"></div>
        <div class="flex"> <p class="w-10">To:</p>
         <input type="text" name="to" class="w-16"></div>
         </form>
        </td>
        <td>
        <select class="w-full">
          <option value="cancel">cancel</option>
          <option value="complete">complete</option>
          <option value="pending">pending</option>
        </select>
        </td>
        <td></td>
      </tr> -->
       <tbody>
        <tr v-for="order in orders" :key="order.orderid">
         <!--  <td class="text-center"><input type="checkbox" name="" value=""></td> -->
      <!--    <td>{{order.orderid}}</td> -->
          <td>{{order.orderno}}</td>
          <td >{{order.productname}}</td>   
          <td>{{order.storename}}</td>
          <td>{{order.purchased_on}}</td>
          <td>{{order.billname}} <br/> {{order.billaddress}} <br/> {{order.billpostcode}}<br/>
          {{order.billcity}}</td>
          <td>{{order.status}}</td>
          <td>
           <!--  <a href="#" class="order-a">View</a> -->
            
           <div v-if="order.status!=='cancel'">
            <span class="mx-2">
             <nuxt-link  :to="{name: 'orders-orderid',params: {orderid:order.orderid} }" 
              class="order-a"  title="View">View 
              </nuxt-link>
          </span>
           </div>
          </td>
          <td>
            <div v-if="order.status=='completed'">
            <span class="mx-2">
             <button class="order-a" @click="invoiceprint('invoice',order.id)" title="Print Invoice">Print Invoice 
              </button>
              <template>
      <div style="display:none;">
      <div id="invoice" >
        
        <div style="width:10%;text-align: right;">
             <p style="font-size:10px;">Shipping Address:<br></p>
               <p style="font-size:10px;">{{order.billname}}<br></p>
               <p style="font-size:10px;">{{order.billaddress}}<br></p>
               <p style="font-size:10px;">{{order.billpostcode}}<br></p>
               <p style="font-size:10px;">{{order.billcity}}<br></p>
               <p style="font-size:10px;">{{order.state}}<br></p>
               <p style="font-size:10px;">{{order.country}}<br></p>
               <p style="font-size:10px;">{{order.mobileno}}<br></p>
        </div>
      
      </div>
    </div>
    </template>
          </span>
           </div>
          </td>
        </tr>
        
       
      </tbody>
      </table>
      </div>
    </div>
    
  </div>
</template>
<script>
  //import Order from '@/components/orders/Order'

  export default {
    data () {
      return {
        orders: [],
         orderpage: 1,
         ordercancel:'',
         orderid:'',
         status:'',
         page_count: 0,
         total:'',
         statusfilter:'',
         searchquery:''
      }
    },
   
    middleware: [
      'redirectIfGuest'
    ],

    // components: {
    //   Order
    // },
    methods:{
       async getOrders(orderpage = 1){
          
          let response = await this.$axios.$get('orderdetail?page='+orderpage)
          this.orders=response.data;
          this.page_count = response.last_page;
           this.total = response.total;
       },
        async search(orderpage = 1){

             let response = await this.$axios.$get('searchorder/' + this.$auth.user.id 
              +'/' + this.searchquery + '?' +'&page='+orderpage)
          this.orders=response.data;
          this.page_count = response.last_page;
           this.total = response.total;
        },
        async resetfilter(){
            this.searchquery='';
            this.statusfilter='';
            this.getOrders();
         },

       async filterstatus(orderpage = 1){
          if(this.statusfilter==''){
            this.getOrders();
          }
          else{
          let response = await this.$axios.$get('orderdetailstatus/'+ this.statusfilter +'?' +'&page='+orderpage)
            
          this.orders=response.data;
          this.page_count = response.last_page;
           this.total = response.total;
         }
       },

       async invoiceprint(divName){
          var printContents = document.getElementById(divName).innerHTML;
          var originalContents = document.body.innerHTML;
          document.body.innerHTML = printContents;
          window.print();
          document.body.innerHTML = originalContents;
       },

       async add() {
        this.orderpage=this.orderpage+1;
         },
         async minus() {
          this.orderpage=this.orderpage-1;
          if(this.orderpage<=0)
          {
            this.orderpage=1;
          }
         }
       
    },

    created(){
      this.getOrders();
     
    }

  }
</script>
<style lang="css">
.pagination {
  list-style: none;
  display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
}
.page-item {
  border: 2px solid;
    padding: 9px;
    margin-right: 1px;
}
.prev-text
{
  background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.next-text
{
background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.disabled
{

}
.prev
{
  background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px;
}
.next
{
 background-color:#d8d8d8;
    padding: 9px;
    margin-right: 1px; 
}
.page-item active
{
  background-color: white;
  border:2px solid #d8d8d8;
}
</style>
