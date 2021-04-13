//import dotenv from 'dotenv';

//dotenv.config({ path: '.env' });

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "git-bike-store",
    siteUrl: `https://gatsby.gitbikes`,
    description: `the dopest bikes in the hood`,
    twitter: `@gitbikes`,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "git-bike",
        accessToken: process.env.STOREFRONT_ACCESS_TOKEN,
        verbose: true,
        paginationSize: 9,
        downloadImages: true,
      },
    },
    {
      resolve: 'gatsby-source-shopify-storefront',
      options: {
        // Your Shopify instance name (e.g. 'shopify-store-name',
        // if your shopify shop is located at https://shopify-store-name.myshopify.com/)
        siteName: 'git-bike',
        // Your Shopify Storefront API access token
        // generated in the private apps section of your store admin.
        // Refer to Shopify's Storefront API Documentation for more information
        // https://help.shopify.com/api/storefront-api/getting-started
        accessToken: process.env.STOREFRONT_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
  ],
};
