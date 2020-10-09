<template>
 <div id="app">
      <div class="welcome-wrapper lg:w-1/3 md:w-/1-2 w-full mx-auto card justify-center text-center">
        <h1 class="title is-4">Welcome to Gegocart - Seller Control Panel </h1>
       <div class="">
          <nuxt-link :to="{ name: 'auth-signin' }" class="button is-info">Login to Continue</nuxt-link>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
      layout: 'blank',
      middleware: [
        'redirectIfAuthenticated'
      ],  
  }
</script>
