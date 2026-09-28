import React from 'react';
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaUsers, FaAward } from 'react-icons/fa';

const stats = [
  {
    icon: <FaBirthdayCake />,
    number: '5100+',
    label: 'Successful Events',
  },
  {
    icon: <FaUsers />,
    number: '04+',
    label: 'Years Experience',
  },
  {
    icon: <FaAward />,
    number: '5000+',
    label: 'Happy Clients',
  },
];

export default function About() {
  return (
    <section className='w-full bg-[#f6f6f7] py-8 lg:py-12 overflow-hidden relative'>
      <div className='max-w-8xl mx-auto px-4 lg:px-14 xl:px-16'>
        <div className='grid lg:grid-cols-2 gap-14 items-center'>
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='order-1 lg:order-1'
          >
            <span className='inline-block text-sm sm:text-base font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text mb-5'>
              Welcome to Party Decor
            </span>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight'>
              Creating Magical
              <span className='block bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text'>
                Event Experiences
              </span>
            </h2>

            <p className='mt-7 text-gray-600 text-base sm:text-lg leading-8 max-w-2xl'>
              At Party Decor, we transform your celebrations into unforgettable
              memories with luxury decoration, creative themes, elegant stage
              setups, birthday parties, weddings, corporate events, and premium
              event planning services.
            </p>

            <p className='mt-5 text-gray-600 text-base sm:text-lg leading-8 max-w-2xl'>
              With years of experience and a passionate creative team, we bring
              style, elegance, and perfection to every celebration.
            </p>

            {/* STATS */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10'>
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className='bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300'
                >
                  <div className='w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center text-2xl mb-4'>
                    {item.icon}
                  </div>

                  <h3 className='text-3xl font-bold text-gray-900'>
                    {item.number}
                  </h3>

                  <p className='text-gray-500 mt-1 text-sm'>{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className='flex flex-nowrap sm:flex-wrap gap-3 sm:gap-4 mt-10 w-full'>
              {/* Call Button */}
              <a href='tel:8890058068' className='flex-1 sm:flex-none'>
                <button className='w-full cursor-pointer sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all duration-300 whitespace-nowrap'>
                  Call Now
                </button>
              </a>

              {/* WhatsApp Button */}
              <a
                href='https://wa.me/918890058068?text=Hello%20Party%20Decor%2C%20I%20want%20to%20know%20more%20about%20your%20services.'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 sm:flex-none'
              >
                <button className='w-full cursor-pointer sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-pink-500 text-pink-600 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 whitespace-nowrap'>
                  Book Now
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className='relative flex justify-center order-2 lg:order-2'
          >
            {/* Background Shape */}
            <div className='absolute top-0 right-2 sm:right-8 w-[85%] h-[85%] bg-gradient-to-b from-pink-500 to-purple-600 rounded-[40px] blur-[1px]' />

            {/* Image Card */}
            <div className='relative z-10 overflow-hidden rounded-[35px] shadow-2xl w-full max-w-[620px]'>
              <img
                src='/anniversary/anniversary1.png'
                alt='Party Decoration'
                className='w-full h-[350px] sm:h-[450px] lg:h-[620px] object-cover object-center hover:scale-105 transition-transform duration-700'
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className='absolute left-0 bottom-6 bg-white shadow-2xl rounded-3xl p-5 z-20 hidden sm:flex items-center gap-4'
            >
              <div className='w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-2xl'>
                🎉
              </div>

              <div>
                <h4 className='font-bold text-gray-900 text-lg'>
                  Premium Decoration
                </h4>
                <p className='text-gray-500 text-sm'>
                  Elegant & Luxury Setup
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}