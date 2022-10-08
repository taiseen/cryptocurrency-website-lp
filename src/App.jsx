import { Header, Hero } from './components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400,
    })
  }, [])


  return (
    <main className='overflow-hidden'>

      <Header />
      <Hero />

    </main>
  );
};

export default App;
