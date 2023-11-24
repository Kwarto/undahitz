import React, { useState } from "react";
import { styled } from "styled-components";
import authBg1 from "../../assets/images/authBg1.jpg";
import authBg2 from "../../assets/images/authBg2.png";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <AuthenticationModelWrapper>
      <AuthenticationContainerWrapper>
        <AuthenticateAuthorRegister>
          <div className="authBox">
            <img src={authBg1} alt="img" />
          </div>
          <div className="authBox right">
            <h1
              onClick={() => {
                setIsSignup(!isSignup);
              }}
            >
              {!isSignup ? "Register Author" : "Authenticate Author"}
            </h1>
            <form>
              {!isSignup && (
                <div className="input-area">
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                  />
                </div>
              )}
              <div className="input-area">
                <input type="text" name="email" placeholder="Email Address" />
              </div>
              <div className="input-area">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="input-area btn">
                <button type="button">
                  {!isSignup ? "Register" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </AuthenticateAuthorRegister>
        <AuthenticateAuthorLogin></AuthenticateAuthorLogin>
      </AuthenticationContainerWrapper>
    </AuthenticationModelWrapper>
  );
};

const AuthenticationModelWrapper = styled.section`
  background: linear-gradient(var(--overBg), var(--btnBgVariant)),
    url(${authBg2});
  background-position: center;
  background-size: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const AuthenticationContainerWrapper = styled.article`
  background: var(--mainBg);
  box-shadow: 0 30px 40px var(--shadowBg), 0 1rem 0.5rem var(--btnBgVariant);
  border-radius: 10px;
  width: 70%;
  min-height: 85%;
`;

const AuthenticateAuthorRegister = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 59%;
  gap: 1%;

  .authBox {
    background: blue;
    width: 100%;
    min-height: 75vh;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .right {
    background: var(--mainBg);
    padding: 10px;
    h1 {
      font-size: 2rem;
      color: var(--btnBg);
      cursor: grab;
    }

    form {
      width: 98%;
      height: 90%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .input-area {
        background: white;
        box-shadow: 0 0 5rem var(--formBg);
        width: 98%;
        height: 80px;
        margin: 10px 0;

        input,
        button {
          height: 100%;
          width: 100%;
          padding: 0 15px;
          background: var(--mainBg);
          border-radius: 0.5rem;
          font-size: 17px;
          font-weight: bold;
          ::placeholder {
            color: blue;
          }
        }

        button {
          background: var(--btnBg);
          cursor: pointer;
          color: var(--mainBg);
          transition: all 2s ease-in-out;

          &:active {
            transform: scale(0.99);
            box-shadow: none;
          }
        }
      }
    }
  }
`;

const AuthenticateAuthorLogin = styled(AuthenticateAuthorRegister)``;

export default Auth;
