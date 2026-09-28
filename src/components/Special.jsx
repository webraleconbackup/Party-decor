import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Birthday",
    subtitle: "Decoration",
    image: "/birthday/birthday21.jpeg",
    link: "/birthday-decoration",
  },
  {
    title: "Anniversary",
    subtitle: "Decoration",
    image: "/birthday/birthday11.jpeg",
    link: "/anniversary-decoration",
  },
  {
    title: "Baby Shower",
    subtitle: "Decoration",
    image: "/baby/baby13.jpeg",
    link: "/baby-shower-decoration",
  },
  {
    title: "Welcome Baby",
    subtitle: "Decoration",
    image: "/welcome/baby20.jpeg",
    link: "/baby-welcome-decoration",
  },
  {
    title: "Naming Ceremony",
    subtitle: "Decoration",
    image: "/naming/name11.jpeg",
    link: "/naming-ceremony-decoration",
  },
  {
    title: "Haldi/Mehendi",
    subtitle: "Decoration",
    image: "/haldi/haldi6.jpg",
    link: "/haldi-decoration",
  },
  {
    title: "Just Married",
    subtitle: "Decoration",
    image: "/married/married1.jpeg",
    link: "/just-married-decoration",
  },
  {
    title: "Get Together",
    subtitle: "Party Setup",
    image: "/get/get4.jpeg",
    link: "/get-together-decoration",
  },
];

const features = [
  {
    title: "Customized Themes",
    subtitle: "As per your budget",
  },
  {
    title: "Quality Materials",
    subtitle: "Premium props",
  },
  {
    title: "Professional Team",
    subtitle: "Punctual service",
  },
  {
    title: "Affordable Price",
    subtitle: "Best packages",
  },
  {
    title: "Magical Memories",
    subtitle: "From start to finish",
  },
];

const Special = () => {
  const whatsappNumber = "918890058068";

  return (
    <div className="w-full bg-gray-50 py-6 md:py-8">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-900">
          We Decorate All Your Special Moments
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-8xl mx-auto px-4 lg:px-14 xl:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-6 place-items-center">
          {services.map((item, index) => {
            const message = `Hello! I would like to book ${item.title} Decoration please share the available decoration packages`;

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              message
            )}`;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                {/* Round Image Box */}
                <Link to={item.link}>
                  <div
                    className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-purple-300 shadow-lg 
                    hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  </div>
                </Link>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">{item.subtitle}</p>

                {/* Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-5 py-2 rounded-full bg-gradient-to-r 
                  from-pink-500 to-purple-600 text-white text-sm font-semibold 
                  shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="mt-10 md:mt-14 bg-gradient-to-r from-purple-900 to-purple-800 py-14">
        <div className="max-w-8xl mx-auto px-4 lg:px-14 xl:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl">✦</span>

                <div>
                  <h4 className="font-semibold text-sm md:text-base">
                    {item.title}
                  </h4>

                  <p className="text-xs md:text-sm text-gray-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;