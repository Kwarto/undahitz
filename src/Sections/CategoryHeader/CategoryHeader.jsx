import React from "react";
import heroImg from "../../assets/images/cat.png";
import styled from "styled-components";
const CategoryHeader = () => {
  return (
    <CategoryHeaderHeroWrapper>
      <HeroContentWrapper>
        <div className="capArea">
          <h1>Enjoy The Best Musical Genres On Undahitz</h1>
          <p>
            Undahitz offers the best selection of musical genres, providing a
            diverse array of options for all listeners to enjoy and explore
            their favorite music.
          </p>
          <div className="expBtn" role="button">
            Explore
          </div>
        </div>
      </HeroContentWrapper>
      <HeroImgWrapper>
        <img src={heroImg} alt="heroBanner" />
      </HeroImgWrapper>
    </CategoryHeaderHeroWrapper>
  );
};

const CategoryHeaderHeroWrapper = styled.section`
  width: 90%;
  height: 80vh;
  background: radial-gradient(var(--heroBg2), var(--heroBg1));
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 1rem;
  margin: 10px 0;
  padding: 0 1rem;
`;

const HeroContentWrapper = styled.article`
  width: 100%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;

  .capArea {
    h1 {
      color: var(--mainBg);
      font-size: 2rem;
      font-weight: 700;
      width: 90%;
      line-height: 1.7;
    }
    p {
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.6;
      color: var(--mainBgVariant);
      padding-bottom: 15px;
    }
  }
  .expBtn {
    background: var(--mainBg);
    width: 25%;
    text-align: center;
    border-radius: 0.5rem;
    box-shadow: 0 10px 0 var(--shadowBg);
    color: var(--actBg);
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const HeroImgWrapper = styled(HeroContentWrapper)``;

export default CategoryHeader;
