import React from "react";
import styled from "styled-components";
import { NavBar } from "../../components/comp";
import { AllGen, Hero } from "../../Sections";

const GenreCategory = () => {
  return (
    <GenreCategoryWrapper>
      <NavBar />
      <Hero />
      <AllGen />
    </GenreCategoryWrapper>
  );
};

const GenreCategoryWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: var(--mainBgVariant);
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default GenreCategory;
