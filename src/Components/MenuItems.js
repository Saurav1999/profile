import React from 'react'
import {BiCodeAlt} from 'react-icons/bi';
import {CgMediaLive} from 'react-icons/cg';

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    {item.link1 && <a href={item.link1}><BiCodeAlt/> {item.label1}</a>}
                                    {item.link2 && <a href={item.link2}><CgMediaLive/> {item.label2}</a>}
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
