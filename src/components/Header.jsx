import { CgMenuRight } from 'react-icons/cg'
import { Nav, AccountBtns } from '.';
import logo from '../assets/logo.svg'


const Header = () => {

  return (
    <header
      className='py-[30px] lg:py-[60px]'
      data-aos='fade-down'
      data-aos-delay='900'
      data-aos-duration='2000'
    >

      <div className="container mx-auto flex items-center justify-between">

        <a href="/#">
          <img src={logo} alt="" />
        </a>

        {/* by default hide but display at large screen */}
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav />
          <AccountBtns />
        </div>

        {/* by default display but hide at large screen */}
        <div className='lg:hidden cursor-pointer'>
          <CgMenuRight className='text-2xl' />
        </div>
      </div>

    </header>
  );
};

export default Header;
