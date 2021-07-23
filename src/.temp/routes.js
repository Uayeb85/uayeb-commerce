const c1 = () => import(/* webpackChunkName: "page--src--pages--store-vue" */ "/home/uayeb/Escritorio/uayeb-commerce/src/pages/Store.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/home/uayeb/Escritorio/uayeb-commerce/src/templates/Product.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--brand-vue" */ "/home/uayeb/Escritorio/uayeb-commerce/src/templates/Brand.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/uayeb/Escritorio/uayeb-commerce/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/uayeb-commerce/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/uayeb-commerce/src/pages/Index.vue")

export default [
  {
    path: "/store/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/products/:title/",
    component: c2
  },
  {
    path: "/brands/:id/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
