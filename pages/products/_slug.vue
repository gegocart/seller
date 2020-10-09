<template>
 <div id="app" class="page form-page">
     <div class="section">
    
  <div class="flex flex-col lg:flex-row md:flex-row">
    <div class="w-full lg:w-3/5">
      <div class="columns mb-2 lg:mb-10">
        <div class="field column flex flex-col lg:flex-row">
          <label class="label w-full lg:w-1/4">Store</label>
          <div class="select is-fullwidth w-full lg:w-3/4">
           {{product}}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  import ProductDetail from '@/components/products/ProductDetail'

  export default {
    
    data () {
      return {
        product: null,
        rooturl:process.env.SITEURL,
        slug:'',
        form: {
          variation: '',
          quantity: 1
        }
      }
    },

    components: {
     ProductDetail
    },

    methods: {
      async getProduct(){
        var url='attributes/'+this.categoryid;
        
        let response = await this.$axios.$get(url)
         this.attributes = response;
      }
    //   ...mapActions({
    //     store: 'cart/store'
    //   }),

    //   add () {
    //     this.store([{
    //       id: this.form.variation.id, quantity: this.form.quantity
    //     }])

    //     this.form = {
    //       variation: '',
    //       quantity: 1
    //     }
    //   }
     },

    async asyncData ({ params, app }) {
      let response = await app.$axios.$get(`products/getproductdetail/${params.slug}`)
       return {
       
        product: response.data
      }
       this.slug=params.slug;
    }
  }
</script>
