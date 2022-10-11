import { currency } from '../constants/data';
import { CurrencyItem } from '.';
import { useState } from 'react';


const Trade = () => {

  const [itemName, setItemName] = useState('Ethereum');


  return (
    <section
      className='section lg:pt-[320px] bg-gradient-to-b from-[#F8F9FB] to-[#FAFBFF] text-darkblue lg:-mt-[320px]'
    >

      <div className="container mx-auto">

        <h2
          className='text-center section-title mb-16'
          data-aos='fade-up'
          data-aos-offset='300'
        >
          Trade security & market the hight growth crypto currencies
        </h2>


        <div
          className='flex flex-col gap-[45px] lg:flex-row'
          data-aos='fade-up'
          data-aos-offset='350'
        >
          {
            currency.map(item =>
              <CurrencyItem
                key={item.name}
                currency={item}
                setItemName={setItemName}
                itemName={itemName}
              />
            )
          }
        </div>

      </div>
      
    </section>
  );
};

export default Trade;
