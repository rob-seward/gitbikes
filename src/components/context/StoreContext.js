import React from 'react';

import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,

});

export const StoreContext = React.createContext({
  client,
});
