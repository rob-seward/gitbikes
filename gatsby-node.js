import path from 'path';

//const path = require('path');

async function trunBikesIntoPages({ graphql, actions }) {
  const bikeTemplate = path.resolve('./src/templates/Bike.js');
  // 2. query all bikes
  const { data } = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
  `);

  console.log(data, 'what the...');
  

  // 3. loop over each bike a nd create page
  data.allShopifyProduct.edges.forEach((bike) => {
    console.log('creating a page for', bike.node.handle);
    actions.createPage({
      // What is the URL for this page
      path: `bikes/bike/${bike.node.handle}`,
      component: bikeTemplate,
      context: {
        rob: 'is cool',
        id: bike.node.id,
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
