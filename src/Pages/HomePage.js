import React, { useEffect } from 'react';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
// import {faGithub} from '@fortawesome/free-brands-svg-icons';
// import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
// import {SiReplDotIt} from 'react-icons/si'
import { SiReplit } from "react-icons/si";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';

function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Saurav.</span>
                </h1>
                <p className="h-sub-text">
                Welcome to my portfolio! I'm a full-stack web developer with a keen eye for creating intuitive and visually appealing user interfaces. I specialize in crafting elegant and responsive frontends that elevate user experiences. My skills extend to building robust backends using REST, gRPC, and GraphQL APIs. Always on the lookout for emerging technologies, I ensure my work stays at the forefront of industry trends.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/saurav-singh-a0793118b" className="icon-holder">
                        <IoLogoLinkedin className="icon-social" />
                        {/* <FontAwesomeIcon icon={faFacebook} className="icon fb" /> */}
                    </a>
                    <a href="https://github.com/Saurav1999" className="icon-holder">
                        <IoLogoGithub className="icon-social" />
                    </a>
                    <a href="https://replit.com/@Saurav1999" className="icon-holder">
                        <SiReplit className="icon-social-replit"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
