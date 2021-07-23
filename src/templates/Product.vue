<template>
    <Layout>

        <section class="text-gray-700 body-font overflow-hidden"> 
                 
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <g-image alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="$page.product.ecommerceImage" />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <g-link v-for="brand in $page.product.brands" :to="brand.path" :key="brand.id">  

                    <h2 class="text-sm title-font text-gray-500 tracking-widest">{{brand.id}}</h2> 
                </g-link>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{$page.product.description}}</h1>
                    <p class="leading-relaxed">{{$page.product.about}}.</p>
                    <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900">$ {{$page.product.price}}</span>
                    <button class="flex 
                                  ml-auto 
                                  text-white 
                                  bg-indigo-500 
                                  border-0  
                                  py-2 px-6 
                                  focus:outline-none 
                                  hover:bg-indigo-600 
                                  rounded
                                  snipcart-add-item"      
                                  :data-item-id="$page.product.id"
                                  :data-item-name="$page.product.title"
                                  :data-item-price="$page.product.price"
                                  :data-item-image="$page.product.ecommerceImage"
                                  :data-item-url="'uayeb-commerce.netlify.app' + $page.product.path"
                                  :data-item-description="$page.product.about"
                                  data-item-has-taxes-included="true"
                                  data-item-custom1-name="Long message"
                                  data-item-custom1-type="textarea">
                                  Buy it </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<page-query>

query ($path: String!){
  product(path: $path){
    title
    id
    price
    description
    brands{
        id
        path
    }
    featuredImage
    about
    path
    ecommerceImage
  }
}

</page-query>