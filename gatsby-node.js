import path, { resolve } from 'path';

//const path = require('path');

async function trunBikesIntoPages({ graphql, actions }) {
  const bikeTemplate = path.resolve('./src/templates/Bike.js');
  // 2. query all bikes
  const { data } = await graphql(`
    query {
      bikes: allShopifyProduct(filter: { productType: { eq: "BIKE" } }) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `);
  console.log(data);

  // 3. loop over each bike a nd create page
  data.bikes.edges.forEach((bike) => {
    console.log('creating a page for', bike.node.handle);
    actions.createPage({
      // What is the URL for this page
      path: `bikes/bike/${bike.node.handle}`,
      component: bikeTemplate,
      context: {
        rob: 'is cool',
        slug: bike.node.handle,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  
  await Promise.all([
    trunBikesIntoPages(params),
  ])
 
  // Frames page
  // Parts
  // Team member page
}

