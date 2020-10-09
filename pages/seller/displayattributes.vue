 <template>
  <div class="section">
  	<DisplayAttributes/>
  </div>
  </template>



<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayAttributes from '@/components/seller/DisplayAttributes'

  export default {
    components: {
      DisplayAttributes
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>