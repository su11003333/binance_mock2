import React from 'react';

import { SITE_NAME } from '../constants';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  // 尺寸設定
  const sizes = {
    sm: { logo: 'h-6 w-6', text: 'text-lg', logoMd: 'sm:h-8 sm:w-8', textMd: 'sm:text-xl' },
    md: { logo: 'h-8 w-8', text: 'text-xl' },
    lg: { logo: 'h-10 w-10', text: 'text-2xl' },
  };

  const logoSize = sizes[size]?.logo || sizes.md.logo;
  const textSize = sizes[size]?.text || sizes.md.text;
  const logoMdSize = sizes[size]?.logoMd || '';
  const textMdSize = sizes[size]?.textMd || '';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src='https://cdn-icons-png.flaticon.com/512/825/825510.png'
        alt={SITE_NAME}
        className={`${logoSize} ${logoMdSize} object-contain`}
      />
      {showText && (
        <span className={`ml-2 ${textSize} ${textMdSize} font-bold text-white`}>{SITE_NAME}</span>
      )}
    </div>
  );
};

export default Logo;
