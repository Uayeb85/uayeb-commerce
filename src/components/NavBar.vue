<template>
  <header class="bg-black sm:flex sm:justify-end sm:items-end">
    <div class="flex items-center justify-end px-4 py-4 ">
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen"  type="button" class=" block text-white focus:text-white focus:outline-none hover:text-indigo-800">
          <svg class="h-6 w-6 fill-current"  viewBox="0 0 510 510">
            <path v-if="isOpen" fill-rule="evenodd" d="M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0L256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567c-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567c8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667C514.096,145.416,514.096,131.933,505.755,123.592z"/>
          </svg>
        </button>
      </div> 
    </div>        
      <div :class="isOpen ? 'block' : 'hidden'" class="px-4 pt-2 pb-4 sm:flex text-white"   >
        <g-link to="/" class="mt-1 block px-2 py-1 text-teal-700 font-semibold rounded hover:bg-yellow-500 hover:text-black sm:mt-0 sm:ml-2">Home</g-link>      
        <g-link to="/about/" class="mt-1 block px-2 py-1 text-teal-700 font-semibold rounded hover:bg-yellow-500 hover:text-black  sm:mt-0 sm:ml-2">About</g-link>
        <g-link to="/store/" class="mt-1 block px-2 py-1 text-teal-700 font-semibold rounded hover:bg-yellow-500 hover:text-black  sm:mt-0 sm:ml-2" >Store</g-link>
        <button class="snipcart-customer-signin mt-1 block px-2 py-1 text-teal-700 font-semibold rounded hover:bg-yellow-500 hover:text-black  sm:mt-0 sm:ml-2" >Log in</button>

        <button  class="snipcart-checkout flex md:mt-1" >  
          <svg  version="1.1" width="51" height="30" x="0" y="0" viewBox="0 0 450.391 450.391" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g>
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <g>
                    <path d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02     c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465     c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122     C169.796,411.77,158.1,423.465,143.673,423.465z" fill="#ffffff" data-original="#000000" style="" class=""/>
                    <path d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02     C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122     c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z" fill="#ffffff" data-original="#000000" style="" class=""/>
                    <path d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42     C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004     c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453     c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449     H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988     c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228     c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z" fill="#ffffff" data-original="#000000" style="" class=""/>
                  </g>
                </g>
              </g>
              </g>
            </svg>  <span class="snipcart-items-count text-justify text-xl font-medium"> </span>
        </button>

      </div> 
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      isOpen:false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
