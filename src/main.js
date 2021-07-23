// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push(
    {
      rel: 'stylesheet',
      href: 'https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css',
    }
  );

  head.script.push({
    type: 'text/javascript',
    src: 'https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js',
    body: true,
    id: 'snipcart',
    'data-api-key': 'ZTAzMjE1ZDctZGNhYy00N2YxLTlmYWMtZWZhMDM2ZTY4ZWRkNjM3MjI0OTU2OTMyMDc3OTY4',
  });
  
  // Set default layout as a global component


  Vue.component('Layout', DefaultLayout)

  
}