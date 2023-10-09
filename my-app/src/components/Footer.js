import React from 'react';
import menu from '../Images/menu.webp';
import Booking from './Booking';
import Herosection from './Herosection';
import LoginPage from './LoginPage';
import  smalllogo from '../Images/small_logo.png';
function Footer(){
    const footerStyle={
        display:"flex"
    }
    const ulStyle={
        flex:"1"
    }
    return (
        <footer style={footerStyle}>
            <article>
             <img src={smalllogo} alt="Little Lemon"/>
             </article>
            <article>
            <h1>Navigation</h1>
            <ul style={ulStyle}>
                <li><a href="/">Home</a></li>
                <li><a href="./About">About</a></li>
                <li><a href="./Menu">Menu</a></li>
                <li><a href="./Herosection">Reservations</a></li>
                <li><a href="order.html">Order</a></li>
                <li><a href="./Loginpage">Login</a></li>
            </ul>
            </article>
            <article>
            <h1>Contact</h1>
            <p>2395 Maldove Way,</p>
            <p>Chicago Illinois</p>
            <p>(629)-243-6827</p>

            <p>info@littlelemon.com</p>
            </article>
            <article>
            <h1>Connect</h1>
            <ul style={ulStyle}>
                <li><a href="facebook.html">Facebook</a></li>
                <li><a href="instagram.html">Instagram</a></li>
                <li><a href="joinus.html">Join us!</a></li>
            </ul>
           
            </article>
            </footer>

    )
}
export default Footer;