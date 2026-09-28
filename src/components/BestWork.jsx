import React from 'react';

const workData = [
  {
    title: 'Birthday Decoration',
    desc: 'Make your birthday unforgettable with beautiful themes and balloon setups.',
    img: '/birthday/birthday18.jpeg',
  },
  {
    title: 'Anniversary Decoration',
    desc: 'Celebrate your special day with romantic and elegant decorations.',
    img: '/anniversary/anniversary1.jpeg',
  },
  {
    title: 'Baby Shower Decoration',
    desc: 'Welcome your little one with cute and creative themed decorations.',
    img: '/baby/baby2.jpeg',
  },
    {
  title: 'Baby Welcome Decoration',
  desc: 'Celebrate your newborn arrival with soft, adorable, and themed decorations.',
  img: '/welcome/baby20.jpeg',
},
{
  title: 'Haldi & Mehendi Decoration',
  desc: 'Add color to rituals with floral, vibrant, and traditional Haldi Mehendi setups.',
  img: '/haldi/haldi1.jpeg',
},
{
  title: 'Just Married/First Night Decoration',
  desc: 'Create a romantic ambiance with elegant decor for your special first night.',
  img: '/married/married1.jpeg',
},
{
  title: 'Get Together/Party Setup Decoration',
  desc: 'Enjoy stylish and fun party setups perfect for gatherings and celebrations.',
  img: '/get/together2.jpeg',
},
{
  title: 'Naming Ceremony Decoration',
  desc: 'Make the naming day memorable with charming and graceful themed decorations.',
  img: '/naming/naming1.jpeg',
},
];

const BestWork = () => {
  const handleWhatsApp = (item) => {
    const phoneNumber = '918890058068'; // India code +91

    const message = `Hello, I am interested in ${item.title}.
Here is the decoration reference image:
${window.location.origin + item.img}

Please share more details.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <section className='bg-[#f8f6f9] py-8'>
      {/* Heading */}
      <div className='text-center mb-8 md:mb-12 px-4 lg:px-14 xl:px-16'>
        <h2 className='text-3xl md:text-4xl font-bold text-purple-900 relative inline-block'>
          Our Services
          <span className='block w-16 h-[2px] bg-purple-300 mx-auto mt-2'></span>
        </h2>
      </div>

      {/* Cards */}
      <div className='px-4 lg:px-14 xl:px-16'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {workData.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl overflow-hidden border border-gray-100 
              shadow-sm hover:shadow-xl transition-all duration-300 group'
            >
              {/* Image */}
              <div className='overflow-hidden'>
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full h-80 lg:h-70 object-center 
                  group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Content */}
              <div className='p-5 text-center'>
                <h3 className='text-xl md:text-lg font-semibold text-purple-900 mb-2'>
                  {item.title}
                </h3>

                <p className='text-[15px] text-gray-500 leading-relaxed mb-4 text-justify'>
                  {item.desc}
                </p>

                {/* <p className='text-[18px] font-semibold text-purple-900 mb-4'>
                  Contact Us For Best Price
                </p> */}

                <button
                  onClick={() => handleWhatsApp(item)}
                  className='bg-pink-500 hover:bg-pink-600 text-white 
                  text-lg px-8 cursor-pointer py-2 rounded-md transition-all duration-300'
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

export default BestWork;
