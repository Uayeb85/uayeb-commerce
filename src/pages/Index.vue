<template>
  <Layout>
 
    <Hero class="banner" />
    <!-- Seccion productos -->
    <section class="bg-gray-200 pb-10">
      <div class="flex items-center justify-center pt-8 pb-8">
       <h2 class="text-4xl md:text-7xl">New Releases</h2>
      </div>

    <!-- CARD Productos -->
      <section class="text-gray-600 body-font">
        <div class="container p-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full" 
                v-for="edge in $page.allProduct.edges.slice(0, 4)"
                :key="edge.node.id">
              <g-link :to="edge.node.path" 
                      class="block relative h-48 rounded overflow-hidden">
                <g-image alt="ecommerce" class="object-cover object-center w-full h-full block" 
                        :src="edge.node.featuredImage" />
              </g-link>
              <div class="mt-4 ">
              <g-link v-for="brand in edge.node.brands" :to="brand.path" :key="brand.id">  
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{brand.id}}</h3> 
              </g-link>
                <h2 class="text-gray-900 title-font text-lg font-medium">{{edge.node.title}}</h2>
                <p class="mt-1">  ${{edge.node.price}}</p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    <!-- CARD Productos  FIn  -->
    </section>
     <Special />
  </Layout>
</template>

<page-query>
query{
  allProduct (sortBy: "code" , order: DESC){
    edges{
      node{
        title
        featuredImage (height: 200, quality: 80)
        price
        id
        path
        brands{
          id
          path
        }
      }
    }
  }
}
</page-query>


<script>
import Hero from '~/components/Hero.vue'
import Special from '~/components/Special.vue'

export default {
  metaInfo: {
    title: 'Welcome !!'
  },
  components:{
    Hero,
    Special
  }

}
</script>

<style scoped>
.banner{
  height: 50vh;}

.card{
  width: 350px;
}




</style>

