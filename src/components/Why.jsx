import React from 'react';
import images from '../assets';

const Why = () => {

  return (
    <section className='section'>
      <div className="container mx-auto">

        <div className='flex flex-col items-center lg:flex-row gap-x-8' >

          <div
            className='order-2 lg:order-1'
            data-aos='fade-right'
            data-aos-offset='300'
          >
            <img src={images.whyImg} alt="" />
          </div>


          <div
            className='order-1 lg:order-2 max-w-[480px]'
            data-aos='fade-left'
            data-aos-offset='300'
          >
            <h1 className='section-title'>Why you should use CRAPPO</h1>
            <p className='section-subtitle'>Experience the next generation cryptocurrency platform. No financial border, extra feeds, & fake reviews</p>
            <button className="btn px-6">Learn more</button>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Why;
