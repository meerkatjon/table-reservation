import React, { useState } from 'react';
import logo from  '../Images/Logo.svg';
import './styles.css';


//function Navigationbar(){
    const Navigationbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);
    

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    };
    console.log("toggle",toggleMenu);

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        {/* <div> */}
        <a href="/">
        <img src= {logo} alt="LITTLE LEMON logo"/>
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="hamburgermenu"></div>
            <div className="hamburgermenu"></div>
            <div className="hamburgermenu"></div>   
        </div>
        <ul className={`nav-ul ${menuOpen ? "visible" : ""}`}>
                    <li className='nav-li'><a className='nav-a' href="HOME">HOME</a></li>
                    <li className='nav-li'><a className='nav-a' href="ABOUT">ABOUT</a></li>
                    <li className='nav-li'><a className='nav-a' href="MENU">MENU</a></li>
                    <li className='nav-li'><a className='nav-a' href="RESERVATIONS">RESERVATIONS</a></li>
                    <li className='nav-li'><a className='nav-a' href="ORDER ONLINE">ORDER ONLINE</a></li>
                    <li className='nav-li'><a className='nav-a' href="LOGIN">LOGIN</a></li>
        </ul>
        {/* </div> */}
        </nav>
    )
}


export default Navigationbar;