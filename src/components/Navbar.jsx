import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar = ({ scrollPosition, isMenuOpen, setIsMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns when toggling the mobile menu
  useEffect(() => {
    closeAllDropdowns();
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed z-50 w-full transition-all duration-300 ${scrollPosition > 10 ? 'shadow-bnb' : 'bg-transparent'}`}
      style={{ backgroundColor: scrollPosition > 10 ? '#0A0E13' : 'transparent' }}
    >
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='#' className='block'>
              <Logo size='sm' />
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className='hidden lg:block'>
            <div className='flex items-center space-x-6'>
              {NAV_ITEMS.map((item, index) => (
                <div key={index} className='relative'>
                  <button
                    className='hover:text-bnb-yellow flex items-center text-white'
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(index);
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className='ml-1' />
                  </button>

                  {activeDropdown === index && (
                    <div className='bg-bnb-gray ring-opacity-5 absolute left-0 mt-2 w-48 rounded-md ring-1 shadow-lg ring-black'>
                      <div className='py-1'>
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className='hover:bg-bnb-hover-gray hover:text-bnb-yellow block px-4 py-2 text-sm text-white'
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Hidden on mobile */}
          <div className='hidden items-center space-x-4 lg:flex'>
            <a
              href='#'
              className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow rounded-md border px-4 py-2 transition duration-300 hover:text-black'
            >
              立即開始
            </a>
            <a
              href='#'
              className='bg-bnb-yellow rounded-md px-4 py-2 text-black transition duration-300 hover:bg-yellow-500'
            >
              兌換虛擬幣
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='hover:text-bnb-yellow inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none'
              aria-expanded={isMenuOpen}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide in from the right */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='bg-opacity-50 absolute inset-0 bg-black' onClick={toggleMenu}></div>
        <div className='bg-bnb-gray absolute top-0 right-0 h-full w-4/5 max-w-sm transform overflow-y-auto shadow-xl transition-all'>
          <div className='border-bnb-light-gray/20 flex items-center justify-between border-b p-4'>
            <div className='flex items-center'>
              <Logo size='sm' />
            </div>
            <button
              onClick={toggleMenu}
              className='hover:text-bnb-yellow rounded-md p-2 text-white focus:outline-none'
            >
              <X size={24} />
            </button>
          </div>

          <div className='p-4'>
            {NAV_ITEMS.map((item, index) => (
              <div key={index} className='border-bnb-light-gray/10 border-b py-2'>
                <button
                  className='hover:bg-bnb-hover-gray flex w-full items-center justify-between rounded-md px-2 py-2 text-white'
                  onClick={() => toggleDropdown(index)}
                >
                  <span className='font-medium'>{item.name}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === index ? 'rotate-180 transform' : ''}`}
                  />
                </button>

                {activeDropdown === index && (
                  <div className='mt-1 ml-4 space-y-1'>
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <a
                        key={dropdownIndex}
                        href={dropdownItem.link}
                        className='hover:bg-bnb-hover-gray flex items-center rounded-md px-2 py-2 text-sm text-white'
                      >
                        <ChevronRight size={14} className='text-bnb-lighter-gray mr-2' />
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className='mt-6 flex flex-col space-y-3'>
              <a
                href='#'
                className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow w-full rounded-md border px-4 py-3 text-center transition duration-300 hover:text-black'
              >
                立即開始
              </a>
              <a
                href='#'
                className='bg-bnb-yellow w-full rounded-md px-4 py-3 text-center text-black transition duration-300 hover:bg-yellow-500'
              >
                兌換虛擬幣
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
