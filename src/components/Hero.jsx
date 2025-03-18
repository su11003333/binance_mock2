import React from 'react';

import { SITE_DESCRIPTION, SITE_NAME } from '../constants';

const Hero = () => {
  return (
    <div className='relative overflow-hidden pt-16' style={{ backgroundColor: '#0A0E13' }}>
      {/* Background elements - responsive and mobile-first */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 transform'>
          <div className='from-bnb-yellow/20 h-[300px] w-[300px] rounded-full bg-gradient-to-r to-yellow-500/5 opacity-30 blur-3xl sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]'></div>
        </div>
        <div className='absolute bottom-0 -left-20'>
          <div className='from-bnb-yellow/10 h-[100px] w-[100px] rounded-full bg-gradient-to-r to-yellow-500/5 opacity-20 blur-xl sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px]'></div>
        </div>
        <div className='absolute top-1/3 right-0'>
          <div className='from-bnb-yellow/10 h-[150px] w-[150px] rounded-full bg-gradient-to-r to-yellow-500/5 opacity-20 blur-xl sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px]'></div>
        </div>
      </div>

      <div className='relative container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          {/* Text content - stacks vertically on mobile, side by side on desktop */}
          {/* Text content - stacks vertically on mobile, side by side on desktop */}
          <div className='text-center lg:w-1/2 lg:pr-8 lg:text-left'>
            <h1 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
              <span className='block'>虛擬貨幣的</span>
              <span className='text-bnb-yellow mt-2 block'>最佳轉移平台</span>
            </h1>
            <p className='mx-auto mt-4 max-w-3xl text-base text-gray-300 sm:mt-6 sm:text-lg md:text-xl lg:mx-0'>
              {SITE_DESCRIPTION}
              ，支援多鏈交易、去中心化金融和遊戲，為您打造無縫銜接的數位資產轉移體驗。
            </p>
            <div className='mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row lg:justify-start'>
              <a
                href='#'
                className='bg-bnb-yellow w-full rounded-md px-6 py-3 text-base font-medium text-black transition duration-300 hover:bg-yellow-500 sm:w-auto'
              >
                立即開始
              </a>
              <a
                href='#'
                className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow w-full rounded-md border px-6 py-3 text-base font-medium transition duration-300 hover:text-black sm:w-auto'
              >
                探索生態系統
              </a>
            </div>
          </div>

          {/* Image - responsive sizing for different devices */}
          <div className='relative mt-12 lg:mt-0 lg:w-1/2'>
            <div className='relative z-10 overflow-hidden rounded-xl shadow-2xl'>
              <picture>
                {/* Mobile image (smaller and lighter) */}
                <source
                  media='(max-width: 640px)'
                  srcSet='https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=60&w=480&ixlib=rb-4.0.3'
                />
                {/* Tablet image (medium size and quality) */}
                <source
                  media='(max-width: 1024px)'
                  srcSet='https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=70&w=800&ixlib=rb-4.0.3'
                />
                {/* Desktop image (higher quality) */}
                <img
                  src='https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=1200&ixlib=rb-4.0.3'
                  alt='虛擬幣小幫手生態系統'
                  className='animate-float h-auto max-h-[280px] w-full object-cover sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px]'
                  loading='eager'
                />
              </picture>
            </div>
            <div className='from-bnb-yellow/10 absolute inset-0 -z-0 scale-95 transform rounded-xl bg-gradient-to-r to-yellow-600/5 opacity-50 blur-xl'></div>
          </div>
        </div>

        {/* Partners section - scrollable on mobile, wrapped on desktop */}
        {/* Partners section - responsive grid layout */}
        <div className='mt-12 sm:mt-16 md:mt-20'>
          <h3 className='mb-5 text-center text-lg font-medium text-gray-300'>
            受到頂尖區塊鏈企業的信任
          </h3>
          <div className='grid grid-cols-3 place-items-center gap-4 sm:grid-cols-5 md:gap-8'>
            <div className='partner-logo-container'>
              <img
                src='https://cryptologos.cc/logos/polygon-matic-logo.png'
                alt='合作夥伴 1'
                className='h-7 w-auto max-w-[80px] object-contain grayscale transition duration-300 hover:grayscale-0 sm:h-8 sm:max-w-[120px]'
              />
            </div>
            <div className='partner-logo-container'>
              <img
                src='https://cryptologos.cc/logos/avalanche-avax-logo.png'
                alt='合作夥伴 2'
                className='h-7 w-auto max-w-[80px] object-contain grayscale transition duration-300 hover:grayscale-0 sm:h-8 sm:max-w-[120px]'
              />
            </div>
            <div className='partner-logo-container'>
              <img
                src='https://cryptologos.cc/logos/chainlink-link-logo.png'
                alt='合作夥伴 3'
                className='h-7 w-auto max-w-[80px] object-contain grayscale transition duration-300 hover:grayscale-0 sm:h-8 sm:max-w-[120px]'
              />
            </div>
            <div className='partner-logo-container hidden sm:block'>
              <img
                src='https://cryptologos.cc/logos/uniswap-uni-logo.png'
                alt='合作夥伴 4'
                className='h-7 w-auto max-w-[80px] object-contain grayscale transition duration-300 hover:grayscale-0 sm:h-8 sm:max-w-[120px]'
              />
            </div>
            <div className='partner-logo-container hidden sm:block'>
              <img
                src='https://cryptologos.cc/logos/aave-aave-logo.png'
                alt='合作夥伴 5'
                className='h-7 w-auto max-w-[80px] object-contain grayscale transition duration-300 hover:grayscale-0 sm:h-8 sm:max-w-[120px]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
