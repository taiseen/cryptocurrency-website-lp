import images from '../assets';

const FeaturesSection2 = () => {

  return (
    <section className='py-[30px] lg:py-[120px]'>

      <div className='container mx-auto'>

        <div className='flex flex-col justify-end items-center lg:flex-row'>

          {/* 🟨🟨🟨 Image Data 🟨🟨🟨 */} 
          <div
            className='flex-1 lg:absolute lg:left-0 lg:order-1 order-2'
            data-aos='fade-right'
            data-aos-offset='300'
          >
            <img src={images.feature2img} alt="" />
          </div>

          {/* 🟨🟨🟨 Test Data 🟨🟨🟨 */}
          <div
            className='flex-1 max-w-[456px]'
            data-aos='fade-left'
            data-aos-offset='300'
          >
            <h3 className='h3 mb-6'>Details Statistics</h3>
            <p className='text-gray mb-8'>View all mining related information in realtime, at any point at any location & decide which polls you want to mine in.</p>

            <button className='btn px-8 mb-6 lg:mb-0'>Learn More</button>
          </div>

        </div>
        
      </div>

    </section>
  );
};

export default FeaturesSection2;
