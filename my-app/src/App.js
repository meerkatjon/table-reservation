import './App.css';
import Navigationbar from './components/Navigationbar';
import Herosection from './components/Hersection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
      Home Page
      <Navigationbar />
      <Herosection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />

    </>
  );
}

export default App;
