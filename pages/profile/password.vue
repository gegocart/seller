<template>
	<div class="container mx-auto">
      <changepassword/>
	</div>
</template>
<script>
 import changepassword from '@/components/changepassword/ChangePassword'
	export default {

      data(){
    return {
               
      }

    },
     middleware: [
          'redirectIfGuest'
      ],
    components: {
      changepassword
    },
	}
</script>
