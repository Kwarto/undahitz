import React from "react";
import styled from "styled-components";
import newsImg from "../../assets/images/news.png";
const Newsletter = () => {
  return (
    <NewsletterSectionWrapper>
      <NewsletterContentWrapper>
        <SubscribeImgWrapper>
          <img src={newsImg} alt="" />
        </SubscribeImgWrapper>
        <SubscribeContentBox>
          <div className="txt">
            <h3>
              Always Get Notify <span>When Release</span>
            </h3>
            <p>
              Join 250,000+ subscribers and get our 5mins daily newsletter on
              our new release.
            </p>
          </div>
          <div className="formBox">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <button>Subscribe</button>
          </div>
        </SubscribeContentBox>
      </NewsletterContentWrapper>
    </NewsletterSectionWrapper>
  );
};

const NewsletterSectionWrapper = styled.section`
  background: var(--mainBg);
  width: 90%;
  height: 100%;
  padding: 30px 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  @media screen and (max-width: 768px) {
    width: 98%;
  }
  @media screen and (max-width: 430px) {
    padding: 10px 3px;
  }
`;

const NewsletterContentWrapper = styled.article`
  width: 98%;
  height: 98%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;
  }
`;

const SubscribeImgWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 80%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 80%;
      aspect-ratio: 1/1;
    }
  }
`;

const SubscribeContentBox = styled.div`
  width: 90%;
  height: 100%;
  background: var(--crWhite);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  .txt {
    h3 {
      color: var(--btnBg);
      font-size: 1.7rem;
      padding: 10px 0;
      span {
        color: var(--btnBg);
      }
    }
    p {
      color: #333;
      font-size: 20px;
      width: 100%;
      padding: 15px 0;
      line-height: 1.7;
    }
  }
  .formBox {
    background-color: red;
    border-radius: 50px;
    width: 100%;
    height: 10vh;
    padding: 5px;
    background: rgb(239 239 239);
    input {
      width: 75%;
      height: 100%;
      border-radius: 50px;
      background: rgb(239 239 239);
      padding: 0 20px;
      font-size: 17px;
    }
    button {
      width: calc(100% - 75%);
      height: 90%;
      border-radius: 50px;
      background: var(--btnBg);
      cursor: pointer;
      color: var(--mainBg);
      font-size: 18px;
      font-weight: 600;

      &:hover {
        filter: contrast(0.9);
      }
    }
  }
  @media screen and (max-width: 430px) {
    width: 100%;

    .txt {
      h3 {
        font-size: 1.8rem;
      }
    }
    .formBox {
      padding: 0;
      height: 8vh;
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        width: 70%;
        height: 90%;
      }
      button {
        width: calc(100% - 70%);
        height: 80%;
        margin-right: 5px;
      }
    }
  }
`;

export default Newsletter;
