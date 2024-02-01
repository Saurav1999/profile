import React,{useEffect} from 'react';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
// import {faGithub} from '@fortawesome/free-brands-svg-icons';
// import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {IoLogoLinkedin,IoLogoGithub} from 'react-icons/io'
// import {SiReplDotIt}` from 'react-icons/si'

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
                Frontend web developer with a passion for thoughtful UI. I develop elegant and responsive frontends. I have experience building backend with REST and GraphQl APIs. I actively seek out new technologies and stay up-to-date on industry trends and advancements.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/saurav-singh-a0793118b" className="icon-holder">
                        <IoLogoLinkedin className="icon-social"/>
                        {/* <FontAwesomeIcon icon={faFacebook} className="icon fb" /> */}
                    </a>
                    <a href="https://github.com/Saurav1999" className="icon-holder">
                        <IoLogoGithub className="icon-social"/>
                    </a>
                    {/* <a href="https://replit.com/@Saurav1999" className="icon-holder">
                        <SiReplDotIt className="icon-social"/>
                    </a> */}
                </div>
            </header>
        </div>
    )
}

export default HomePage;
