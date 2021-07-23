<template>
    
    <section class="flex flex-col justify-center items-center hero">

            <h1 class="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">SneakerheadZ!</h1>
           <p class="text-white text-xl md:text-blue-500 md:text-2xl mb-8">La crema de la crema</p>

            <div class=" space-x-2">
                <a href="/store/" class="py-3 px-8 bg-green-400 hover:bg-green-300 text-gray-900 rounded-lg hover:shadow-xl transition duration-300">Buy Now</a>
            </div>




</section>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@media only screen and (min-width: 0px)  and (max-width: 768px) {


.hero{
  height:75vh;
  padding-left: 25px;
  background-image: url('https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'); 
  background-size: cover;

}

.boton{
  width: 250px !important;
  padding-left: 25px;
}

}

@media only screen and (min-width: 769px)  and (max-width: 2900px) {


.hero{
  height: 100vh;
  padding-left: 25px;
  background-image: url('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'); 
  background-size: cover;
}


.boton{
  width: 450px !important;
}

}

</style>