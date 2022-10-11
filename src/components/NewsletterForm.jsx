import { useState } from 'react';

const NewsletterForm = () => {

  const [userEmail, setUserEmail] = useState('');


  const handleSubmit = e => {
    e.preventDefault();

    console.log(userEmail)

    setUserEmail('');
  }

  return (
    <form
      className="flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-10"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        value={userEmail}
        placeholder="Enter your email"
        onChange={e => setUserEmail(e.target.value)}
        className='input text-base text-white placeholder:text-white/50 placeholder:text-base'
      />

      <button className="btn bg-white text-darkblue px-8 hover:bg-white/70">
        Subscribe
      </button>

    </form>
  );
};

export default NewsletterForm;
