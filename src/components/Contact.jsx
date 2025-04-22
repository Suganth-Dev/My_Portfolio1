import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "b98a0991-7ba5-4006-9afb-04f64f3edcdc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSuccessMsg(true);
      event.target.reset(); // Reset the form
      setTimeout(() => setSuccessMsg(false), 4000); // Hide after 4 sec
    }
  };

  return (
    <section id='contact' className='bg-gray-950 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Contact Me</h2>
        <div className='grid lg:grid-cols-2 gap-10'>
          
          {/* contact info */}
          <div className='flex flex-col justify-center space-y-8'>
            <div>
              <h1 className='text-4xl lg:text-6xl font-bold text-gray-300'>Let's Talk</h1>
              <p className='text-gray-300 my-5'>If you want to discuss more in detail, please contact me!</p>
              <h3 className='text-2xl font-semibold text-gray-300'>Email</h3>
              <p className='text-gray-600 mt-2'>
                <a href="mailto:Suganth2501@gmail.com" className='text-blue-500 hover:underline text-xl'>Suganth2501@gmail.com</a>
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Phone</h3>
              <p className='text-gray-600 mt-2'>
                <a href="tel:+917010935239" className='text-blue-500 hover:underline text-xl'>+91 70109 35239</a>
              </p>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-gray-300'>Follow Me</h3>
              <div className='flex gap-3 text-2xl transition-all mt-5 text-gray-100 ml-2'>
                <a href='https://github.com/Suganth-Dev' target='_blank' rel="noreferrer"> 
                  <FaGithub className='hover:text-blue-400' />
                </a>
                <a href='https://www.linkedin.com/in/suganth-devops/' target='_blank' rel="noreferrer">
                  <FaLinkedin className='hover:text-blue-400' />
                </a>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className='bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8 relative'>
            <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Get in Touch</h3>
            {successMsg && (
              <div className='absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300'>
                ✅ Message sent successfully!
              </div>
            )}
            <form className='space-y-6' onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-300'>Name</label>
                <input 
                  type="text" 
                  id='name' 
                  name='name'
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Your Name' 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-300'>Email</label>
                <input 
                  type="email" 
                  id='email' 
                  name='email'
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Your Email' 
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-sm font-medium text-gray-300'>Message</label>
                <textarea 
                  name='message' 
                  rows={5} 
                  className='mt-1 w-full p-3 border bg-gray-950 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500' 
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              <button type='submit' className='w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
