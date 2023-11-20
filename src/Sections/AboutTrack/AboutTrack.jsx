import React from "react";
import styled from "styled-components";
import genImg from "../../assets/images/afro.jpg";
import relatedImg from "../../assets/images/cta.jpg";
import { IoIosHeadset } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const AboutTrack = ({ song }) => {
  const navigate = useNavigate();
  return (
    <AboutTrackContentWrapper>
      <TrackContentWrapper>
        <OtherTracksByArt>
          <h2>Top Genre</h2>
          <div className="genBox">
            <div className="genreCard">
              <img src={relatedImg} alt="related" />
              <div
                className="overlay"
                onClick={() => {
                  navigate(`/client/category/${song?.genre}`);
                }}
              >
                <h2>AfroBeat</h2>
              </div>
            </div>
            <div className="genreCard">
              <img src={relatedImg} alt="related" />
              <div className="overlay">
                <h2>AfroBeat</h2>
              </div>
            </div>
            <div className="genreCard">
              <img src={relatedImg} alt="related" />
              <div className="overlay">
                <h2>AfroBeat</h2>
              </div>
            </div>
            <div className="genreCard">
              <img src={relatedImg} alt="related" />
              <div className="overlay">
                <h2>AfroBeat</h2>
              </div>
            </div>
            <div className="genreCard">
              <img src={relatedImg} alt="related" />
              <div className="overlay">
                <h2>AfroBeat</h2>
              </div>
            </div>
            <div className="genreCard">
              <img src={relatedImg} alt="related" />
              <div className="overlay">
                <h2>AfroBeat</h2>
              </div>
            </div>
          </div>
        </OtherTracksByArt>
        <GenreAndOthers>
          <h2>Current Track Genre</h2>
          <div className="genBannerYard">
            <div className="genBannerCard">
              <img src={genImg} alt="gen-banner" />
            </div>
            <div className="layer">
              <h3>Get More {song.genre} @Undahitz</h3>
              <div className="go">
                <IoIosHeadset className="set" />
              </div>
            </div>
          </div>
        </GenreAndOthers>
      </TrackContentWrapper>
    </AboutTrackContentWrapper>
  );
};

const AboutTrackContentWrapper = styled.section`
  padding: 30px 0;
  width: 100%;
  height: 100vh;
  background: var(--mainBgVariant);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrackContentWrapper = styled.article`
  background: var(--mainBg);
  height: 100%;
  width: 90%;
  box-shadow: 0 1rem 0.5rem var(--shadowBg), 0 30px 40px var(--shadowBg);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 64% 35%;
  gap: 1%;
`;

const OtherTracksByArt = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  h2 {
    color: var(--btnBgVariant);
    font-size: 1.7rem;
    text-transform: uppercase;
  }

  .genBox {
    width: 100%;
    border-radius: 0.5rem;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 1rem;
    cursor: pointer;
    .genreCard {
      width: 220px;
      background: var(--actBg);
      border-radius: 10px;
      box-shadow: 0 40px 30px var(--shadowBg);
      position: relative;
      img {
        width: 100%;
        border-radius: inherit;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 10px;
        background: var(--overBg);
        visibility: hidden;
        opacity: 0;
        transition: all 2s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;

        h2 {
          color: var(--mainBg);
          font-size: 1.7rem;
          font-weight: 600;
          text-transform: uppercase;
        }
      }

      &:hover {
        .overlay {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;

const GenreAndOthers = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  h2 {
    color: var(--btnBgVariant);
    font-size: 1.7rem;
    text-transform: uppercase;
  }
  .genBannerYard {
    width: 100%;
    height: 90%;
    padding: 10px;
    box-shadow: 0 30px 40px var(--shadowBg);
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    .genBannerCard {
      width: 100%;
      aspect-ratio: 1/1;
      border-radius: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1px;

      img {
        width: 100%;
        height: min-content;
        border-radius: 10px 10px 0 0;
      }
    }

    .layer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 1rem;
      background: linear-gradient(138deg, var(--btnBgVariant), var(--actBg));
      border-radius: 0 0 10px 10px;
      box-shadow: 0 1rem 0.5rem var(--shadowBg);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      width: 95%;
      margin: 0 auto;
      padding: 0 5px;
      h3 {
        color: var(--mainBg);
        font-weight: 600;
        font-size: 18px;
        text-transform: uppercase;
      }

      .go {
        width: 50px;
        aspect-ratio: 1/1;
        background: var(--mainBg);
        border-radius: 50px;
        box-shadow: 0 0 10px var(--btnBgVariant);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: Pulse alternate-reverse 1s infinite;
        transition: all 2s ease-in-out;
        &:hover {
          background: var(--actBg);
          color: var(--mainBg);
        }

        @keyframes Pulse {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .set {
          font-size: 25px;
          color: var(--actBg);

          &:hover {
            color: var(--mainBg);
            transform: scale(0.9);
          }
        }
      }
    }
  }
  /* 0550938445 */
`;

export default AboutTrack;
