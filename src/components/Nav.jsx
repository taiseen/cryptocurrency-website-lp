import { navData } from '../constants/data';

const Nav = () => {

  return (
    <nav className='flex items-center'>

      <div className='text-lg flex gap-x-4'>
        {
          navData.map(menu =>
            <p key={menu.name} className='border-b-2 border-transparent hover:border-blue transition-all duration-300'>
              <a href={menu.href}>{menu.name}</a>
            </p>
          )
        }
      </div>
      
    </nav>
  );
};

export default Nav;
