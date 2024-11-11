
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Price from './components/Price'
import Property from './components/Property'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

function App() {


  return (
    <div className='font-primary overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Property/>
      <Price/>
      <Service/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default App
