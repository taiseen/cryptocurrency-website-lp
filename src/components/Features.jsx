import { FeaturesSection1, FeaturesSection2, FeaturesSection3 } from '.';

const Features = () => {

  return (
    <section className='pt-12 lg:pt-24 bg-violet'>

      <div className="container mx-auto">

        <div className="text-center max-w-[758px] mx-auto mb-24">

          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='300'
          >
            Market sentiments, portfolio & run the infrastructure of your choice
          </h2>
      
        </div>

        <FeaturesSection1 />
        <FeaturesSection2 />
        <FeaturesSection3 />

      </div>
    </section>
  );
};

export default Features;
