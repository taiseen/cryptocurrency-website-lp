import { NewsletterForm } from '.';

const Newsletter = () => {

  return (
    <section className='py-[40px] lg:py-[88px] bg-newsLetter bg-cover'>

      <div className='container mx-auto'>

        <div
          className='flex flex-col items-center justify-between bg-blue p-12 rounded-2xl
        lg:flex-row lg:bg-newsLetterBox lg:bg-no-repeat lg:h-[216px]'
          data-aos='fade-up'
          data-aos-offset='300'
        >

          <div className='flex-1 w-full'>
            <h3 className='h3 mb-4'>Starting mining now</h3>
            <p className='max-w-[348px] mb-8'>Join now with CRAPPO to get the latest news & starts mining now</p>
          </div>

          <NewsletterForm />

        </div>

      </div>

    </section>
  );
};

export default Newsletter;
