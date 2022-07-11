import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {


    return(
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.15752-9/290625739_1746209339047345_3810311080242899743_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=lcW8LRuZl9IAX-_WrYX&_nc_ht=scontent.fhan3-5.fna&oh=03_AVLNdnz30B3HWuJwI3w-bbRSdI3gfxRcu8S9dpmXhgfpmw&oe=62EAD052" alt="" className='logo-LTD'/> 
                    LTD
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Skyline Tech</Link>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}
export default Navbar;