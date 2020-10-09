 <template>
  <div id="app">
   <h1 class="title is-4">Add Pincode</h1>
   <div v-if="this.success!=null" class="w-1/2 my-4 bg-red-light p-4" id="success-alert"><p class="text-white">{{this.success}}</p></div>

   
 <form action="#" @submit.prevent="store" class="custom-form">
 <div class="flex flex-col lg:flex-row md:flex-row">
       <div class="w-full lg:w-3/5">
          <!-- <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
               <label class="label w-full lg:w-1/4">Post Office Name</label>
                <div class="control w-full lg:w-3/4">
                        <input class="input" :class="{ 'is-danger': errors.postofficename }" type="text" 
                        v-model="form.postofficename" autofocus="">
                      
              </div>
                </div>
            </div> -->
            <div class="columns mb-2 lg:mb-10">
            <div class="column">
              <div class="field flex flex-col lg:flex-row">
                <label class="label w-full lg:w-1/4">Pincode</label>
                <div class="control w-full lg:w-3/4">
                 <input class="input" :class="{ 'is-danger': errors.pincode }" type="text" v-model="form.pincode" autofocus="">
                   <p class="help is-danger" v-if="errors.pincode">
                    {{ errors.pincode[0] }}
                  </p>
                  </div>
              
              </div>
            </div>
          </div>
           <div class="columns mb-2 lg:mb-10">
            <div class="field column  flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">City</label>
             <div class="control w-full lg:w-3/4">
                 <input class="input" :class="{ 'is-danger': errors.city }" type="text" 
                        v-model="form.city" autofocus="">
                         <p class="help is-danger" v-if="errors.city">
                    {{ errors.city[0] }}
                  </p>
             </div>
        
          </div>
        </div>
        <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">District</label>
            <div class="control  w-full lg:w-3/4">
                <input class="input" :class="{ 'is-danger': errors.district }" type="text" 
                        v-model="form.district" autofocus="">
                        <p class="help is-danger" v-if="errors.district">
                    {{ errors.district[0] }}
                  </p>
                 </div>
              
          </div>
        </div>
            <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">State</label>
            <div class="control  w-full lg:w-3/4">
                <input class="input" :class="{ 'is-danger': errors.state }" type="text" 
                        v-model="form.state" autofocus="">
                        <p class="help is-danger" v-if="errors.state">
                          {{ errors.state[0] }}
                        </p>
                 </div>
              
          </div>
        </div>
        <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Country</label>
            <div class="control  w-full lg:w-3/4">
                <div class="">
                       <select @change="changed"  class="w-full bg-grey-lighter my-2 p-4 outline-none" 
                       v-model="form.country_id">
                        <option value="">Please select</option>
                        <option :value="country.id" v-for="country in countries" :key="country.id">
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                 <p class="help is-danger" v-if="errors.country_id">
                    {{ errors.country_id[0] }}
                  </p>
                 </div>
             
          </div>
        </div>
        <div class="columns mb-2 lg:mb-10">
          <div class="field column flex flex-col lg:flex-row">
            <label class="label w-full lg:w-1/4">Delivered Within days</label>
            <div class="control  w-full lg:w-3/4">
                <input class="input" :class="{ 'is-danger': errors.delivered }" type="number" 
                        v-model="form.delivered" autofocus="">
                         <p class="help is-danger" v-if="errors.delivered">
                    {{ errors.delivered[0] }}
                  </p>
                 </div>
             
          </div>
        </div>

       <!--  <div class="columns mt-2 lg:mt-0 mb-2 lg:mb-10">
           <div class="field column  flex">
            <label class="label w-1/4">Status</label>
                  <div class="onoffswitch">
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" v-model="form.status" :class="{ 'is-danger': errors.status }">
                    <label class="onoffswitch-label" for="myonoffswitch">
                        <div class="onoffswitch-inner"></div>
                        <div class="onoffswitch-switch"></div>
                    </label>
                  </div>
            
                     <p class="help is-danger" v-if="errors.status">
                        {{ errors.status[0] }}
                    </p>
          </div>
         </div> -->
          
          
        
    
        </div>
     
       </div>
          <div class="field">
            <p class="control">
              <button class="button is-info">
                Add Pincode
              </button>
              <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
            </p>
          </div>
   </form>
 </div>
</template>

<script>
 import CountryDropdown from '@/components/form/CountryDropdown'

  export default {
    props:['pincode_id'],
    data () {
      return {
        form: {
          postofficename: '',
          pincode: '',
          city: '',
          district: '',
          state:'',
          country_id:'',
          seller_id: this.$auth.user.id,
          delivered:'',
          status:true
       },
       countries:[],
       pincodeid:this.$route.params.pincode_id,
       success:null
                
      }
    },
 components: {
    CountryDropdown
  },

    methods: {

      changed ($event) {
        this.$emit('input', $event.target.value)
      },
    
      async store () {
        let formData = new FormData();
        formData.append('postofficename',this.form.postofficename);
        formData.append('pincode',this.form.pincode);
        formData.append('city',this.form.city);
        formData.append('district',this.form.district);
        formData.append('state',this.form.state);
        formData.append('country_id',this.form.country_id);
        formData.append('seller_id',this.form.seller_id);
        formData.append('delivered',this.form.delivered);
        if(this.form.status===true)
          formData.append('status',1);
        else
          formData.append('status',0);
       
        let responses = await this.$axios.$post('settings/editpincode/' + 
                                                                this.pincodeid,formData)
                                          .then((response) => {

                                              if(response.message!=="Updated Successfully"){
                                              this.success=response.message;
                                              
                                           }
                                           else{
                                              this.form="";

                                              //console.log(response.data);
                                              this.$nuxt.$emit('savemessage',response.message);
                                             this.$router.replace({
                                                name: 'setting',
                                               });
                                              
                                           }
                                          }).catch((error) => {
                                            
                                              console.log(error);
                                          });
                  

      
      },
      async getpincode () {
       
        let response = await this.$axios.$get('settings/displaypincode')
            
        this.pincodelists = response.data;
      },
      async editpincodelist () {
       
        let response = await this.$axios.$get('settings/pincodelist/' + this.pincodeid)
             
        this.form = response;
      },
       async getCountries () {
        let response = await this.$axios.$get('countries')
        this.countries = response.data
      },
    },
    created () {
      this.editpincodelist()
      this.getCountries()
    },
  
  }
</script>