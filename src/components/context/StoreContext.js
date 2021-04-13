import React from 'react';
import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: 'git-bike.myshopify.com/',
  storefrontAccessToken: '6b0883c97db688ba0ae7eb8fa9ac6116',
});

export const StoreContext = React.createContext({
  client,
});
