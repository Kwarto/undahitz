import React, { useState } from "react";
import styled from "styled-components";
import smmImg from "../../assets/images/smm.png";
import swdImg from "../../assets/images/swd.jpg";
import seoImg from "../../assets/images/seo.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Services = () => {
  const [isSmm, setIsSmm] = useState(true);
  const [isSwd, setIsSwd] = useState(false);
  const [isSeo, setIsSeo] = useState(false);
  return (
    <ServicesContentWrapper>
      <article className="top">
        {isSmm && (
          <div className="detail smm">
            <div className="top-box">
              <h2>Digital Marketing Suite</h2>
              <p>
                If you're looking to boost your online presence and promote your
                business effectively, we offer a wide range of boosting and
                promotion services. From social media campaigns to content
                marketing and more, we're here to help you reach your target
                audience and achieve your business goals.
              </p>
              <div className="socials">
                <div className="icoBox">
                  <FaFacebook />
                </div>
                <div className="icoBox">
                  <FaInstagram />
                </div>
                <div className="icoBox">
                  <FaLinkedin />
                </div>
                <div className="icoBox">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="top-box mid">
              <img src={smmImg} alt="social-media-marketing" />
            </div>
          </div>
        )}
        {isSwd && (
          <div className="detail swd">
            <div className="top-box">
              <h2>Software Development - SWD</h2>
              <p>
                If you're in need of software development and maintenance
                services, we've got you covered. Our skilled team is equipped to
                handle all your software needs, from development to maintenance
                and support. Let us know how we can assist you in achieving your
                software goals.
              </p>
              <div className="socials">
                <div className="icoBox">
                  <FaFacebook />
                </div>
                <div className="icoBox">
                  <FaInstagram />
                </div>
                <div className="icoBox">
                  <FaLinkedin />
                </div>
                <div className="icoBox">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="top-box mid">
              <img src={swdImg} alt="social-media-marketing" />
            </div>
          </div>
        )}
        {isSeo && (
          <div className="detail seo">
            <div className="top-box">
              <h2>SEO / SMM</h2>
              <p>
                {" "}
                Are you looking to improve your online visibility and drive more
                traffic to your website? Our SMM services can help you achieve
                just that. Let us know if you're interested in boosting your
                search engine rankings and increasing your social media
                presence.
              </p>
              <div className="socials">
                <div className="icoBox">
                  <FaFacebook />
                </div>
                <div className="icoBox">
                  <FaInstagram />
                </div>
                <div className="icoBox">
                  <FaLinkedin />
                </div>
                <div className="icoBox">
                  <FaTwitter />
                </div>
              </div>
              <div
                className="dgms"
                onClick={() => {
                  setIsSwd(false);
                  setIsSmm(true);
                  setIsSeo(false);
                }}
              >
                Digital Marketing Suite
              </div>
            </div>
            <div className="top-box mid">
              <img src={seoImg} alt="social-media-marketing" />
            </div>
          </div>
        )}
        <div className="top-box">
          <h2>Other Services</h2>
          <div
            className="ls"
            onClick={() => {
              setIsSwd(true);
              setIsSmm(false);
              setIsSeo(false);
            }}
          >
            <img src={swdImg} alt="software development" className="swd" />
          </div>
          <div
            className="ls"
            onClick={() => {
              setIsSwd(false);
              setIsSmm(false);
              setIsSeo(true);
            }}
          >
            <img src={seoImg} alt="search engine optimization" />
          </div>
        </div>
      </article>
    </ServicesContentWrapper>
  );
};

const ServicesContentWrapper = styled.section`
  width: 90%;
  height: 85vh;
  background: var(--mainBg);
  box-shadow: 0 30px 40px var(--shadowBg);
  border-radius: 10px;

  .top {
    width: 100%;
    height: max-content;
    border-radius: 10px 10px 0 0;
    display: grid;
    grid-template-columns: 70% 29%;
    gap: 1%;
    padding: 10px;

    .detail {
      width: 100%;
      display: grid;
      grid-template-columns: 42% 57%;
      gap: 1%;
    }

    .top-box {
      width: 100%;
      padding: 10px;
      background: linear-gradient(var(--actBg), var(--btnBgVariant));
      border-radius: 10px;
      color: var(--mainBgVariant);
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 18px;

        text-align: justify;
        line-height: 1.7;

        padding: 10px 0;
      }

      .socials {
        display: flex;
        align-items: center;
        justify-content: space-around;
        transform: translateY(1rem);
        .icoBox {
          width: 60px;
          aspect-ratio: 1/1;
          background: var(--actBg);
          box-shadow: 0 20px 40px var(--shadowBg);
          color: var(--mainBg);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          font-size: 1.7rem;
          transition: all 2s ease;

          &:hover {
            background: var(--mainBg);
            color: var(--actBg);
          }
        }
      }

      .ls {
        background: var(--mainBg);
        border-radius: 0.5rem;
        box-shadow: 0 1rem 0.5rem var(--shadowBg);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        height: 43%;
        p {
          color: var(--btnBgVariant);
          font-size: 1.2rem;
          font-weight: bold;
        }
        margin: 10px 0;
        img {
          width: 95%;
          border-radius: inherit;
          height: max-content;
        }
        .swd {
          height: 93%;
        }
      }
      .dgms {
        background: var(--mainBg);
        box-shadow: 0 20px 0.5rem var(--shadowBg);
        border-radius: 50px;
        color: var(--btnBg);
        cursor: pointer;
        font-weight: 600;
        margin: 1rem auto;
        padding: 12px;
        width: 90%;
        transform: translateY(1.2rem);
        transition: all 1s ease-in-out;
        text-align: center;

        &:active {
          transform: scale(0.95);
        }
      }
    }

    .mid {
      background: transparent;
      border-radius: 10px;
      box-shadow: 0 20px 40px var(--shadowBg);
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 95%;
        aspect-ratio: 1/1;
        border-radius: inherit;
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: max-content;
    width: 98%;
    .top {
      grid-template-columns: 100%;
      .detail {
        display: flex;
      }
      .mid {
        width: 100%;
        background: red;
        padding: 0;
        img {
          width: 100%;
          height: max-content;
        }
      }
      .top-box {
        height: 100%;
        p {
          font-size: 16px;
        }
        .ls {
          padding: 0;
          height: 46%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .dgms {
          transform: translateY(0);
          margin: 0 auto;
        }
      }
    }
  }
`;
export default Services;
