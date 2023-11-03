import React from "react";
import {
  Billboard,
  BlogContainer,
  NavBar,
  Newsletter,
} from "../../components/comp";
import styled from "styled-components";

const Client = () => {
  return (
    <ClientPageWrapper>
      <NavBar />
      <Billboard />
      <BlogContainer />
      <Newsletter />
    </ClientPageWrapper>
  );
};

const ClientPageWrapper = styled.main`
  background: var(--mainBgVariant);
  width: 100%;
  padding: 30px 0;
`;

export default Client;
