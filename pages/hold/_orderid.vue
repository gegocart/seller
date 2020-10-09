
<template>
 <!-- template for the modal component -->
<div>
 <a  id="" class="font-muller text-sm px-4 py-2 cursor-pointer bg-hayvn-pink font-muller " @click="getComments()">Order History</a>
    <div  v-if="this.showComments">    
 
    <div class="modal-mask">
      <div class="modal-wrapper px-4">
        <div class="modal-container w-full  max-w-md px-8 mx-auto">
          <div class="modal-header flex justify-between items-center">
          <h2>Comments</h2>
             <button class="modal-default-button text-2xl py-1"  @click="closeModal()">
                &times;
            </button>
          </div>


          <div class="modal-body">
            <div v-for="orderview in order" :key=orderview.id>
                
                <p class="font-muller"><b>{{orderview.orderno}}</b></p>
                <p class="font-muller">{{orderview.productname}}</p>
                
                <br>
            </div>           
               
         
          </div>

          
        </div>
      </div>
    </div>
   </div>
</div>

</template>

<script >
export default {
 
    data() {
    return {

      showComments:0,
      order:[]
     
    }
},

async asyncData ({ params, app }) {
            
      let response = await app.$axios.$get(`orderdetailview/${params.orderid}`)
         return {
           order: response
      }
    },
  methods:{
  getComments()
    {
     this.showComments=1;
    },

  
    closeModal()
    {
     this.showComments=0;
    },
    

   },
  mounted () {
                 

  },
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
