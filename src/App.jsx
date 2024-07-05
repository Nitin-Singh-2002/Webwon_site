import './App.css';
import Animation from "./components/Animation"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from'./components/About';
import Product from './components/Product';
import Testimonial from './components/Testimonial';
import Myfooter from './components/Myfooter';

function App() {

  return (
    <>
    <Animation/>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    <Testimonial/>
    <Myfooter/>
    </>
  );
}

export default App;
