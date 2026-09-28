import React from "react";

const packages = [
  {
    title: "BASIC",
    price: "₹1,999",
    features: [
      "Basic decoration",
      "Balloon setup",
      "Back drop",
      "Standard props",
    ],
    highlight: false,
  },
  {
    title: "STANDARD",
    price: "₹4,999",
    features: [
      "Theme decoration",
      "Balloon arch / garland",
      "Premium props",
      "Table / cake setup",
    ],
    highlight: true,
  },
  {
    title: "PREMIUM",
    price: "₹9,999",
    features: [
      "Luxury decoration",
      "Customized theme",
      "Premium props",
      "Full room / venue decor",
    ],
    highlight: false,
  },
];

const Packages = () => {

  // WhatsApp handler
  const handleWhatsApp = (pkgTitle) => {
    const phone = "918890058068";
    const message = `Hello, I want to book the ${pkgTitle} package. Please share more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-[#f7f4f8] py-8 px-4 lg:px-14 xl:px-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-purple-900">
          Our Popular Packages
        </h2>
        <div className="w-24 h-[2px] bg-purple-300 mx-auto mt-3"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
              pkg.highlight
                ? "bg-gradient-to-b from-purple-900 to-purple-700 text-white scale-105"
                : "bg-white text-gray-800"
            }`}
          >

            {/* Ribbon */}
            {pkg.highlight && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-xs px-3 py-1 font-semibold rounded-bl-lg">
                MOST POPULAR
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-2">
              {pkg.title}
              <span className="block text-sm font-medium">PACKAGE</span>
            </h3>

            {/* Price */}
            <p className="text-center text-3xl font-bold mt-4">
              {pkg.price}
              <span className="block text-sm font-medium mt-1">
                Onwards
              </span>
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 flex-grow">
              {pkg.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => handleWhatsApp(pkg.title)}
              className={`w-full mt-8 py-3 rounded-lg font-semibold transition cursor-pointer ${
                pkg.highlight
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "bg-purple-900 text-white hover:bg-purple-800"
              }`}
            >
              BOOK NOW
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 bg-purple-950 text-white rounded-xl py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold">5000+</h3>
          <p className="text-sm">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">4.9/5</h3>
          <p className="text-sm">Google Rating</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Trusted</h3>
          <p className="text-sm">& Verified Service</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Delhi NCR</h3>
          <p className="text-sm">Service Available</p>
        </div>
      </div>

    </div>
  );
};

export default Packages;