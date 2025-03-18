import React, { useEffect, useRef, useState } from 'react';

const Ecosystem = () => {
  const categories = ['全部', 'DeFi', '遊戲', 'NFT', '基礎設施', '錢包', '元宇宙'];

  const [activeCategory, setActiveCategory] = useState('全部');
  const scrollRef = useRef(null);

  const projects = [
    {
      name: 'PancakeSwap',
      category: 'DeFi',
      logo: 'https://cryptologos.cc/logos/pancakeswap-cake-logo.png',
    },
    {
      name: 'Stargate',
      category: '遊戲',
      logo: 'https://cryptologos.cc/logos/stargate-finance-stg-logo.png',
    },
    {
      name: 'CryptoBlades',
      category: '遊戲',
      logo: 'https://cryptologos.cc/logos/cryptoblades-skill-logo.png',
    },
    {
      name: 'Venus Protocol',
      category: 'DeFi',
      logo: 'https://cryptologos.cc/logos/venus-xvs-logo.png',
    },
    {
      name: 'BakerySwap',
      category: 'DeFi',
      logo: 'https://cryptologos.cc/logos/bakerytoken-bake-logo.png',
    },
    {
      name: 'OpenSea',
      category: 'NFT',
      logo: 'https://www.pngall.com/wp-content/uploads/13/Opensea-NFT-Logo-PNG-Image.png',
    },
    {
      name: 'TrustWallet',
      category: '錢包',
      logo: 'https://cryptologos.cc/logos/trust-wallet-token-twt-logo.png',
    },
    {
      name: 'The Sandbox',
      category: '元宇宙',
      logo: 'https://cryptologos.cc/logos/the-sandbox-sand-logo.png',
    },
    { name: 'Ankr', category: '基礎設施', logo: 'https://cryptologos.cc/logos/ankr-ankr-logo.png' },
    {
      name: 'Binance NFT',
      category: 'NFT',
      logo: 'https://public.bnbstatic.com/static/images/common/ogImage.jpg',
    },
    { name: 'Biswap', category: 'DeFi', logo: 'https://cryptologos.cc/logos/biswap-bsw-logo.png' },
    { name: 'MOBOX', category: '遊戲', logo: 'https://cryptologos.cc/logos/mobox-mbox-logo.png' },
  ];

  const filteredProjects =
    activeCategory === '全部'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Scroll to start of category tabs when changing
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [activeCategory]);

  return (
    <div className='py-12 sm:py-16 md:py-24 lg:py-32' style={{ backgroundColor: '#0A0E13' }}>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl'>
            探索我們的生態系統
          </h2>
          <p className='mx-auto mt-3 max-w-3xl text-base text-gray-300 sm:mt-4 sm:text-lg'>
            發現在我們平台上使用的多樣化項目和應用程式。
          </p>
        </div>

        {/* Horizontally scrollable category tabs on mobile */}
        <div className='mt-8 sm:mt-10 md:mt-12'>
          <div
            ref={scrollRef}
            className='hide-scrollbar flex overflow-x-auto pb-2 md:flex-wrap md:justify-center'
          >
            <div className='inline-flex flex-nowrap gap-2 p-1 md:flex-wrap'>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? 'bg-bnb-yellow text-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive grid of projects */}
        <div className='xs:grid-cols-3 mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 md:gap-6 lg:grid-cols-6'>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className='bg-bnb-hover-gray hover:border-bnb-yellow/50 flex transform flex-col items-center rounded-xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 sm:p-4'
            >
              <div className='mb-2 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/20 sm:mb-3 sm:h-12 sm:w-12'>
                <img
                  src={project.logo}
                  alt={project.name}
                  className='h-8 w-8 object-contain sm:h-10 sm:w-10'
                />
              </div>
              <h3 className='text-center text-sm font-medium text-white sm:text-base'>
                {project.name}
              </h3>
              <span className='text-bnb-lighter-gray mt-1 text-xs'>{project.category}</span>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className='mt-10 text-center sm:mt-12'>
          <a
            href='#'
            className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow inline-flex items-center rounded-md border px-5 py-3 text-base font-medium transition-all duration-300 hover:text-black'
          >
            查看所有項目
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
