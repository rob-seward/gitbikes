import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import styled from 'styled-components';
import { StoreContext } from '../components/context/StoreContext';

import BikeList from '../components/BikeList';

const BikesPageStyles = styled.div``;

export default function BikesPage({ data }) {
  const { client } = useContext(StoreContext);
  console.log(client);
  const bikes = data.bikes.nodes;
  return (
    <BikesPageStyles>
      <BikeList key={bikes.id} bikes={bikes} />
    </BikesPageStyles>
  );
}

export const query = graphql`
  query BikeQuery {
    bikes: allShopifyProduct(filter: { productType: { eq: "BIKE" } }) {
      nodes {
        id
        title
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        shopifyId
        description
        handle
        images {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
