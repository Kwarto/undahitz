import React from "react";
import styled from "styled-components";
import { IoIosDownload, IoMdCalendar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const SingleBlogCard = ({ song }) => {
  const navigate = useNavigate();
  return (
    <SingleBlogCardWrapper>
      {song?.map((track) => (
        <div key={track.id} className="card">
          <div className="cover">
            <img src={track.imgUrl} alt="music_title" />
            <div className="artist">
              <img src={track.imgUrl} alt="artist" />
              <h4>{track.artistName}</h4>
            </div>
          </div>
          <div className="capArea">
            <div className="meta-info">
              <h3>{track.title}</h3>
              <p>{track.description.substring(0, 120)}...</p>
            </div>
            <div className="last">
              <div className="date">
                <IoMdCalendar />
                <p>{moment(track.timestamp.toDate()).format("LLL")}</p>
              </div>
              <div
                className="btn"
                onClick={() => {
                  navigate(`/client/post/${track.id}`);
                }}
              >
                <IoIosDownload />
                Download
              </div>
            </div>
          </div>
        </div>
      ))}
    </SingleBlogCardWrapper>
  );
};

const SingleBlogCardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  color: var(--textBg);
  cursor: pointer;
  padding: 8px 10px;

  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }

  .card {
    width: 100%;
    height: max-content;
  }
  .capArea {
    background: var(--mainBg);
    border-radius: 0 0 10px 10px;
  }
  .cover {
    position: relative;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #333;
    img {
      width: 100%;
      border-radius: 10px 10px 0px 0;
    }
    .artist {
      position: absolute;
      bottom: 1rem;
      left: 2rem;
      width: 15rem;
      height: 3.5rem;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 50px;
      background: var(--mainBg);
      box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
      padding: 10px;

      img {
        width: 40px;
        aspect-ratio: 1/1;
        border-radius: 50px;
        transform: translateX(-1rem);
      }

      h4 {
        color: var(--textBg);
        font-size: 15px;
      }

      @media screen and (max-width: 430px) {
        left: 4.6rem;
        bottom: 0;
      }
    }
  }

  .meta-info {
    padding: 10px 5px;
    h3 {
      font-size: 1.3rem;
    }
    p {
      font-size: 16px;
      padding: 10px 0;
    }
  }
  .last {
    .date {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 8px;
      p {
        font-size: 16px;
      }
    }
    .btn {
      width: 70%;
      background: var(--btnBg);
      border-radius: 50px;
      color: var(--mainBg);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      gap: 10px;
      padding: 12px 0;
      margin: 10px auto;
      transform: translateY(1rem);
      filter: contrast(0.8);

      &:hover {
        box-shadow: none;
        background: var(--btnBg);
        filter: contrast(1);
      }
    }
  }
`;

export default SingleBlogCard;
