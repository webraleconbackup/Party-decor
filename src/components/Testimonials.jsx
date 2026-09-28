import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ajay Gupta",
    city: "Gurgaon",
    message:
      "Party Decor transformed our baby shower into a beautiful and memorable celebration with stunning decorations.",
  },
  {
    name: "Tanvi Arora",
    city: "Gurgaon",
    message:
      "The team at Party Decor created a magical wedding setup with amazing creativity and perfect attention to detail.",
  },
  {
    name: "Ravi Garg",
    city: "Gurgaon",
    message:
      "We loved the birthday decoration by Party Decor. Everything was elegant, colorful, and perfectly organized.",
  },
  {
    name: "Sunil Kaur",
    city: "Gurgaon",
    message:
      "Party Decor made our anniversary celebration truly special with their classy décor and wonderful ambiance.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show only 3 cards
  const visibleTestimonials = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="w-full bg-[#f2f2f2] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl text-purple-900 font-bold mb-14">
          Our Clients Say!
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {visibleTestimonials.map((item, index) => {
            const active = index === 1;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  active ? "scale-100" : "scale-95"
                }`}
              >
                {/* Name */}
                <h3 className="text-2xl font-bold text-black">
                  {item.name}
                </h3>

                {/* City */}
                <p className="text-gray-500 text-xl mt-1 mb-6">
                  {item.city}
                </p>

                {/* Message Box */}
                <div
                  className={`p-8 min-h-[180px] flex items-center justify-center text-center transition-all duration-500
                  ${
                    active
                      ? "bg-red-600 text-white"
                      : "bg-[#e9e9e9] text-gray-500"
                  }`}
                >
                  <p className="text-lg leading-10">{item.message}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 border border-gray-400 transition-all duration-300
                ${current === index ? "bg-red-600 border-red-600" : "bg-white"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;