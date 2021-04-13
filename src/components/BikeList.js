import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SingleBikeStyled = styled.div`
  display: grid;
  background: white;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  line-height: 16px;
  color: #000000;
  padding: 0;
  align-items: center;
  .price {
    font-size: 0.8em;
    align-self: start;
  }
`;

const BikeListStyled = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

function SingleBike({ bike }) {
  const image = getImage(bike.images[0].localFile);

  return (
    <SingleBikeStyled>
      <GatsbyImage image={image} alt={bike.handle} />
      <Link to={`bike/${bike.handle}`}>{bike.title}</Link>
      <p className="price">{`£${bike.priceRange.maxVariantPrice.amount}`}</p>
    </SingleBikeStyled>
  );
}

export default function BikeList({ bikes }) {
  return (
    <BikeListStyled>
      {bikes.map((bike) => (
        <SingleBike bike={bike} />
      ))}
    </BikeListStyled>
  );
}
