import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io';
import images from '../assets';


const Footer = () => {

  return (
    <footer
      className='lg:pt-24 pt-0'
      data-aos='fade-up'
      data-aos-offset='300'
    >

      <div className='container mx-auto'>
        <div className='flex flex-col gap-12 lg:flex-row '>

          <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]'>
            <a href="/#">
              <img src={images.logo} alt="" />
            </a>
          </div>

          <div className='flex flex-1 flex-col gap-16 lg:flex-row'>

            <div className='text-center w-full lg:text-left'>
              <h2 className='text-xl font-medium mb-6'>Quick Links</h2>
              <ul className='space-y-4 text-gray'>
                <li><a className='hover:text-blue transition duration-200' href="/#">Home</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Products</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">About</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Features</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Contact</a></li>
              </ul>
            </div>

            <div className='text-center w-full lg:text-left'>
              <h2 className='text-xl font-medium mb-6'>Resource Links</h2>
              <ul className='space-y-4 text-gray'>
                <li><a className='hover:text-blue transition duration-200' href="/#">Download Whitepaper</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Smart Token</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Blockchain Explore</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Crypto API</a></li>
                <li><a className='hover:text-blue transition duration-200' href="/#">Interest</a></li>
              </ul>
            </div>

          </div>

          <div className='flex flex-col flex-1'>
            <div className='lg:ml-[80px]'>

              <h3 className='h3 font-medium text-center mb-10 '>We accepts following payment systems</h3>

              <div className='flex justify-center items-center gap-6'>
                <img src={images.visa} alt="" />
                <img src={images.mastercard} alt="" />
                <img src={images.bitcoin} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className='py-12'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>

          <div>
            &copy; 2022 CRAPPO. All right reserved by Taiseen.
          </div>

          <div className='flex text-2xl gap-x-8'>
            <a className='hover:text-blue transition duration-200' href="/#"> <IoLogoYoutube /> </a>
            <a className='hover:text-blue transition duration-200' href="/#"> <IoLogoInstagram /> </a>
            <a className='hover:text-blue transition duration-200' href="/#"> <IoLogoTwitter /> </a>
            <a className='hover:text-blue transition duration-200' href="/#"> <IoLogoLinkedin /> </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
