import React from 'react';

import { useRouter } from 'next/router';

import { AppConfig } from '../../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  dark?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const size = props.xl ? 'w-12' : 'w-8';
  const navSize = props.dark ? 'w-9' : 'w-16';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`${
        props.dark ? 'text-gray-900' : 'text-white'
      } inline-flex items-center ${fontStyle} ${AppConfig.className}`}
    >
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}
      <img
        src={`${router.basePath}/assets/images/NFTOY_HERO_MAIN-YELLOW.png`}
        className={`${size} ${navSize} transition-all mr-3`}
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };