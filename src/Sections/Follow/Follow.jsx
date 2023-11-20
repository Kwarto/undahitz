import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Follow = ({ song }) => {
  return (
    <FollowToFollowWrapper>
      <FollowYardWrapper>
        <div className="art">
          <h2>Show Love To Artist</h2>
          <p>
            Hit the Right Note! Boost Your Music Journey with Follow Back Bliss
            - Connecting Artists and Fans, One Click at a Time
          </p>
          <div className="fBtn">
            <h4>Follow {song.artistName} On Instagram</h4>
            <div className="icoWrap">
              <FaInstagram />
            </div>
          </div>
          <div className="fBtn">
            <h4>Follow {song.artistName} On Facebook</h4>
            <div className="icoWrap">
              <FaFacebook />
            </div>
          </div>
          <div className="fBtn">
            <h4>Follow {song.artistName} On TikTok</h4>
            <div className="icoWrap">
              <FaTiktok />
            </div>
          </div>
          <div className="fBtn">
            <h4>Follow {song.artistName} On X</h4>
            <div className="icoWrap">
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="blog">
          <h2>Support Undahitz</h2>
          <p>
            Elevate Your Musical Radar! Embrace the Underground with Under Hits
            - Your Source for Uncharted Gems and Impeccable Blog Content!
          </p>
          <div className="fBtn">
            <h4>Follow Undahitz On Instagram</h4>
            <div className="icoWrap">
              <FaInstagram />
            </div>
          </div>
          <div className="fBtn">
            <h4>Follow Undahitz On Facebook</h4>
            <div className="icoWrap">
              <FaFacebook />
            </div>
          </div>
          <div className="fBtn">
            <h4>Follow Undahitz On TikTok</h4>
            <div className="icoWrap">
              <FaTiktok />
            </div>
          </div>
          <div className="fBtn">
            <h4>Follow Undahitz On X</h4>
            <div className="icoWrap">
              <FaTwitter />
            </div>
          </div>
        </div>
      </FollowYardWrapper>
    </FollowToFollowWrapper>
  );
};

const FollowToFollowWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--mainBgVariant);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

const FollowYardWrapper = styled.article`
  width: 90%;
  height: 95%;
  background: var(--mainBg);
  border-radius: 10px;
  box-shadow: 0 30px 40px var(--shadowBg), 0 1rem 0.5rem var(--shadowBg);
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 0 1rem;

  div {
    height: 95%;
    width: 100%;
    border-radius: 10px;
    padding: 10px;

    h2 {
      font-size: 1.6rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    p {
      font-size: 1.15rem;
      width: 80%;
      line-height: 1.7;
    }
  }

  .art,
  .blog {
    background: linear-gradient(to top left, var(--btnBg), var(--btnBgVariant));
    color: var(--mainBg);
    .fBtn {
      background: linear-gradient(
        to top left,
        var(--actBg),
        var(--btnBgVariant)
      );
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
      color: var(--mainBg);
      font-size: 18px;
      font-weight: 800;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      margin: 7px 0px;
      padding: 23px 10px;
      text-align: center;
      transition: all 2s ease-in-out;

      .icoWrap {
        width: 42px;
        height: 42px;
        border-radius: 50px;
        box-shadow: 0 0 10px var(--shadowBg);
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--mainBg);
        color: var(--btnBg);
      }

      :active {
        transform: scale(0.98);
      }
    }
  }
`;

export default Follow;
