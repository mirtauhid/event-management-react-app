import React from 'react';

const About = () => {
  return (
    <div className="pt-10 pb-16"style={{margin: '25px auto', lineHeight: '36px'}} >
      <h1 className="text-center font-bold text-3xl  tracking-widest antialiased uppercase font-black pt-20">CUSTOM EVENT <br />PRODUCT</h1>
      <h6 className="text-center tracking-wider pt-5 text-md">Our team will work with you step by step <br /> to create and design your event.  We offer <br />
    Sound Rentals, Staging and more.</h6>
      <div className="rounded-md text-center mt-10">
        <a
          href="/#contact"
          style={{fontSize: '1.25rem'}}
          className="py-4 px-4 text-white bg-green-500	 rounded-md  hover:bg-green-500	 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
        >
        Contact a Speciallist
        </a>
      </div>
      <br />
      <br />
      <div className="pt-10">
        <h1 className="text-center font-bold text-4xl tracking-widest antialiased uppercase font-black pt-8">Planning a corporate event?</h1>
        <h6 style={{fontSize:'1.2rem', margin: '15px auto'}} className="text-center tracking-wider pt-5 text-3xl">Chat with an event specialist now and let us create your event step by step.</h6>
        <div className="rounded-md text-center mt-10">
        <a
          href="/#contact"
          className="py-6 px-10 text-white bg-green-500	 rounded-md text-2xl hover:bg-green-500	 transition duration-300 ease-in-out items-center animate-bounce uppercase text-center"
          style={{fontSize: '1.5rem'}}
        >
        Contact us
        </a>
      </div>
      </div>
    </div>
  );
};

export default About;