const CalcForm = () => {

  return (
    <div
      className='w-full bg-white max-w-[942px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary'
      data-aos='fade-up'
      data-aos-offset='400'
    >
      <form
        className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'
      >

        <input
          type="text"
          placeholder='Enter your hash rate'
          className='input placeholder:text-darkblue'
        />

        <select className='select'>
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>

        <button className='btn px-6 text-white flex self-start'>Calculate</button>
      </form>

      <div className='mt-24'>
        <p className='text-blue font-medium mb-4'>ESTIMATED 24 HOUR REVENUE:</p>
        <p className='text-[32px] font-bold mb-3'>
          0.055 130 59 ETH &nbsp;
          <span className='text-blue'>($1257)</span>
        </p>
        <p className='text-gray-500 tracking-[1%]'>
          Revenue will change based on mining difficulty & Ethereum price.
        </p>
      </div>

    </div>
  );
};

export default CalcForm;
