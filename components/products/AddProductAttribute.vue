<template>
  <div id="app">
   
  <!-- <h1 class="title is-4">Add Attribute</h1> -->
  <div v-bind:class="[this.product_tab==2?'block' :'hidden']">
 <form  action="#" @submit.prevent="store" name="myForm" id="myForm" class="custom-form">
  <div v-if="this.success!=null" class="w-1/2 my-4 bg-red-light p-4 flex  justify-between" id="success-alert">
      <p class="text-white" v-html="success">{{this.success}}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
     </div>
 <div class="w-full lg:w-3/5">
   <div class="flex">
          <div class="w-1/3 mb-5">
            <p class="font-bold">Attribute Code</p>
          </div>
          <div class="w-2/3 mb-5">
            <p class="font-bold">Attribute Value</p>
          </div>
          <div class="w-2/3 mb-5">
            <p class="font-bold">Price Variation</p>
          </div>
          <div class="w-2/3 mb-5">
            <p class="font-bold">Stock</p>
          </div>
   </div>
   <div class=" mb-5" v-for="(attributeproduct,i) in attributeproducts" :key="attributeproduct.id">
     <div class="w-full ">
    <div class="flex">
           <div class="w-1/3 mb-5">
              <input type="hidden" ref="form.attributeproduct_id[i]" id="attributeproductid" v-bind:value="attributeproduct.id"  >
              <p class="font-bold">{{attributeproduct.attribute_label}}</p>
            </div>
           <template v-if="attributeproduct.input_type == 'checkbox'">
           <div class="w-2/3 mb-5">
            <input type="checkbox" v-model="form.checkboxtype[i]" 
                  :value="attributeproduct.attribute_value" 
                  ref="form.checkboxtype[i]" name="chkweight" 
                  :id="'chk_' + attributeproduct.attribute_value">{{ attributeproduct.attribute_value }}
            </div>
           </template>
         <!--   <template v-if="attributeproduct.input_type == 'text'">
           <div class="w-2/3 mb-5">
             <div class="field  columns">
                 <div class="control">
                 <input type="text" class="input" name="attribute" id="inputtype_text" 
                 v-model="form.inputtypetext[i]" >{{ attributeproduct.attribute_value }}
               </div>
               </div>
            </div>
           </template> -->
            <template v-if="attributeproduct.input_type == 'dropdown'">
           <div class="w-2/3 mb-5">
                <div class="field column is-5">
                  <select class="select is-fullwidth" @change="changed" v-model="form.selecttype[i]">
                  <option  value="">Select</option>
                   <option :value="attributeproduct.attribute_value" 
                   :key="attributeproduct.attribute_value">
                      {{ attributeproduct.attribute_value }}
                    </option>
              </select>
                </div>
              </div>
           </template>
           <div class="w-2/3 mb-5">
              <p class="font-bold"><input type="checkbox" v-model="form.variation[i]" 
                  ref="form.variation[i]" name="chkvariation" 
                  :id="'chk_' + attributeproduct.id" >
              Is Variation </p>
              <div class="field  columns" v-bind:class="[form.variation[i]==true?'block':'disp-none']"> 
                <div class="control">
                  <p>Price</p>
                <input class="input" type="text"  v-model="form.isprice[i]"  autofocus="">
              </div>
              </div>   
           </div>
            <div class="w-2/3 mb-5">
            <div class="field  columns"> 
                <div class="control">
                <input class="input" type="text"  v-model="form.stock[i]"  autofocus="">
              </div>
            </div>
          </div>
         
   </div>
 </div>
   
   </div>
        
          <div class="field">
            <p class="control">
              <button class="button is-info">
                Save
              </button>
              <a class="button is-text" @click="cancel">Cancel</a>
            </p>
          </div>
           </div>
   </form>
 </div>
 </div>

</template>

<script>
 
  

  export default {
   // props:['productid','categoryid','tab','price'],
    data () {

      return {
        success:null,
        form: {
          attributeproduct_id:[],
          inputtypetext:[],
          product_price:'',
          price:[],
          isprice:[],
          stock:[],
           selecttype:[],
          checkboxtype:[],
          radiobuttontype:[],
          variation:[],
        //  product_id:this.productid,
        //  category_id:this.categoryid,
         // default: true
            product_id:'',
            category_id:'',
        },
        
         attributes:[],
         attributeproducts:[],
         //inputdata:{},
         arr:[],
          inputdata:{
            product_id:'',
            attributes:[],
            price:''
          },
          product_tab:'',
          productvariation:[],
          
        
      }
    },
   
    
    methods: {
     
       async store(){
         
              for (let i = 0; i < this.attributeproducts.length; i++) { 
                    if(this.form.checkboxtype[i]==true){
                    this.productvariation.push({"attribute_product_id":this.attributeproducts[i].id,
                      "attribute_value":this.attributeproducts[i].attribute_value,
                      "product_id":this.attributeproducts[i].product_id,
                      "order":i,"price":this.price,"isvariation":this.form.variation[i],
                     "isprice":this.form.isprice[i],"stock":this.form.stock[i]});
                    }
                   
                    if(this.attributeproducts[i].input_type=='dropdown'){
                     if(this.form.selecttype[i]==this.attributeproducts[i].attribute_value){
                       this.productvariation.push({"attribute_product_id":this.attributeproducts[i].id,
                        "attribute_value":this.attributeproducts[i].attribute_value,
                        "product_id":this.attributeproducts[i].product_id,
                        "order":i,"price":this.price,"isvariation":this.form.variation[i],
                       "isprice":this.form.isprice[i],"stock":this.form.stock[i]});
                        }
                    }
                    if(this.attributeproducts[i].input_type=='text'
                      &&this.attributeproducts[i].attribute_label=='No Variation'){
                    
                       this.productvariation.push({"attribute_product_id":this.attributeproducts[i].id,
                        "attribute_value":this.attributeproducts[i].attribute_value,
                        "product_id":this.attributeproducts[i].product_id,
                        "order":i,"price":this.price,"isvariation":this.form.variation[i],
                       "isprice":this.form.isprice[i],"stock":this.form.stock[i]});
                       
                    }
                    

        
              } 
            
              let response = await this.$axios.$post('attributes/attributeproductstore', this.productvariation).then((response) => {
             
                if(response.message=="Success")
                {
                     this.clear();
                     this.product_tab=1;
                    //this.$emit('product_tab', this.product_tab);
                    this.$router.replace({
                        name: 'products',
                       
                      });
                 }
                 else{
                    this.success=response.message;
                    this.productvariation=[];
                 }
              }).catch((error) => {
                 this.success=error;
                 this.productvariation=[];
              });
        
        },
         close(){
         this.success=null;
      },
      clear(){
          this.form.checkboxtype=[];
        this.form.selecttype=[];
        this.form.variation=[];
        this.form.isprice=[];
        this.form.attributeproduct_id=[];
        this.productvariation=[];
      },
      cancel(){
       this.clear();
        this.product_tab = 1;
        this.$emit('product_tab', this.product_tab);
      },

      changed ($event) {
        this.$emit('input', $event.target.value)
      },
      
      async getAttributes () {
        var url='attributes/'+this.categoryid;
         let response = await this.$axios.$get(url)
         this.attributes = response;
        
      },

       async getProductAttribute() {
        var url='products/displayattributeproduct/' +this.productid;
           let response = await this.$axios.$get(url)
         this.attributeproducts = response.data;
        
      },
      
    },

   
    created () {
      this.$nuxt.$on('product_tab', data => {
          this.product_tab = data;
       });
      this.$nuxt.$on('product_id', data => {
           this.productid = data;
           this.getProductAttribute();
      });


       this.getProductAttribute();
    },
  
  }
</script>
<style type="text/css">
  .disp-none{
    display:none !important;
  }
 
</style>