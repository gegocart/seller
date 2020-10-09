<template>
 <!--  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          cart
        </nuxt-link>
        <div class="navbar-burger burger" data-target="nav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> -->

 <!--      <div class="navbar-menu">
        <template v-for="category in categories">
          <template v-if="category.children.length">
            <div class="navbar-item is-hoverable has-dropdown" :key="category.slug">
              <nuxt-link
                :to="{ name: 'categories-slug', params: { slug: category.slug } }"
                class="navbar-link">
             
                {{ category.name }}
              </nuxt-link>

              <div class="navbar-dropdown">
                <nuxt-link
                  :to="{ name: 'categories-slug', params: { slug: child.slug } }"
                  class="navbar-item"
                  v-for="child in category.children"
                  :key="child.slug"
                >
                  {{ child.name }}
                </nuxt-link>
              </div>
            </div>
          </template>
          <template v-else>
            <nuxt-link :to="{ name: 'categories-slug', params: { slug: category.slug } }" :key="category.slug" class="navbar-item">
              {{ category.name }}
            </nuxt-link>
          </template>
        </template>
      </div> -->

     <!--  <div id="nav" class="navbar-menu">
        <div class="navbar-end">
          <template v-if="!$auth.loggedIn">
            <nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item">
              Sign in
            </nuxt-link>
          </template>
          <template v-if="!$auth.loggedIn">
            <nuxt-link :to="{ name: 'auth-sellerregister'}" class="navbar-item">
              Seller SignUp
            </nuxt-link>
          </template>
           <template v-if="!$auth.loggedIn">
            <nuxt-link :to="{ name: 'auth-userregister'}" class="navbar-item">
              User SignUp
            </nuxt-link>
          </template>
          <template v-else >
            <a href="#" class="navbar-item">
              {{ $auth.user.name }} 
            </a>

            <nuxt-link :to="{name: 'seller-displaycategory'}" class="navbar-item">
              Category
            </nuxt-link>
             <nuxt-link :to="{name: 'seller-displayattributeset'}" class="navbar-item">
              Attributeset
            </nuxt-link>
             <nuxt-link :to="{name: 'seller-displayattributes'}" class="navbar-item">
              Attributes
            </nuxt-link>
            <nuxt-link :to="{name: 'products'}" class="navbar-item">
               Products
            </nuxt-link>
            <nuxt-link :to="{name: 'products-listproduct'}" class="navbar-item">
              List Products
            </nuxt-link>
             <nuxt-link :to="{name: 'products-productvariation'}" class="navbar-item">
               Products Variations
            </nuxt-link>
            <nuxt-link :to="{name: 'stores'}" class="navbar-item">
              Add Stores
            </nuxt-link>
            <nuxt-link :to="{ name: 'orders' }" class="navbar-item">
              Orders
            </nuxt-link>
            <nuxt-link :to="{ name: 'cart' }" class="navbar-item">
              Cart ({{ cartCount }})
            </nuxt-link>
            
          </template>
        </div>

      </div>
    </div>
  </nav> -->
  
  <header class="mb-24 lg:mb-0">

<div class="flex flex-col md:flex-row lg:flex-row border-b bg-white px-3 py-1 mainbar shadow">
  <div class="flex flex-1 w-full justify-between">
   <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <img src="/gegocart-logo.png" class="w-auto h-12">
        </nuxt-link>
<!--  <div class="block lg:hidden ">
    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div> -->
  <portal-target name="toggle"></portal-target>
  </div>
 
  <div class="w-full flex-1 items-center justify-start lg:justify-end md:justify-end flex">
  
  <div class="mx-2">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 478.703 478.703" style="color:#8699aa;" xml:space="preserve" class="w-5 h-5 fill-current">
<g>
  <g>
    <path d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8
      c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2
      c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8
      c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1
      c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8
      c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5
      l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6
      c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1
      l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1
      C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9
      c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8
      c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42
      c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8
      c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8
      c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2
      c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42
      c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6
      c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1
      c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8
      c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7
      c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"/>
    <path d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001
      z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"/>
  </g>
</g></svg>
  </div>
  <div class="mx-2">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 512 512" style="color:#8699aa;" xml:space="preserve" class="fill-current  w-5 h-5">
<g>
  <g>
    <path d="M467.819,431.851l-36.651-61.056c-16.896-28.181-25.835-60.437-25.835-93.312V224
      c0-82.325-67.008-149.333-149.333-149.333S106.667,141.675,106.667,224v53.483c0,32.875-8.939,65.131-25.835,93.312
      l-36.651,61.056c-1.984,3.285-2.027,7.403-0.149,10.731c1.899,3.349,5.461,5.419,9.301,5.419h405.333
      c3.84,0,7.403-2.069,9.301-5.419C469.845,439.253,469.803,435.136,467.819,431.851z M72.171,426.667l26.944-44.907
      C118.016,350.272,128,314.219,128,277.483V224c0-70.592,57.408-128,128-128s128,57.408,128,128v53.483
      c0,36.736,9.984,72.789,28.864,104.277l26.965,44.907H72.171z"/>
  </g>
</g>
<g>
  <g>
    <path d="M256,0c-23.531,0-42.667,19.136-42.667,42.667v42.667C213.333,91.221,218.112,96,224,96s10.667-4.779,10.667-10.667
      V42.667c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333v42.667C277.333,91.221,282.112,96,288,96
      s10.667-4.779,10.667-10.667V42.667C298.667,19.136,279.531,0,256,0z"/>
  </g>
</g>
<g>
  <g>
    <path d="M302.165,431.936c-3.008-5.077-9.515-6.741-14.613-3.819c-5.099,2.987-6.805,9.536-3.819,14.613
      c2.773,4.715,4.288,10.368,4.288,15.936c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32c0-5.568,1.515-11.221,4.288-15.936
      c2.965-5.099,1.259-11.627-3.819-14.613c-5.141-2.923-11.627-1.259-14.613,3.819c-4.715,8.064-7.211,17.301-7.211,26.731
      C202.667,488.085,226.581,512,256,512s53.333-23.915,53.376-53.333C309.376,449.237,306.88,440,302.165,431.936z"/>
  </g>
</g></svg>
  </div>
  <div class="mx-2">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 250.313 250.313" style="color:#8699aa;width:35px;height:35px;padding:10px;" xml:space="preserve" class="fill-current  bg-custom rounded-full">
<g id="Search">
  <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
    c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
    c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
    c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
    c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
    C170.146,140.044,140.043,170.146,102.911,170.146z"/>
</g></svg>
  </div>
 
    <div class="mx-2 profile-click" @click="settings()">
    <a href="#" class="text-black">{{ $auth.user.name }}</a>
        <div class="user-dtl rounded">
          <ul class="list-reset shadow-md leading-normal">
              <li>
                <a href="#" class="dropdown-toggle text-sm  border-b no-underline text-black flex px-2 py-1" data-toggle="dropdown" role="button" aria-expanded="false">
                <img src="~/assets/img/profile.jpg" class="h-8 h-8 rounded-full">
                <span class="m-2 font-bold">{{ $auth.user.name }}</span> <!-- <span class="caret"></span> -->
                </a> 
              </li>
              <li>
                <a href="#" class="text-sm  no-underline text-black flex px-3 py-2"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class="w-4 h-4"><g><g><path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148       C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962
                c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216
                h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40
                c59.551,0,108,48.448,108,108S315.551,256,256,256z"/>
                </g>
                </g>
                </svg>
                <span class="whitespace-no-wrap mx-2">Change Avatar</span>
              </a> 
              </li>
              <li>
                   <nuxt-link :to="{ name: 'profile-password'}" class="text-sm  no-underline text-black flex px-3 py-2">
                 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" class="w-4 h-4">
                <g>
                <g>
                <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
                s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
                S235.019,444.2,227.619,444.2z"/>
                <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
                s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
                C455.319,239.9,455.319,231.3,450.019,226.1z"/>
                </g>
                </g></svg>
                <span class="mx-2" >Change Password</span>
        
            </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ name: 'profile-addshippingaddress'}" class="text-sm  no-underline text-black flex px-3 py-2">
                 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" class="w-4 h-4">
                <g>
                <g>
                <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
                s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
                S235.019,444.2,227.619,444.2z"/>
                <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
                s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
                C455.319,239.9,455.319,231.3,450.019,226.1z"/>
                </g>
                </g></svg>
                <span class="mx-2" >Shipping Address</span>
        
            </nuxt-link>
            </li>

              <li>
                <a href="#" @click="logout" class="text-sm  no-underline text-black flex px-3 py-2">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 471.2 471.2" style="enable-background:new 0 0 471.2 471.2;" xml:space="preserve" class="w-4 h-4">
                <g>
                <g>
                <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
                s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
                S235.019,444.2,227.619,444.2z"/>
                <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
                s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
                C455.319,239.9,455.319,231.3,450.019,226.1z"/>
                </g>
                </g></svg>
                <span class="mx-2" >Logout</span>
                </a> 
              </li>
          </ul>
        </div>
    </div>
   <!--  <div class="mx-2">
      <a href="#" @click="logout">logout</a>
    </div> -->
    <!-- <div>
       <img src="~/assets/img/profile.jpg" class="h-8 h-8 rounded-full">
    </div> -->
  </div>
</div>

</header>

  
</template>

<script>

  export default {
    middleware: [
      'redirectIfGuest'
    ],
     methods: {
        
          async logout() {
          
              this.$auth.logout();
       
           },
           settings(){
                $(".user-dtl").toggle();
           }
         
    },
    
  }
</script>

  




