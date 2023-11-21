import React from "react";
import styled from "styled-components";
import { Footer, NavBar, Newsletter, Services } from "../../components/comp";
import { ProductHero } from "../../Sections";

const Products = () => {
  return (
    <ProductsWrapper>
      <NavBar />
      <ProductHero />
      <Services />
      <Newsletter />
      <Footer />
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.section`
  width: 100%;
  background: var(--mainBgVariant);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem 0;
  height: 100%;
  padding: 20px 0;
`;

export default Products;
