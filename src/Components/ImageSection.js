import React from "react";
import about from "../img/developer.svg";
// import about from '../img/about.png';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Saurav Singh</span>
        </h4>
        <p className="about-text">
          Web developer with a passion for thoughtful UI. I develop elegant and
          responsive frontend with optimised and modern backend. I actively seek
          out new technologies and stay up-to-date on industry trends and
          advancements.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Indian</p>
            <p>: English, Hindi</p>
            <p>: Whitefield, Bengaluru, Karnataka, India</p>
          </div>
        </div>
        <a href="https://drive.google.com/file/d/1Jq2joblU7BSny_nX9QLqscXYguYhfCKT/view?usp=sharing">
          <button className="btn">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
