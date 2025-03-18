import React from 'react';

const Community = () => {
  const communities = [
    {
      name: 'Discord',
      description: '加入我們的 Discord 社群，參與討論、獲取支援和接收官方公告。',
      icon: '💬',
      link: '#',
    },
    {
      name: 'Twitter',
      description: '關注我們獲取最新消息和虛擬幣小幫手的動態更新。',
      icon: '🐦',
      link: '#',
    },
    {
      name: 'Telegram',
      description: '連接全球虛擬幣小幫手社群，支援多種語言交流。',
      icon: '📱',
      link: '#',
    },
    {
      name: '討論區',
      description: '參與治理討論和技術提案，共同決定平台未來發展方向。',
      icon: '📝',
      link: '#',
    },
  ];

  const events = [
    {
      title: '虛擬幣交易大賽',
      date: '2025年6月15-30日',
      location: '線上活動',
      image:
        'https://images.unsplash.com/photo-1591522810850-58128c8191c9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    },
    {
      title: '開發者大會',
      date: '2025年7月10-12日',
      location: '台北',
      image:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    },
    {
      title: 'Web3高峰會',
      date: '2025年8月5-7日',
      location: '香港',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3',
    },
  ];

  return (
    <div
      className='py-12 sm:py-16 md:py-24 lg:py-32'
      style={{ background: 'linear-gradient(to bottom, #1E2026, #0A0E13)' }}
    >
      <div className='container mx-auto px-4'>
        {/* Community Section */}
        <div className='text-center'>
          <h2 className='text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl'>
            加入我們的社群
          </h2>
          <p className='mx-auto mt-3 max-w-3xl text-base text-gray-300 sm:mt-4 sm:text-lg'>
            與開發者、用戶和愛好者一起探討虛擬貨幣的未來。
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-4'>
          {communities.map((community, index) => (
            <a
              key={index}
              href={community.link}
              className='bg-bnb-hover-gray border-bnb-light-gray/20 hover:border-bnb-yellow/50 flex h-full transform flex-col rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-6'
            >
              <div className='mb-3 text-2xl sm:mb-4 sm:text-3xl'>{community.icon}</div>
              <h3 className='mb-2 text-lg font-bold text-white sm:text-xl'>{community.name}</h3>
              <p className='flex-grow text-sm text-gray-300 sm:text-base'>
                {community.description}
              </p>
              <div className='text-bnb-yellow mt-4 text-sm font-medium sm:text-base'>
                立即加入 →
              </div>
            </a>
          ))}
        </div>

        {/* Events Section */}
        <div className='mt-16 sm:mt-20 md:mt-24'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl'>
              即將舉行的活動
            </h2>
            <p className='mx-auto mt-3 max-w-3xl text-base text-gray-300 sm:mt-4 sm:text-lg'>
              參加這些即將舉行的活動，親身體驗並與我們的團隊和社群互動。
            </p>
          </div>

          <div className='mt-8 sm:mt-10 md:mt-12'>
            {/* Scrollable cards on mobile, grid on desktop */}
            <div className='hide-scrollbar flex overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3'>
              {events.map((event, index) => (
                <div
                  key={index}
                  className='mx-2 w-80 flex-shrink-0 first:ml-4 last:mr-4 sm:mx-0 sm:w-auto'
                >
                  <div className='bg-bnb-hover-gray border-bnb-light-gray/20 hover:border-bnb-yellow/50 h-full transform overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1'>
                    <div className='h-48 overflow-hidden'>
                      <img
                        src={event.image}
                        alt={event.title}
                        className='h-full w-full object-cover'
                      />
                    </div>
                    <div className='p-5'>
                      <h3 className='text-lg font-bold text-white'>{event.title}</h3>
                      <div className='text-bnb-lighter-gray mt-2 text-sm'>
                        <div className='flex items-center'>
                          <span className='mr-2'>📅</span>
                          <span>{event.date}</span>
                        </div>
                        <div className='mt-1 flex items-center'>
                          <span className='mr-2'>📍</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <a
                          href='#'
                          className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-black'
                        >
                          了解更多
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-8 text-center sm:mt-10'>
            <a
              href='#'
              className='border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow inline-flex items-center rounded-md border px-5 py-3 text-base font-medium transition-all duration-300 hover:text-black'
            >
              查看所有活動
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className='bg-bnb-hover-gray border-bnb-light-gray/20 mt-16 overflow-hidden rounded-xl border sm:mt-20 md:mt-24'>
          <div className='p-6 sm:p-8 md:p-10'>
            <div className='mx-auto max-w-3xl text-center'>
              <h3 className='text-xl font-bold text-white sm:text-2xl'>訂閱最新消息</h3>
              <p className='mt-3 text-base text-gray-300'>
                訂閱我們的電子報，獲取虛擬幣小幫手的最新動態、新聞和公告。
              </p>
              <form className='mx-auto mt-6 flex max-w-md flex-col gap-3 sm:mt-8 sm:flex-row'>
                <input
                  type='email'
                  placeholder='輸入您的電子郵件'
                  className='bg-bnb-gray border-bnb-light-gray/50 focus:ring-bnb-yellow flex-grow rounded-md border px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:outline-none'
                  required
                />
                <button
                  type='submit'
                  className='bg-bnb-yellow rounded-md px-6 py-3 font-medium text-black transition duration-300 hover:bg-yellow-500'
                >
                  訂閱
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
