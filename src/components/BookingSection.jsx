import React, { useState } from 'react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    event: 'Birthday Decoration',
    package: 'Basic Package',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const { name, event, package: pkg, phone } = formData;

    // ✅ Simple validation
    if (!name || !phone) {
      alert('Please fill Name and Phone number');
      return;
    }

    // ✅ Clean WhatsApp message
    const message = `
*🎉 New Booking Request*

👤 Name: ${name}
📞 Phone: ${phone}
🎈 Event: ${event}
📦 Package: ${pkg}

👉 Please contact me for booking details.
`;

    // ✅ Open WhatsApp
    window.open(
      `https://wa.me/918890058068?text=${encodeURIComponent(message)}`,
      '_blank',
    );
  };

  return (
    <section className='bg-[#f3eef2] py-12 px-4 lg:px-14 xl:px-20'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center'>
        {/* LEFT */}
        <div>
          <p className='text-sm font-semibold text-yellow-600 mb-3'>
            BOOK YOUR DECORATION NOW
          </p>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2b0a2e] mb-5'>
            Let’s make your <br />
            celebration unforgettable
          </h1>

          <p className='text-gray-600'>
            Choose a package or share your event details.
          </p>
        </div>

        {/* FORM */}
        <div className='bg-white rounded-xl shadow-md p-6 md:p-8'>
          <div className='grid md:grid-cols-2 gap-5'>
            {/* Name */}
            <div>
              <label className='block text-sm font-semibold mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                className='w-full border rounded-lg px-4 py-3'
              />
            </div>

            {/* Event */}
            <div>
              <label className='block text-sm font-semibold mb-2'>
                Event Type
              </label>
              <select
                name='event'
                value={formData.event}
                onChange={handleChange}
                className='w-full border rounded-lg px-4 py-3'
              >
                <option>Birthday Decoration</option>
                <option>Anniversary Decoration</option>
                <option>Baby Shower Decoration</option>
                <option>Baby Welcome Decoration</option>
                <option>Haldi & Mehendi Decoration</option>
                <option>Just Married/First Night Decoration</option>
                <option>Get Together/Party Setup Decoration</option>
                <option>Naming Ceremony Decoration</option>
              </select>
            </div>

            {/* Package */}
            <div>
              <label className='block text-sm font-semibold mb-2'>
                Preferred Package
              </label>
              <select
                name='package'
                value={formData.package}
                onChange={handleChange}
                className='w-full border rounded-lg px-4 py-3'
              >
                <option>Basic Package</option>
                <option>Standard Package</option>
                <option>Premium Package</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className='block text-sm font-semibold mb-2'>
                Mobile Number
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+91 98765 43210'
                className='w-full border rounded-lg px-4 py-3'
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleWhatsApp}
            className='w-full mt-6 cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-3 rounded-lg'
          >
            SEND ON WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
