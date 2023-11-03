import React from "react";
import { MdDownload } from "react-icons/md";
import equalImg from "../../assets/images/equal.avif";
import coverImg from "../../assets/images/coverArt.jpg";
const SingleSearchTrack = () => {
  return (
    <div className="mockup">
      <div className="head">
        <h1>Warrior Kimpo</h1>
        <span className="btn">
          <MdDownload className="ico" />
        </span>
      </div>
      <div className="art">
        <img src={equalImg} alt={"equalizer"} />
        <img src={coverImg} alt={"title"} className="banner" />
      </div>
      <div className="info">
        <h3>Otimismo-St-Mass-X-Warrior-Kimpo</h3>
        <div className="soundFile">
          <audio src={equalImg} controls></audio>
        </div>
      </div>
    </div>
  );
};

export default SingleSearchTrack;
