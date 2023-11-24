import React from "react";
import { styled } from "styled-components";
import unImg2 from "../../assets/images/cta.jpg";
const HeroAbout = ({ setIsWhy, setIsMission, setIsVision }) => {
  return (
    <AboutPageHeroWrapper>
      <LeftContent>
        <h1>About Us</h1>
        <p>
          Undahitz blog offers affordable premium content that caters to music
          enthusiasts on a budget, Despite its affordability, the blog remains
          dedicated to showcasing
        </p>
        <div className="abt">
          <div
            className="abtBox"
            onClick={() => {
              setIsWhy(true);
              setIsMission(false);
              setIsVision(false);
            }}
          >
            <h2>Why Us</h2>
          </div>
          <div
            className="abtBox"
            onClick={() => {
              setIsMission(true);
              setIsWhy(false);
              setIsVision(false);
            }}
          >
            <h2>Our Mission</h2>
          </div>
          <div
            className="abtBox"
            onClick={() => {
              setIsVision(true);
              setIsWhy(false);
              setIsMission(false);
            }}
          >
            <h2>Our Vision</h2>
          </div>
        </div>
      </LeftContent>
      <RightContent>
        <div className="imgBox">
          <img src={unImg2} alt="" />
        </div>
      </RightContent>
    </AboutPageHeroWrapper>
  );
};

const AboutPageHeroWrapper = styled.header`
  width: 90%;
  background: linear-gradient(138deg, var(--btnBgVariant), var(--actBg));
  border-radius: 10px;
  box-shadow: 0 30px 40px var(--shadowBg);
  height: 90vh;
  margin: 0 auto;
  padding: 15px;
  display: grid;
  grid-template-columns: 64% 35%;
  place-items: center;
  gap: 1%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 98%;
    height: 80vh;
  }
`;

const LeftContent = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: var(--mainBg);
    font-size: 2.5rem;
  }
  p {
    color: var(--mainBgVariant);
    font-size: 20px;
    line-height: 1.6;
    width: 80%;
    padding: 12px 0;
  }

  .abt {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(1rem);
    gap: 1rem;
    height: 35%;

    .abtBox {
      width: 14rem;
      height: 95%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--mainBg);
      border-radius: 10px;
      box-shadow: 0 0 20px var(--shadowBg);
      cursor: pointer;
      transition: all 2s ease;

      h2 {
        font-size: 1.8rem;
        font-weight: bolder;
        color: var(--heroBg1);
      }

      &:hover {
        transform: scale(0.95);
      }
    }
  }
`;

const RightContent = styled.article`
  background: var(--mainBgVariant);
  box-shadow: 0 50px 40px var(--shadowBg), 0 1rem 0.5rem var(--overBg);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90%;
  .imgBox {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default HeroAbout;
