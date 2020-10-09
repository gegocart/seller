<template>
  <div >
    <TheAlert />
    <Navigation />
    <div class="app-body">
    <div class="flex flex-col lg:flex-row md:flex-row">
    <div class="sidebar w-full lg:w-24 md:w-24 h-full bg-sidebar lg:fixed md:fixed">
    <Sidebar />
    </div>
    <div class="w-full  lg:mx-8 md:mx-8 main-content">
    <nuxt/>

    </div>

    </div>
 <!--     <Footer /> -->
     
    </div>
   
  </div>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import Sidebar from '@/layouts/partials/Sidebar'
  import Footer from '@/layouts/partials/Footer'
  import TheAlert from '@/components/globals/TheAlert'

  export default {
    components: {
      Navigation,
      Footer,
      Sidebar,
      TheAlert
    }
  }
</script>


