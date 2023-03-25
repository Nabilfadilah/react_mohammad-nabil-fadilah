
import './App.css';
import About from './component/AboutUs/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Slider from './component/Slider/Slider';


function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <About/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
