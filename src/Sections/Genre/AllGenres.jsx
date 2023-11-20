import React from "react";
import styled from "styled-components";

const AllGenres = () => {
  return (
    <AllGenresWrapper>
      <AllGenresGridWrapper></AllGenresGridWrapper>
    </AllGenresWrapper>
  );
};

const AllGenresWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--mainBgVariant);
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AllGenresGridWrapper = styled.article`
  width: 90%;
  height: 98%;
  background: var(--mainBg);
  border-radius: 10px;
`;

export default AllGenres;
