import './App.css';
import React, { Component } from 'react'
//import React from 'react'
import Navigationbar from './components/Navigationbar';
//import Herosection from './components/Herosection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
//import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';
//import {Routes, Route, Link} from "react-router-dom";
import LoginPage from './components/LoginPage';
import recipes from './recipes';
import lemon from './Images/images.jpeg'


class App extends Component {
  render(){
    const myStyle={
        backgroundImage:`url(${lemon})`,
        height:'100vh',
        width: '100vw',
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundRepeat: 'repeat',
        };
  return (
    <nav>
      <div>
      <div style={myStyle} >
    
      <Navigationbar />
      <Main />
      <div style={myStyle} >
    
      <Highlights />
      <Menu />
      <div style={myStyle} >
    
      <Testimonials />
      <div style={myStyle} >
    
      <About />
      <Footer />
      <recipes />
      </div>
      </div>
      </div>
    </div>
    </div>
    </nav>
  );
}
}

export default App;