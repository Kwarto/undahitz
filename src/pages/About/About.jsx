import React, { useState } from "react";
import styled from "styled-components";
import { HeroAbout } from "../../Sections";
import { Footer, NavBar, Newsletter } from "../../components/comp";

const About = () => {
  const [isWhy, setIsWhy] = useState(true);
  const [isMission, setIsMission] = useState(false);
  const [isVision, setIsVision] = useState(false);
  return (
    <AboutUndahitzContainer>
      <NavBar />
      <HeroAbout
        setIsWhy={setIsWhy}
        setIsMission={setIsMission}
        setIsVision={setIsVision}
      />
      <HeroAboutDetailWrapper>
        {isWhy && (
          <div className="dBox">
            <h1>Why Undahitz</h1>
            <div>
              <h3>Affordability</h3>
              <p>
                Undahitz blog offers affordable premium content that caters to
                music enthusiasts on a budget. Despite its affordability, the
                blog remains dedicated to showcasing the latest under music
                trends and highlighting emerging artists, making it an
                accessible and valuable resource for music lovers of all levels.
              </p>
            </div>
            <div>
              <h3>Promotion Made Easy</h3>
              <p>
                With Undahitz - Promotion Made Easy, artists can effortlessly
                boost their exposure and reach new audiences. This platform
                offers simple and effective promotional strategies, allowing
                musicians to focus on their craft while gaining the recognition
                they deserve. Elevate your music career hassle-free with
                Undahitz Promotion Made Easy.
              </p>
            </div>
          </div>
        )}
        {isMission && (
          <div className="dBox">
            <h1>Our Mission</h1>
            <div>
              <h3>Improve Audience Reach</h3>
              <p>
                Undahitz is on a mission to revolutionize the music industry by
                improving the audience reach of underground musicians. With our
                innovative platform, we provide artists with the tools,
                resources, and exposure they need to elevate their careers. Our
                dedicated team is committed to discovering hidden talents and
                giving them the spotlight they deserve.
              </p>
            </div>
            <div>
              <h3>With Our Digital Marketing Suite</h3>
              <p>
                Through strategic promotion, targeted marketing, and a
                community-driven approach, Undahitz aims to connect passionate
                music enthusiasts with talented artists who might otherwise go
                unnoticed. Join us in supporting and celebrating the underdogs
                of the music industry as we work towards a more inclusive and
                diverse musical landscape.
              </p>
            </div>
          </div>
        )}
        {isVision && (
          <div className="dBox">
            <h1>Our Vision</h1>
            <div>
              <h3>First In Underground Music Trends</h3>
              <p>
                {" "}
                At Undahitz, our vision is clear: we strive to become the
                leading authority in underground music trends. With a passion
                for discovering the latest and most underrated music, we aim to
                be at the forefront of identifying and showcasing emerging
                talents.
              </p>
            </div>
            <div>
              <h3>Best Platform</h3>
              <p>
                By providing a platform that highlights cutting-edge music
                across various genres, we aspire to become the go-to resource
                for music enthusiasts seeking fresh and alternative sounds. With
                our unwavering dedication to staying ahead of the curve, we are
                committed to shaping the future of underground music and
                facilitating its recognition on a global scale.
              </p>
            </div>
          </div>
        )}
      </HeroAboutDetailWrapper>
      <ReachOutWrapper>
        <article className="reachBox">
          <h1>Reach Out.</h1>
          <p>
            By providing a platform that highlights cutting-edge music across
            various genres, we aspire to become the go-to resource for music
            enthusiasts seeking fresh and alternative sounds.{" "}
          </p>
          <div className="cBtn">Contact Us</div>
        </article>
        <article className="reachBox">
          <h1>Make Enquiry</h1>
          <form>
            <div className="input-area">
              <input type={"email"} placeholder="Enter Email Address" />
            </div>
            <div className="input-area">
              <input type={"text"} placeholder="Enter Subject" />
            </div>
            <div className="msg">
              <textarea placeholder="Message" rows={"8"} />
            </div>
            <div className="input-area">
              <button type={"button"}>Submit Message</button>
            </div>
          </form>
        </article>
      </ReachOutWrapper>
      <Newsletter />
      <Footer />
    </AboutUndahitzContainer>
  );
};

const AboutUndahitzContainer = styled.section`
  width: 100%;
  background: var(--mainBgVariant);
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const HeroAboutDetailWrapper = styled.section`
  width: 90%;
  background: var(--mainBg);
  border-radius: 10px;
  box-shadow: 0 40px 30px var(--shadowBg);
  height: 85vh;
  padding: 10px;
  .dBox {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    h1 {
      color: var(--btnBgVariant);
      font-size: 2rem;
      padding: 0 0 10px 0;
      text-transform: uppercase;
    }
    div {
      padding: 15px 0;
      h3 {
        color: var(--actBg);
        font-size: 1.5rem;
        padding-bottom: 5px;
      }
      p {
        font-size: 1.35rem;
        line-height: 1.7;
        width: 90%;
        text-align: justify;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: max-content;
    width: 98%;
    padding: 15px;
  }
`;

const ReachOutWrapper = styled.section`
  width: 90%;
  background: linear-gradient(-168deg, var(--btnBgVariant), var(--actBg));
  border-radius: 10px;
  box-shadow: 0 40px 30px var(--shadowBg);
  height: 85vh;
  padding: 10px;
  display: grid;
  grid-template-columns: 65% 34%;
  gap: 1%;

  .reachBox {
    width: 100%;
    height: 100%;
    background: var(--btnBgVariant);
    box-shadow: 0 50px 40px var(--shadowBg), 0 1rem 0.5rem var(--btnBgVariant);
    border-radius: 10px;
    height: 98%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    &:nth-child(1) {
      background: transparent;
      box-shadow: 0 50px 40px var(--shadowBg);
      border-radius: 10px;
      height: 96%;
    }

    h1 {
      font-size: 2.5rem;
      color: var(--mainBgVariant);
    }
    p {
      color: var(--mainBg);
      font-size: 1.3rem;
      width: 90%;
      line-height: 1.7;
      padding: 10px 0;
    }

    .cBtn {
      background: var(--mainBgVariant);
      border-radius: 0.5rem;
      box-shadow: 0 0 20px var(--shadowBg);
      color: var(--actBg);
      cursor: pointer;
      font-size: 22px;
      font-weight: bold;
      width: 25%;
      padding: 15px;
      text-align: center;
      transition: all 2s ease-in-out;

      &:hover {
        box-shadow: none;
        transform: scale(0.95);
      }
    }

    form {
      height: 90%;
      width: 100%;
      .input-area {
        width: 100%;
        background: #fff;
        height: 55px;
        margin: 5px 0;
        input,
        button {
          padding: 0 10px;
          height: 100%;
          width: 100%;
          font-size: 17px;
        }
        button {
          background: var(--btnBg);
          color: var(--mainBg);
          cursor: pointer;
          font-size: 20px;
          font-weight: 600;
        }
      }
      .msg {
        width: 100%;
        textarea {
          width: 100%;
          resize: none;
          padding: 10px;
          font-size: 17px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 98%;
    height: 90vh;
    .reachBox {
      form {
        .input-area {
          height: 90px;
        }
      }
    }
  }
`;
export default About;
