import images from '../assets';

const FeaturesSection3 = () => {

  return (
    <section className='py-[30px] lg:py-[120px]'>

      <div className='flex flex-col lg:flex-row'>


        {/* 🟨🟨🟨 Test Data 🟨🟨🟨 */}
        <div
          className='max-w-[454px] mb-6 lg:mt-10'
          data-aos='fade-right'
          data-aos-offset='300'
        >
          <h3 className='h3 mb-6'>Grow your profit & track your investments</h3>
          <p className='text-gray mb-8 max-w-[408px]'>
              Use advance analytical tools. Clear Trading view chart let you track current & historical profile investments.
          </p>

          <button className='btn px-8'>Learn More</button>
        </div>


        {/* 🟨🟨🟨 Image Data 🟨🟨🟨 */}
        <div
          className='flex-1 flex justify-end'
          data-aos='fade-left'
          data-aos-offset='350'
        >
          <img src={images.feature3img} alt="" />
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection3;
