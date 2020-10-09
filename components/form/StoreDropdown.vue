<template>
  <select @change="changed">
    <option value="">Please select</option>
    <option :value="store.id" v-for="store in stores" :key="store.id">
      {{ store.name }}
    </option>
  </select>
</template>

<script>
  export default {
    data () {
      return {
        stores: []
      }
    },

    methods: {
      async getStores () {
      //  let response = await this.$axios.$get('getstoreuser/' + this.$auth.user.id)
        let response = await this.$axios.$get('stores/getmystores');
       
        this.stores = response.data
      },

      changed ($event) {
        this.$emit('input', $event.target.value)
      }
    },

    created () {
      this.getStores()
    }
  }
</script>
