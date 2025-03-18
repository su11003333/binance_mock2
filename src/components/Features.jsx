import React from 'react';

import { FEATURES } from '../constants';

const Features = () => {
  const features = [
    {
      title: 'BNB Smart Chain',
      description:
        'The high-performance EVM-compatible blockchain with the largest ecosystem of dApps, powering a wide range of use cases from DeFi to gaming.',
      icon: '🔶',
      link: '#',
    },
    {
      title: 'BNB Beacon Chain',
      description:
        'The governance layer of the BNB Chain ecosystem, responsible for staking and the BNB token economy.',
      icon: '⛓️',
      link: '#',
    },
    {
      title: 'opBNB',
      description:
        'A Layer 2 scaling solution for BNB Chain that ensures faster transactions and lower fees for high-volume applications.',
      icon: '🚀',
      link: '#',
    },
    {
      title: 'BNB Greenfield',
      description:
        'Decentralized data economy infrastructure designed for storing, computing, and sharing large-scale data.',
      icon: '🌱',
      link: '#',
    },
  ];

  return (
    <div className='bg-bnb-gray py-12 sm:py-16 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl'>
            The BNB Chain Ecosystem
          </h2>
          <p className='mx-auto mt-3 max-w-3xl text-base text-gray-300 sm:mt-4 sm:text-lg'>
            A comprehensive blockchain infrastructure that offers solutions for developers and users
            at any scale.
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <div key={index} className='group relative'>
              <div className='bg-bnb-hover-gray border-bnb-light-gray/20 hover:border-bnb-yellow/50 relative h-full transform overflow-hidden rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6'>
                <div className='flex h-full flex-col'>
                  <div className='mb-3 text-2xl sm:mb-4 sm:text-3xl'>{feature.icon}</div>
                  <h3 className='mb-2 text-lg font-bold text-white sm:text-xl'>{feature.title}</h3>
                  <p className='mb-4 flex-grow text-sm text-gray-300 sm:mb-6 sm:text-base'>
                    {feature.description}
                  </p>
                  <div>
                    <a
                      href={feature.link}
                      className='text-bnb-yellow flex items-center text-sm font-medium hover:text-yellow-400 sm:text-base'
                    >
                      Learn more
                      <svg
                        className='ml-1 h-4 w-4 sm:h-5 sm:w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 sm:mt-16 md:mt-20'>
          <div className='from-bnb-hover-gray to-bnb-gray border-bnb-light-gray/20 overflow-hidden rounded-xl border bg-gradient-to-r'>
            <div className='px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-16 lg:py-16'>
              <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16'>
                <div className='lg:w-1/2'>
                  <h3 className='text-xl font-bold text-white sm:text-2xl'>Build on BNB Chain</h3>
                  <p className='mt-3 text-base text-gray-300 sm:mt-4 sm:text-lg'>
                    Join thousands of developers building the future of Web3 on BNB Chain. From
                    comprehensive documentation to funding opportunities, we provide everything you
                    need to succeed.
                  </p>
                  <div className='mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row'>
                    <a
                      href='#'
                      className='bg-bnb-yellow w-full rounded-md px-5 py-3 text-center text-base font-medium text-black transition duration-300 hover:bg-yellow-500 sm:w-auto'
                    >
                      Developer Portal
                    </a>
                    <a
                      href='#'
                      className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow w-full rounded-md border px-5 py-3 text-center text-base font-medium transition duration-300 hover:text-black sm:w-auto'
                    >
                      Get Funding
                    </a>
                  </div>
                </div>
                <div className='relative lg:w-1/2'>
                  <img
                    src='/api/placeholder/500/300'
                    alt='Developer Resources'
                    className='h-auto w-full rounded-lg shadow-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
