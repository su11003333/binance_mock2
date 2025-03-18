import React from 'react';

import { FOOTER_LINKS, SOCIAL_LINKS } from '../constants';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer
      className='border-bnb-light-gray/20 border-t pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-20'
      style={{ backgroundColor: '#0A0E13' }}
    >
      <div className='container mx-auto px-4'>
        {/* Footer top - Logo and links */}
        <div className='grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-5'>
          {/* Logo and social links */}
          <div className='md:col-span-1'>
            <div>
              <a href='#' className='inline-block'>
                <Logo size='md' />
              </a>
              <p className='mt-4 text-sm text-gray-400'>
                虛擬貨幣轉移的最佳選擇，為數位資產提供安全、快速的跨平台轉移服務。
              </p>
            </div>

            {/* Social links */}
            <div className='mt-6 flex flex-wrap gap-4'>
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className='bg-bnb-hover-gray hover:bg-bnb-yellow flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300'
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className='h-4 w-4 object-contain' />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-4'>
            {FOOTER_LINKS.map((column, columnIndex) => (
              <div key={columnIndex}>
                <h3 className='mb-3 text-base font-bold text-white sm:mb-4'>{column.title}</h3>
                <ul className='space-y-2 text-sm'>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className='hover:text-bnb-yellow text-gray-400 transition-colors duration-300'
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal divider */}
        <div className='border-bnb-light-gray/10 my-8 border-t'></div>

        {/* Footer bottom - Copyright and additional links */}
        <div className='flex flex-col justify-between gap-4 sm:flex-row sm:items-center'>
          <div className='text-xs text-gray-500'>
            © {new Date().getFullYear()} 虛擬幣小幫手. 保留所有權利.
          </div>

          <div className='flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500'>
            <a href='#' className='hover:text-bnb-yellow transition-colors duration-300'>
              隱私政策
            </a>
            <a href='#' className='hover:text-bnb-yellow transition-colors duration-300'>
              服務條款
            </a>
            <a href='#' className='hover:text-bnb-yellow transition-colors duration-300'>
              Cookie 政策
            </a>
            <a href='#' className='hover:text-bnb-yellow transition-colors duration-300'>
              免責聲明
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
