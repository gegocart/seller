<template>
  <select @change="changed">
    <option value="">Please select</option>

    <option :value="category.id" v-for="category in subcategories" 
    :key="category.id">
      {{ category.name }}
    </option>
  </select>

<!-- <select class="js-example-basic-single" id="selectcategory" name="state">
  <option value="">Please select</option>
  <option :value="category.id" v-for="category in categories.children" :key="category.id">
      {{ category.name }}
    </option>
</select> -->

</template>

<script>

  export default {
    data () {
      return {
        categories: [],
        subcategories:[]
      }
    },
   

    methods: {
      async getCategories () {
        let response = await this.$axios.$get('categories')
        console.log(response.data);
        this.categories = response.data
      },
     async getSubCategories () {
        let response = await this.$axios.$get('subcategory')
       
        console.log(response);
        this.subcategories = response;
      },
      changed ($event) {
        // debugger;
        // alert($event.target.value);
        this.$emit('input', $event.target.value)
      }
    },

    created () {
    //  this.getCategories();
      this.getSubCategories();

      

    }
  }


</script>
