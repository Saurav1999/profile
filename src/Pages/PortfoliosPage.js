import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import {projectList,miniProjectsList} from '../Components/allportfolios';
import { useState } from 'react';

const allProjectCategories = ['All', ...new Set(projectList.map(item => item.category))];
const allMiniProjectCategories = ['All', ...new Set(miniProjectsList.map(item => item.category))];

function PortfoliosPage() {
    // const [categories, setCategories] = useState(allCategories);
    const [projects, setProjects] = useState(projectList);
    const [miniProjects, setMiniProjects] = useState(miniProjectsList);

    const filterProjects = (category) =>{
        if(category === 'All'){
            setProjects(projectList)
            return;
        }
        const filteredData  = projectList.filter((item)=>{
            return item.category === category;
        })
        setProjects(filteredData);
    }
    const filterMiniProjects = (category) =>{
        if(category === 'All'){
            setMiniProjects(miniProjectsList)
            return;
        }
        const filteredData  = miniProjectsList.filter((item)=>{
            return item.category === category;
        })
        setMiniProjects(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projects'} span={'projects'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filterProjects} categories={allProjectCategories} />
                <MenuItems menuItem={projects} />
            </div>
            <div className="divider"/>
            <div className="title">
                <Tittle title={'Mini Projects'} span={'mini projects'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filterMiniProjects} categories={allMiniProjectCategories} />
                <MenuItems menuItem={miniProjects} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
