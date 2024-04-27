import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from'./components/About';
import Product from './components/Product';
import Testimonial from './components/Testimonial'
import Myfooter from './components/Myfooter'

function App() {

  return (
    <>
    <Navbar />
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
