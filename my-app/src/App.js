import './App.css';
import React from 'react'
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


function App() {
  return (
    <div>
      <nav>
      <Navigationbar />
      <Main />
      <Highlights />
      <Menu />
      <Testimonials />
      <About />
      <Footer />
      
      {/* <LoginPage /> */}
      <recipes />
      {/* <Link to="/" className="nav-item">HOME</Link>
      <Link to="/ABOUT" className="nav-item">ABOUT</Link>
      <Link to="/MENU" className="nav-item">MENU</Link> */}
      </nav>
    {/* <Routes>
      <Route path="/" element ={<App/>}></Route>
      <Route path="/ABOUT" element={<Herosection/>}></Route>
      <Route path="/MENU" element={<Highlights/>}></Route>
    </Routes>    */}

    </div>
  );
}

export default App;
