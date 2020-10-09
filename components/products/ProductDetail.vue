
<template>
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
</template>
<script>
	 export default {
	 	props:['nslug'],
	 	data () {
      return {
        product: null,
        rooturl:process.env.SITEURL,
         form: {
          variation: '',
          quantity: 1
        }
      }
    },
      computed: {
      selectedVariationId () {
        if (!this.findVariation(this.value.id)) {
          return ''
        }

        return this.value.id
      }
    },

    methods: {
      changed (event, type) {
        this.$emit('input', this.findVariation(event.target.value))
      },

      findVariation (id) {
        let variation = this.variations.find(v => v.id == id)

        if (typeof variation === 'undefined') {
          return null
        }

        return variation
      },
      async getProduct(){
      	 let response = await app.$axios.$get('products/'+this.nslug)
          this.product=response.data

      }

    },
    created(){
        this.getProduct();
    }
  }
</script>
