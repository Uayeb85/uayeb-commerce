// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Uayeb-Commerce',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      
      // These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "products/**/*.md",
        typeName: "Product",
        refs: {
          // Create a Tag content type and its nodes automatically.
          brands: {
            typeName: 'Brand',
            create: true
          }
        },
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    
  ],
  templates: {
    Product:[
      {
        path:"/products/:title",
        component:"./src/templates/Product.vue",
      }
    ],
    Brand:[
      {
        path:"/brands/:id",
        component:"./src/templates/Brand.vue",
      },
    ],
  },
}

