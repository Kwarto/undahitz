import React from "react";
import { FaFireAlt } from "react-icons/fa";
import styled from "styled-components";
import rImg from "../../assets/images/enjoy.jpg";
const AllGenres = () => {
  return (
    <AllGenresWrapper id="all-genres">
      <AllGenresGridWrapper>
        <LeftContentWrapper>
          <div className="head">
            <h1>All Genres</h1>
            <FaFireAlt className="fire" />
          </div>
          <div className="genBox">
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
            <div className="genlst">
              <span>Afrobeat</span>
              <div className="count">359</div>
            </div>
          </div>
        </LeftContentWrapper>
        <RightContentWrapper>
          <div className="imgWrap">
            <img src={rImg} alt="banner" />
            <div className="bannerOverlay">
              <div className="capInfo">
                <h1>Undahitz.com</h1>
                <p>
                  Undahitz's main concern is all about providing the underground
                  musicians with affordable, reliable, and highly secure
                  song-streaming Blogspot to aid them in promoting and taking
                  their music career to the next level
                </p>
                <div className="joinBtn">Join Undahitz Community</div>
              </div>
            </div>
          </div>
        </RightContentWrapper>
      </AllGenresGridWrapper>
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
  position: relative;
`;

const LeftContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  position: absolute;
  left: 0;
  width: 30%;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    background: linear-gradient(138deg, var(--btnBgVariant), var(--actBg));
    border-radius: 10px 10px 0 0;
    padding: 0 10px;

    h1,
    .fire {
      font-size: 22px;
      color: var(--mainBg);
    }
  }

  .genBox {
    width: 100%;
    height: calc(100% - 10%);
    background: var(--mainBg);
    box-shadow: 0 30px 40px var(--shadowBg);

    .genlst {
      padding: 14px;
      background: var(--heroBg1);
      border-radius: 0.2rem;
      box-shadow: 0 0 5px var(--overBg);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transform: scale(0.98);
      transition: all 2s ease-in-out;
      margin: 5px 0;

      span {
        color: var(--mainBgVariant);
        font-size: 1.25rem;
        font-weight: 600;
        text-transform: uppercase;
      }

      .count {
        background: var(--mainBg);
        border-radius: 50px;
        color: var(--btnBgVariant);
        font-size: 14px;
        font-weight: 600;
        width: max-content;
        padding: 2px 12px;
      }
      &:hover {
        transform: scale(1);
      }
    }
  }
`;

const RightContentWrapper = styled.div`
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 10px var(--shadowBg);
  width: 70%;
  height: 100%;
  position: absolute;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  .imgWrap {
    width: 95%;
    height: 98%;
    position: relative;
    img {
      width: 100%;
      border-radius: 10px;
    }

    .bannerOverlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--btnBgVariant);
      border-radius: 10px;

      .capInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: var(--mainBg);
        cursor: pointer;
        h1 {
          font-size: 2rem;
          text-decoration: underline;
        }
        p {
          font-size: 22px;
          width: 85%;
          line-height: 1.7;
          padding: 12px 0;
        }
        .joinBtn {
          background: var(--mainBg);
          box-shadow: 0 1rem 0.5rem var(--shadowBg);
          border-radius: 50px;
          color: var(--actBg);
          font-size: 18px;
          font-weight: 600;
          padding: 15px 20px;
          outline: 2px solid var(--btnBg);
        }
      }
    }
  }
`;

export default AllGenres;
