import React from "react";
import styled from "styled-components";
import fBgImg from "../../assets/images/banner.jpg";

const Footer = () => {
  return <FooterWrapper></FooterWrapper>;
};

const FooterWrapper = styled.footer`
  width: 90%;
  background: linear-gradient(var(--btnBgVariant), var(--textBg)),
    url(${fBgImg});
  border-radius: 10px 10px 0 0;
  box-shadow: 0 40px 30px var(--shadowBg);
  height: 50vh;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 98%;
  }
`;

export default Footer;
