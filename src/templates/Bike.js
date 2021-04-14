import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
//import Client from 'shopify-buy';
import { StoreContext } from '../components/context/StoreContext';

const SingleBikeStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const LeftSideImagesStyled = styled.div`
  display: grid;
  padding-left: 50px;
  padding-right: 50px;
  img {
    border-style: 1px solid black;
  }
`;

const FeatureImage = styled.div`
  display: grid;
  grid-column: span 2;
  padding-top: 75px;
  padding: 50px;
  height: fit-content;
`;

const RightSideSpecs = styled.div`
  display: grid;
  line-height: 1.2;
  .cart--button {
    border: none;
    height: fit-content;
    background-color: #ebe9eb;
    color: white;
    width: 30%;
    margin: 0;
    padding: 0.2rem;

    text-transform: uppercase;
    font-size: 0.7em;
    border-radius: 2px;
  }
`;

export default function SingleBikePage({ data: { bike } }) {
  /// /////// Here' the shopify-buy clinet ////////////////////////////////////////////////////////////
  const oneBike = bike.nodes[0];
  const { client } = useContext(StoreContext);
  const addToCart = async (e) => {
    const newCheckout = await client.checkout.create();
    // Not the variant ID
    // Shopify__ProductVariant__Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yOTQxNDM3NTUyMjQwMQ==
    const lineItems = [
      {
        variantId: oneBike.variants[0].id.replace(
          'Shopify__ProductVariant__',
          ''
        ),
        quantity: 1,
      },
    ];
    const addItems = await client.checkout.addLineItems(
      newCheckout.id,
      lineItems
    );
    // console.log('addItems', addItems.webUrl);
    window.open(addItems.webUrl, '_blank');
  };

  /// /////////////////////////////////////////////////////////////////////////////////////////////////////
  /// /////////////////////////////////////////////////////////////////////////////////////////////////////

  const allImages = oneBike.images[0].localFile;
  console.log(allImages);

  const featureImage = getImage(oneBike.images[0].localFile);
  const bImage = getImage(oneBike.images[1].localFile);
  const cImage = getImage(oneBike.images[2].localFile);
  const dImage = getImage(oneBike.images[3].localFile);
  const eImage = getImage(oneBike.images[4].localFile);

  const price = bike.nodes[0].priceRange.maxVariantPrice.amount;

  return (
    <SingleBikeStyled>
      <LeftSideImagesStyled>
        <GatsbyImage className="bImage" image={bImage} alt={bike.handle} />
        <GatsbyImage className="cImage" image={cImage} alt={bike.handle} />
        <GatsbyImage className="dImage" image={dImage} alt={bike.handle} />
        <GatsbyImage className="eImage" image={eImage} alt={bike.handle} />
      </LeftSideImagesStyled>
      <FeatureImage>
        <GatsbyImage
          className="featureImage"
          image={featureImage}
          alt={bike.handle}
        />
      </FeatureImage>
      <RightSideSpecs>
        <div>
          <h2>{oneBike.title}</h2>
          <p>{`£${price}`}</p>
        </div>
        <button className="cart--button" onClick={(e) => addToCart(e)}>
          ADD TO CART
        </button>
        <p>{oneBike.description}</p>
      </RightSideSpecs>
    </SingleBikeStyled>
  );
}

export const query = graphql`
  query($slug: String!) {
    bike: allShopifyProduct(filter: { handle: { eq: $slug } }) {
      nodes {
        id
        title
        description
        variants {
          id
        }
        priceRange {
          maxVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 300
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
