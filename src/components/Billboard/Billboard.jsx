import React from "react";
import styled from "styled-components";
import banImg from "../../assets/images/banner.jpg";
import { FaBookReader } from "react-icons/fa";
const Billboard = () => {
  return (
    <BillBoardWrapper>
      <LeftContent>
        <img src={banImg} alt="banner" />
      </LeftContent>
      <RightContent>
        <div className="flag">Billboard</div>
        <h2>Discover & Enjoy Your Favorite Under Music Here</h2>
        <p>
          Unearth the Spectacular Soundscapes: Dive into the Depths of Undahitz,
          Your Gateway to Underground Music Trends!
        </p>
        <div className="btnArea">
          <div className="read">
            <FaBookReader />
          </div>
          <span>Read More</span>
        </div>
      </RightContent>
    </BillBoardWrapper>
  );
};

const BillBoardWrapper = styled.section`
  height: 95%;
  width: 90%;
  margin: 1.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LeftContent = styled.article`
  width: 55%;
  height: 100%;
  img {
    cursor: pointer;
    width: 100%;
    border-radius: 10px;
  }
`;

const RightContent = styled.article`
  width: calc(100% - 55%);
  height: 75%;
  background: var(--mainBg);
  transform: translate(-5px, -0.5rem);
  border-radius: 0.5rem;
  box-shadow: 0 30px 40px var(--shadowBg);
  padding: 10px;
  .flag {
    background: var(--btnBg);
    border-radius: 50px;
    color: var(--mainBg);
    padding: 5px;
    width: 20%;
    text-align: center;
    font-size: 17px;
  }
  h2 {
    font-size: 2.2rem;
    padding: 20px 0;
  }
  p {
    font-size: 22px;
    line-height: 1.7;
    padding-bottom: 10px;
  }

  .btnArea {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin: 2% 0;
    cursor: pointer;
    width: max-content;
    .read {
      width: 40px;
      aspect-ratio: 1/1;
      background: var(--btnBg);
      border-radius: 50px;
      box-shadow: 0 30px 40px var(--shadowBg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color: var(--mainBg);
    }
    span {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export default Billboard;
