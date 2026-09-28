import React from 'react';

const HomeService = ({ title, workData }) => {
  const handleWhatsApp = (item) => {
    const phoneNumber = '918890058068'; // India code +91

    const message = `Hello, I am interested in ${item.title} Please share more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <section className='bg-[#f8f6f9] py-8'>
      {/* Heading */}
      <div className='text-center mb-8 md:mb-12 px-4 lg:px-14 xl:px-16'>
        <h2 className='text-2xl md:text-4xl font-bold text-purple-900 relative inline-block'>
          {title}
        </h2>
      </div>

      {/* Cards */}
      <div className='px-4 lg:px-14 xl:px-16'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {workData.map((item, index) => (
            <div
              key={index}
              className='bg-[#f1f1f1] rounded-2xl overflow-hidden 
              shadow-sm hover:shadow-xl transition-all duration-300 group'
            >
              {/* Image */}
              <div className='overflow-hidden rounded-t-2xl'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full h-[350px] object-cover 
                  group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-5 text-center'>
                <h3 className='text-2xl font-bold text-black pb-5'>
                  {item.title}
                </h3>

                <button
                  onClick={() => handleWhatsApp(item)}
                  className='bg-red-600 hover:bg-red-700 text-white 
                  text-xl font-semibold px-8 cursor-pointer py-3 rounded-lg transition-all duration-300 uppercase'
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;