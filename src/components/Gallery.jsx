import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const gallery = [
    { id: 1, src: '/birthday/birthday16.jpeg', title: 'Birthday Luxury Decor' },
    { id: 2, src: '/birthday/birthday22.jpeg', title: 'Birthday Celebration' },
    { id: 3, src: '/naming/name11.jpeg', title: 'Naming Ceremony Decoration' },
    { id: 4, src: '/birthday/birthday21.jpeg', title: 'Birthday Decoration' },
    { id: 5, src: '/naming/name6.jpeg', title: 'Naming Ceremony Decoration' },
    {
      id: 6,
      src: '/anniversary/anniversary12.jpeg',
      title: 'Anniversary Decoration',
    },
    {
      id: 7,
      src: '/naming/name8.jpeg',
      title: 'Naming Ceremony Decoration',
    },
    { id: 8, src: '/baby/baby13.jpeg', title: 'Welcome Baby Decoration' },
    { id: 9, src: '/baby/baby19.jpeg', title: 'Welcome Baby Decoration' },
    { id: 10, src: '/birthday/birthday16.jpeg', title: 'Birthday Decoration' },
    {
      id: 11,
      src: '/anniversary/anniversary6.jpeg',
      title: 'Anniversary Decoration',
    },
    { id: 12, src: '/haldi/haldi4.jpg', title: 'Haldi Celebration' },
    {
      id: 13,
      src: '/haldi/mehndi2.png',
      title: 'Mehendi Celebration',
    },
    { id: 14, src: '/baby/baby6.jpg', title: 'Baby Shower' },
    { id: 15, src: '/get/get8.jpeg', title: 'Get Together Decoration' },
    { id: 16, src: '/haldi/mehndi3.png', title: 'Mehendi Celebration' },
    { id: 17, src: '/welcome/baby1.jpeg', title: 'Welcome Baby Decoration' },
    { id: 18, src: '/get/get5.jpeg', title: 'Get Together Decoration' },
    { id: 19, src: '/welcome/baby20.jpeg', title: 'Welcome Baby Decoration' },
    {
      id: 20,
      src: '/anniversary/anniversary7.jpeg',
      title: 'Anniversary Decoration',
    },
  ];

  return (
    <>
      <div>
        <section className='bg-purple-50 py-16 px-4 lg:px-20'>
          <div className='max-w-7xl mx-auto text-center mb-12'>
            <h2 className='text-3xl md:text-5xl text-[#78287D] font-bold'>
              Our Latest Work
            </h2>
          </div>

          {/* Trending Simple Grid */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='relative group overflow-hidden rounded-xl shadow-md bg-white'
              >
                <div className='aspect-square overflow-hidden'>
                  <img
                    src={item.src}
                    alt={item.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                  />
                </div>

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center'>
                  <p className='text-white text-lg font-semibold text-center px-3'>
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <Enquiry /> */}
      </div>
    </>
  );
}
