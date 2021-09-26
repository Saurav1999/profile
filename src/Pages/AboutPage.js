import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

//Icons
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiNodeDotJs} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiNextDotJs} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiGraphql} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'
import {SiWebpack} from 'react-icons/si'
import {SiBabel} from 'react-icons/si'
// import ServicesSection from '../Components/ServicesSection';
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} Icon={SiJavascript} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} Icon={SiTypescript}  progress={'30%'} width={'30%'} />
                <SkillsSection skill={'Python'} Icon={SiPython} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React Js'} Icon={SiReact} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Next Js'} Icon={SiNextDotJs} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} Icon={SiNodeDotJs} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'GraphQL'} Icon={SiGraphql} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'MongoDB'} Icon={SiMongodb} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'MySql'} Icon={SiMysql} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Docker'} Icon={SiDocker} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Webpack'} Icon={SiWebpack} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Babel'} Icon={SiBabel} progress={'90%'} width={'90%'} />
            </div>
{/* 
            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div> */}

        </div>
    )
}

export default AboutPage;
