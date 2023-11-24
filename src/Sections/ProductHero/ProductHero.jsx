import React from "react";
import styled from "styled-components";
import PheroImg from "../../assets/images/productBanner.jpg";
const ProductHero = () => {
  return (
    <ProductHeroWrapper>
      <h1>Services Undahitz Offer</h1>
      <p>
        Undahitz blog offers affordable premium content that caters to music
        enthusiasts on a budget, Despite its affordability, the blog remains
        dedicated to showcasing
      </p>
      <h2>Undahitz.com</h2>
    </ProductHeroWrapper>
  );
};

const ProductHeroWrapper = styled.header`
  height: 80vh;
  width: 90%;
  background: linear-gradient(var(--overBg), var(--btnBgVariant)),
    url(${PheroImg});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--mainBg);
  }
  p {
    font-size: 25px;
    width: 70%;
    text-align: center;
    padding: 10px 0;
    line-height: 1.6;
    color: var(--mainBgVariant);
  }
  h2 {
    text-decoration: underline;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--mainBgVariant);
  }
  @media screen and (max-width: 768px) {
    width: 98%;
    p {
      width: 90%;
    }
  }
`;
export default ProductHero;
