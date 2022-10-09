import { HiChartBar, HiUser, HiGlobe } from 'react-icons/hi';


const Stats = () => {

  return (
    <section>
      <div className='container mx-auto'>

        <div
          className='my-8 md:my-12 flex flex-col gap-y-6 md:flex-row md:flex-wrap md:gap-x-8 lg:justify-between'
          data-aos='fade-down'
          data-aos-delay='600'
        >

          <div className='flex items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full grid place-items-center text-blue text-2xl lg:text-4xl'>
              <HiChartBar />
            </div>
            <div>
              <p className='font-bold text-2xl lg:text-[40px] lg:md-2'>$30B</p>
              <p className='text-gray'>Digital Currency Exchange</p>
            </div>
          </div>

          <div className='flex items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full grid place-items-center text-blue text-2xl lg:text-4xl'>
              <HiUser />
            </div>
            <div>
              <p className='font-bold text-2xl lg:text-[40px] lg:md-2'>+10M</p>
              <p className='text-gray'>Trusted Wallets Investor</p>
            </div>
          </div>

          <div className='flex items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full grid place-items-center text-blue text-2xl lg:text-4xl'>
              <HiGlobe />
            </div>
            <div>
              <p className='font-bold text-2xl lg:text-[40px] lg:md-2'>195</p>
              <p className='text-gray'>Country Supported</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;
