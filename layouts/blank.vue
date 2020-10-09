<template>
  <div class="">
    <div class="px-4 my-3 lg:my-16 md:my-16">
     <div class="w-full flex justify-center">
        <nuxt-link to="/"><img src="/gegocart-logo.png" class="w-auto h-16 mb-2 text-center"></nuxt-link>
      </div>
    </div>
    <TheAlert />
    <nuxt/>
    </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'

  export default {
    components: {
      TheAlert
    }
  }
</script>
