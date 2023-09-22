//import {Link} from "react-router-dom";
import {react} from 'react';
import './styles.css';


function Navigationbar(){
    const navStyle = {
        main: {
        background: "rgb(21, 95, 95)",
        margin: "10%",
        marginleft: "5%",
        padding: "0.2em",
        borderradius: "2em",
        },
        ul:{
            liststyle: "none",
            textalign: "center",
        },
        li: {
            display: "inline-block",
            fontsize: "x-large",
            padding: "10px",
        },
        a: {
            color:"Wheat",
        }
    }
    return (
        <img src= "src/images/Logo.svg" alt="LITTLE LEMON logo"></img>,
        <div classname = "nav">
        {/* <ul style={navStyle.ul}>
            <li style={navStyle.li}><a style={navStyle.a} href="HOME">HOME</a></li>
            <li style={navStyle.li}><a style={navStyle.a} href="ABOUT">ABOUT</a></li>
            <li style={navStyle.li}><a style={navStyle.a} href="MENU">MENU</a></li>
            <li style={navStyle.li}><a style={navStyle.a} href="RESERVATIONS">RESERVATIONS</a></li>
            <li style={navStyle.li}><a style={navStyle.a} href="ORDER ONLINE">ORDER ONLINE</a></li>
            <li style={navStyle.li}><a style={navStyle.a} href="LOGIN">LOGIN</a></li>
        </ul> */}
        <ul className='nav-ul'>
             <li className='nav-li'><a href="HOME">HOME</a></li>
            <li className='nav-li'><a className='nav-a' href="ABOUT">ABOUT</a></li>
            <li className='nav-li'><a className='nav-a' href="MENU">MENU</a></li>
            <li className='nav-li'><a className='nav-a' href="RESERVATIONS">RESERVATIONS</a></li>
            <li className='nav-li'><a className='nav-a' href="ORDER ONLINE">ORDER ONLINE</a></li>
            <li className='nav-li'><a className='nav-a' href="LOGIN">LOGIN</a></li>
      
        </ul>
        </div>
    )
}

export default Navigationbar;