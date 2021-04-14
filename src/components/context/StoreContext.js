import React from 'react';
import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: 'git-bike.myshopify.com',
  storefrontAccessToken: process.env.STOREFRONT_ACCESS_TOKEN,
});

export const StoreContext = React.createContext({
  client,
});
