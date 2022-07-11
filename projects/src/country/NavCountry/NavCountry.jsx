import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import './NavCountry.css'
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../features/country/countrySlice";




function NavCountry() {

    const dispatch =useDispatch()
    const isDark = useSelector((state) => state.country.isDark)
    const handleDarkMode =()=>{
        dispatch(setDarkMode(!isDark))
    }
    
    return (
        <div className={isDark && "nav-country"||'nav-country-dark'} >
            <div className="navbar-container">
                <Link to="/Country" className={isDark&&"navbar-logo-ct"||'navbar-logo-ct-dark'}>
                    Where in the world?
                </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <button className={isDark&&"nav-dark-mode"||'nav-dark-mode-dark'} onClick={()=>handleDarkMode()}>Dark mode</button>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default NavCountry;