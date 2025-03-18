import React from 'react';

import { STATS } from '../constants';

const Stats = () => {
  return (
    <div
      className='py-12 sm:py-16 md:py-24'
      style={{ background: 'linear-gradient(to bottom, #0A0E13, #1E2026)' }}
    >
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl'>
            推動虛擬經濟的發展
          </h2>
          <p className='mx-auto mt-3 max-w-3xl text-base leading-6 text-gray-300 sm:mt-4 sm:text-lg'>
            我們結合高吞吐量與低費用的優勢，使區塊鏈技術能夠在全球範圍內得到廣泛採用。
          </p>
        </div>

        <div className='mt-10 sm:mt-16'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4'>
            {STATS.map((stat, index) => (
              <div
                key={index}
                className='bg-bnb-hover-gray border-bnb-light-gray/20 hover:border-bnb-yellow/50 transform rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex flex-col items-center sm:items-start'>
                  <p className='text-bnb-yellow text-3xl font-bold sm:text-4xl'>{stat.value}</p>
                  <p className='mt-2 text-sm text-gray-300 sm:text-base'>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 flex justify-center sm:mt-16'>
          <a
            href='#'
            className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow inline-flex w-full max-w-xs items-center justify-center rounded-md border bg-transparent px-6 py-3 text-base font-medium transition-colors duration-300 hover:text-black sm:w-auto sm:max-w-none'
          >
            查看交易記錄
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
