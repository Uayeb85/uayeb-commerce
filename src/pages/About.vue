<template>
  <Layout>
    <section class="text-gray-200 body-font bg-pink-400">
      <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <g-image class="object-cover object-center rounded no-desktop" alt="bio" src="https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" />
          <g-image class="object-cover object-center rounded no" alt="bio" src="https://images.unsplash.com/photo-1524010349062-860def6649c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" style="height:500px" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">We're SneackearHeadz
            <br class="hidden lg:inline-block">the more exclusive store in the world
          </h1>
          <p class="mb-8 leading-relaxed">We love sneakers as much as you, that is why we created SneackerHeadz a place where you will find the most exclusive and exotic models in the world..</p>
          <div class="flex justify-center">
           <g-link to="/store/"> <button class="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Store</button> </g-link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>


<style scoped>

@media only screen and (min-width: 0px)  and (max-width: 768px) {


.no{
    display: none;
}

}


@media only screen and (min-width: 769px)  and (max-width: 2900px) {

    .no-desktop{
        display: none;
    }
}
</style>