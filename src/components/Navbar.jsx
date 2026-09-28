import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoCallSharp } from 'react-icons/io5';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workList = [
    { label: 'Birthday Decoration', link: '/birthday-decoration' },
    { label: 'Anniversary Decoration', link: '/anniversary-decoration' },
    { label: 'Baby Shower Decoration', link: '/baby-shower-decoration' },
    { label: 'Baby Welcome Decoration', link: '/baby-welcome-decoration' },
    { label: 'Just Married Decoration', link: '/just-married-decoration' },
    { label: 'Naming Ceremony Decoration', link: '/naming-ceremony-decoration' },
    { label: 'Get Together Decoration', link: '/get-together-decoration' },
    { label: 'Haldi Decoration', link: '/haldi-decoration' },
  ];

  // ONLY CURRENT TEXT COLOR CHANGED
  const activeClass = ({ isActive }) =>
    `relative transition-all duration-300 font-bold tracking-wide after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#78287D] after:transition-all after:duration-300 ${
      isActive
        ? 'text-[#78287D] after:w-0'
        : 'text-gray-800 hover:text-[#78287D] after:w-0 hover:after:w-full'
    }`;

  return (
    <header className='fixed top-0 left-0 w-full z-50 transition-all duration-500'>
      
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 bg-[#FAFAFA]/95 backdrop-blur-xl border-b border-white/20 transition-all duration-500 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      ></div>

      {/* NAVBAR */}
      <div
        className={`relative max-w-[1450px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 transition-all duration-500 ${
          scrolled ? 'py-1' : 'py-3'
        }`}
      >
        
        {/* LOGO */}
        <Link to='/' className='flex items-center z-10'>
          <img
            src='/logo/logo.jpeg'
            alt='Logo'
            className={`object-center transition-all duration-500 ${
              scrolled ? 'h-20 w-36 lg:h-16 lg:w-32' : 'h-36 w-60 lg:h-30 lg:w-50'
            }`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className='hidden lg:flex items-center gap-10 text-[15px] xl:text-[16px]'>
          
          <NavLink to='/' className={activeClass}>
            HOME
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className='relative'
            onMouseEnter={() => setDesktopDropdown(true)}
            onMouseLeave={() => setDesktopDropdown(false)}
          >
            <button className='flex items-center gap-1 font-bold text-gray-800 hover:text-[#78287D] transition-all duration-300 group'>
              
              <span className='relative text-gray-800 hover:text-[#78287D]'>
                SERVICES

                <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-[#78287D] transition-all duration-300 group-hover:w-full'></span>
              </span>

              <ChevronDown
                size={18}
                className={`transition-all duration-300 ${
                  desktopDropdown ? 'rotate-180 text-[#78287D]' : ''
                }`}
              />
            </button>

            {/* DROPDOWN */}
            <div
              className={`absolute left-1/2 top-6 -translate-x-1/2 w-[320px] ${
                desktopDropdown
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-4'
              }`}
            >
              <div className='relative overflow-hidden bg-white backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,0.12)] p-3'>
                
                {/* <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#78287D] via-pink-500 to-[#78287D]'></div> */}

                <div className='space-y-1'>
                  {workList.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.link}
                      className='group flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-semibold text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#78287D] hover:to-pink-500 hover:text-white hover:shadow-lg'
                    >
                      <span className='transition-all duration-300 group-hover:translate-x-1'>
                        {item.label}
                      </span>

                      <span className='opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                        →
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to='/gallery' className={activeClass}>
            GALLERY
          </NavLink>

          <NavLink to='/aboutus' className={activeClass}>
            ABOUT US
          </NavLink>

          <NavLink to='/contactus' className={activeClass}>
            CONTACT US
          </NavLink>
        </nav>

        {/* CONTACT */}
        <div
          className={`hidden lg:flex items-center gap-3 bg-[#78287D]/10 border border-[#78287D]/20 rounded-full backdrop-blur-md transition-all duration-500 ${
            scrolled ? 'px-3 py-1.5' : 'px-4 py-2'
          }`}
        >
          <div className='bg-gradient-to-r from-[#78287D] to-pink-500 p-2 rounded-full shadow-md'>
            <IoCallSharp className='text-white text-lg' />
          </div>

          <p className='text-[#78287D] font-bold text-[15px] xl:text-[16px]'>
            +91 8890058068
          </p>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className='lg:hidden z-20 bg-white shadow-md rounded-xl p-2 border border-gray-200'
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='bg-white/95 backdrop-blur-xl border-t shadow-2xl px-6 py-8'>
          
          <nav className='flex flex-col space-y-5 text-[17px] font-bold'>
            
            <NavLink
              to='/'
              onClick={toggleMenu}
              className={activeClass}
            >
              HOME
            </NavLink>

            {/* MOBILE DROPDOWN */}
            <div>
              <button
                onClick={() => setOpenWork(!openWork)}
                className='flex items-center justify-between w-full text-left font-bold text-gray-800'
              >
                SERVICES

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openWork ? 'rotate-180 text-[#78287D]' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openWork
                    ? 'max-h-[500px] opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className='ml-2 border-l-2 border-[#78287D]/30 pl-4 space-y-2'>
                  {workList.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.link}
                      onClick={toggleMenu}
                      className='block rounded-xl px-4 py-3 text-[15px] font-semibold text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#78287D] hover:to-pink-500 hover:text-white'
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to='/gallery'
              onClick={toggleMenu}
              className={activeClass}
            >
              GALLERY
            </NavLink>

            <NavLink
              to='/contactus'
              onClick={toggleMenu}
              className={activeClass}
            >
              CONTACT US
            </NavLink>

            <NavLink
              to='/aboutus'
              onClick={toggleMenu}
              className={activeClass}
            >
              ABOUT US
            </NavLink>

            {/* SOCIAL */}
            <div className='flex items-center gap-5 pt-6'>
              
              <a
                href='/'
                className='bg-gradient-to-r from-[#78287D] to-pink-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300'
              >
                <FaInstagram className='text-lg' />
              </a>

              <a
                href='/'
                className='bg-gradient-to-r from-[#25D366] to-green-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300'
              >
                <FaWhatsapp className='text-lg' />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;