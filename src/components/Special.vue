<template>
    <section class="text-gray-600 body-font bg-green-400">
        <div class="container mx-auto flex p-10 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <g-image class="object-center rounded no-desktop" alt="jordanAir" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80" />

            <g-image class="object-center rounded no" alt="jordanAir" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" style="height:500px" />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Members Only
            </h1>
            <p class="mb-8 leading-relaxed text-justify">
                Things are better when you are a member of our club. Get early and exclusive access to the latest in style and innovation, 
                free shipping, exclusive rewards and more. If you are not a member yet, sign up, it's free.
            </p>
            <div class="flex justify-center">
                <button class="snipcart-customer-signin inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Become a member</button>
            </div>
            </div>
        </div>
    </section>
</template>


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

