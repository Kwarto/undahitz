import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import styled from "styled-components";
import { IoIosDownload } from "react-icons/io";
import { NavBar } from "../comp";
const PostDetailPage = () => {
  const { id } = useParams();
  const [song, setSong] = useState([]);
  const link = `${song?.trackUrl}`;

  useEffect(() => {
    id && getPostTrackDetail();
    // eslint-disable-next-line
  }, [id]);
  const getPostTrackDetail = async () => {
    const docRef = doc(db, "songs", id);
    const getTrackDetail = await getDoc(docRef);
    setSong(getTrackDetail.data());
  };
  return (
    <DetailWrapper>
      <NavBar />
      <PostDetailContentWrapper>
        <BannerContainer>
          <img src={song?.imgUrl} alt={song?.title} />
          <div className="layer">
            <audio src={song.trackUrl} controls />
          </div>
        </BannerContainer>
        {/* 0249337087 */}
        <CaptionMetaInfoWrapper>
          <div className="gen">{song?.genre}</div>
          <div className="tit">{song?.title}</div>
          <div className="desc">{song?.description}</div>
          <div className="art">
            <div className="aur">
              <img src={song?.imgUrl} alt="" />
              <h3>Undahitz.com</h3>
            </div>
            <div>
              <div className="a-btn">
                <a href={link} download>
                  <IoIosDownload />
                </a>
              </div>
            </div>
          </div>
        </CaptionMetaInfoWrapper>
      </PostDetailContentWrapper>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--mainBgVariant);
  padding: 15px 0;
  overflow-x: hidden;
`;

const PostDetailContentWrapper = styled.article`
  width: calc(100% - 10%);
  margin: 10px auto;
  height: 85%;
  display: grid;
  grid-template-columns: 41% 59%;
  gap: 1%;
  border-radius: 5px;
`;

const BannerContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: inherit;
  }
`;

const CaptionMetaInfoWrapper = styled.div`
  width: 100%;
  height: 98%;
  background: var(--mainBg);
  box-shadow: 0 30px 40px var(--shadowBg);
  border-radius: 10px;
  transform: scale(0.98);
  padding: 10px;

  .gen {
    width: 20%;
    background: blue;
    border-radius: 50px;
    cursor: pointer;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: var(--mainBg);
  }
  .tit {
    color: #333;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 10px 0 0 0;
  }
  .desc {
    padding: 10px 0;
    line-height: 1.7;
    text-align: justify;
    font-size: 16px;
  }

  .art {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .aur {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 10px;
      img {
        width: 50px;
        aspect-ratio: 1/1;
        border-radius: 50px;
      }
    }
    .a-btn {
      width: 50px;
      aspect-ratio: 1/1;
      background: blue;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 10px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
      a {
        color: var(--mainBg);
        font-size: 20px;
      }
    }
  }
`;

export default PostDetailPage;
