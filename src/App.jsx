import {
  Calculate,
  Features,
  Header,
  Hero,
  NavMobile,
  Newsletter,
  Stats,
  Trade,
  Why,
  Footer
} from './components';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    })
  }, [])


  return (
    <main className='overflow-hidden'>

      <Header setMobileMenu={setMobileMenu} />

      <Hero />

      <div
        className={`fixed top-0 h-full z-10 transition-all duration-200
        ${mobileMenu ? 'right-0' : '-right-full'}`}
      >
        <NavMobile setMobileMenu={setMobileMenu} />
      </div>

      <Stats />

      <Why />

      <Calculate />

      <Trade />

      <Features />

      <Newsletter />

      <Footer />
      
    </main>
  );
};

export default App;