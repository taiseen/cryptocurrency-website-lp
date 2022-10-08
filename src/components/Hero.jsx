import { IoIosArrowDroprightCircle } from 'react-icons/io'
import images from '../assets';


const Hero = () => {

  return (
    <section>
      <div className='container mx-auto'>

        <div className='flex flex-col items-center lg:flex-row'>

          <div className='flex-1'>

            {/* badge text */}
            <div
              className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
              data-aos='fade-down'
              data-aos-delay='400'
            >
              <div className='flex items-center justify-between text-sm lg:text-base'>

                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>
                  75% save
                </div>

                <div>
                  For the Black Friday Weekend
                </div>

              </div>
            </div>

            {/* title */}
            <h1
              className='text-[32px] lg:text-[64px] font-bold leading-tight md-6'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Fastest & secure platform to invest in crypto...
            </h1>

            <p
              className='max-w-[440px] leading-relaxed mb-8 mt-4'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transaction.
            </p>

            <button
              className='btn gap-x-3 px-5 text-sm lg:h-14 lg:text-base'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              Try for free <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl' />
            </button>
          </div>

          <div className='flex-1'>
            <img
              alt="banner img..."
              src={images.heroImg}
              data-aos='fade-up'
              data-aos-delay='600'
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
