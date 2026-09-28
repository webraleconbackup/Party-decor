import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#e9e4e6] border-t border-yellow-400">
      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-[#2d0b2f] mb-3">
            Party Decor Expert
          </h2>
          <p className="text-[#2d0b2f] text-sm leading-relaxed max-w-xs">
            For every moment, we create magic with premium purple and gold themed decoration setups.
          </p>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-sm font-bold text-[#2d0b2f] uppercase mb-3 tracking-wide">
            Address
          </h3>
          <p className="text-[#2d0b2f] text-sm leading-6">
            Shop No. 30, Sec 9,<br />
            Gurgaon, 122001<br />
            India
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-bold text-[#2d0b2f] uppercase mb-3 tracking-wide">
            Contact
          </h3>
          <p className="text-[#2d0b2f] font-bold text-base mb-2">
            +91 8890058068
          </p>
          <p className="text-[#2d0b2f] font-semibold mb-2">
            WhatsApp Booking
          </p>
          <p className="text-[#2d0b2f] text-sm">
            Open: 9:00 AM - 9:00 PM
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-bold text-[#2d0b2f] uppercase mb-3 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#2d0b2f] font-semibold">
            <li>Services</li>
            <li>Packages</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;