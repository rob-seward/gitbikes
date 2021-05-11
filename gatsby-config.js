/*import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})*/

require('dotenv').config()


 console.log('got his far');

module.exports = {
  siteMetadata: {
    title: 'git-bike',
    siteUrl: `https://gatsby.gitbikes`,
    description: `the dopest bikes in the hood`,
    twitter: `@gitbikes`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-shopify-experimental',
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        downloadImages: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },
    {
      resolve: 'gatsby-source-shopify-storefront',
      options: {
        // Your Shopify instance name (e.g. 'shopify-store-name',
        // if your shopify shop is located at https://shopify-store-name.myshopify.com/)
        siteName: process.env.GATSBY_SHOPIFY_STORE_URL,
        // Your Shopify Storefront API access token
        // generated in the private apps section of your store admin.
        // Refer to Shopify's Storefront API Documentation for more information
        // https://help.shopify.com/api/storefront-api/getting-started
        accessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
  ],
};
