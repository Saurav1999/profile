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
          As a Senior Software Engineer, I am currently driving innovation at Paytm Payments Bank. In my impactful role, I have played a pivotal part in shaping various banking features and services, such as Authentication, Money Transfer, Fixed Deposits, Debit & NCMC Card (Issuance, management, and ordering), KYC, Device Binding, and more.
          <br/>
          <br/> 
          One notable achievement in my journey has been leading the development of the myAadhaar Portal, accessible at <a href="https://myaadhaar.uidai.gov.in/">https://myaadhaar.uidai.gov.in/</a>. This portal serves as a critical platform for over 1.3 billion Indian citizens, offering seamless online Aadhaar-related services. It's a testament to my commitment to creating impactful solutions that positively impact the lives of individuals on a large scale.
          <br/>
          <br/>
          Beyond these accomplishments, my passion for thoughtful UI and expertise in crafting elegant and responsive frontends, coupled with backend proficiency in creating REST, gRPC, and GraphQL APIs, form the foundation of my approach to web development. I thrive on staying ahead of industry trends, ensuring my work remains cutting-edge and aligned with the evolving landscape of technology.
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
        <a href="https://drive.google.com/file/d/129vTOW3pMBgeMt3wOZuAssUfyGuaMtQ1/view?usp=sharing">
          <button className="btn">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
