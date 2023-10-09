import React, { useState } from 'react';
import logo from  '../Images/Logo.svg';
import './styles.css';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import About from './About';

const Navigationbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
    

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    };
    
    return (
        
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/">
        <img src= {logo} alt="LITTLE LEMON logo"/>
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="hamburgermenu"></div>
            <div className="hamburgermenu"></div>
            <div className="hamburgermenu"></div>   
        </div>
        <ul className={`nav-ul ${menuOpen ? "visible" : ""}`}>
                    <li className='nav-li'><a className='nav-a' href="/">HOME</a></li>
                    <li className='nav-li'><a className='nav-a' href="./About">ABOUT</a></li>
                    <li className='nav-li'><a className='nav-a' href="MENU">MENU</a></li>
                    <li className='nav-li'><a className='nav-a' href="RESERVATIONS">RESERVATIONS</a></li>
                    <li className='nav-li'><a className='nav-a' href="ORDER ONLINE">ORDER ONLINE</a></li>
                    <li className='nav-li'><a className='nav-a' href="./LoginPage">LOGIN</a></li>
                    
                    
        </ul>
        
        </nav>
    )
}


export default Navigationbar;