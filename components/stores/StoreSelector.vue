<template>
  <div class="column is-three-quarters">
         <table class="table">
          <thead>
            <tr>
              
              <th scope="col">Name</th>
              <th scope="col">Slug</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">Keywords</th>
            </tr>
          </thead>
         <tbody>
      <tr v-for="store in stores" :key="store.id">
        <td>
          <p :class="{ 'has-text-weight-bold': store.id }">
            {{ store.name }}
            
           <!--  {{ store.status }}<br>
            {{ store.description }}<br>
            {{ store.keywords }} -->
          </p>
        </td>
       <td>{{ store.slug }}</td>
        <td>{{ store.status }}</td>
        <td>{{ store.description }}</td>
        <td>{{ store.keywords }}</td>
        <!-- <td>
          <a href="" class="button is-info" @click.prevent="$emit('click', address)">
           
          </a>
        </td> -->
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'

  export default {
   props: {
      
      selectedStore: {
        required: true,
        type: Object
      }
    },
     methods: {
    
      async getStores () {
        let response = await this.$axios.$get('stores')
        console.log(response.data);
        this.stores = response.data
      },
    },
    created () {
      this.getStores()
    },

  }
</script>
