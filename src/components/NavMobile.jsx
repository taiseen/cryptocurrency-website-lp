import { navData } from '../constants/data';
import { CgClose } from 'react-icons/cg';

const NavMobile = ({ setMobileMenu }) => {

  return (
    <nav className='lg:hidden top-0 bottom-0 w-80 h-full flex items-center justify-center bg-violet'>

      <div
        className='absolute top-2 left-2 cursor-pointer'
        onClick={() => setMobileMenu(false)}
      >
        <CgClose className='text-3xl' />
      </div>

      <div className='text-lg flex flex-col gap-y-8'>
        {
          navData.map(menu =>
            <p key={menu.name}>
              <a href={menu.href}>{menu.name}</a>
            </p>
          )
        }
      </div>
      
    </nav>
  )
};

export default NavMobile;