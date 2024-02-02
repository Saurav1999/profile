import React,{useEffect} from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

//Icons
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si"
import { SiReact } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiBabel } from "react-icons/si";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} Icon={SiJavascript} />
        <SkillsSection skill={"Typescript"} Icon={SiTypescript} />
        <SkillsSection skill={"Python"} Icon={SiPython} />
        <SkillsSection skill={"React Js"} Icon={SiReact} />
        <SkillsSection skill={"Next Js"} Icon={SiNextdotjs} />
        <SkillsSection skill={"Node Js"} Icon={SiNodedotjs} />
        <SkillsSection skill={"GraphQL"} Icon={SiGraphql} />
        <SkillsSection skill={"MongoDB"} Icon={SiMongodb} />
        <SkillsSection skill={"MySql"} Icon={SiMysql} />
        <SkillsSection skill={"Webpack"} Icon={SiWebpack} />
        <SkillsSection skill={"Docker"} Icon={SiDocker} />
        <SkillsSection skill={"Babel"} Icon={SiBabel} />
      </div>
      {/* 
            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Back End'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                
            </div> */}
    </div>
  );
}

export default AboutPage;
