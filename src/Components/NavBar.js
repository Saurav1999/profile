import React from 'react'
import avatar from '../img/avatar.jpg';
import {NavLink} from 'react-router-dom';

function Navbar({setNavToggle}) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item" onClick={() => {setNavToggle(false)}}>
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => {setNavToggle(false)}}>
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item" onClick={() => {setNavToggle(false)}}>
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
            
                    <li className="nav-item" onClick={() => {setNavToggle(false)}}>
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer"/>
            </nav>
            
        </div>
    )
}

export default Navbar;
