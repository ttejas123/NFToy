import React from 'react';

import { useRouter } from 'next/router';

import { AppConfig } from '../../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  dark?: boolean;
};

const Logo = (props: ILogoProps) => {
  const router = useRouter();
  const navSize = props.dark ? 'w-24' : 'w-44';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`${
        props.dark ? 'text-gray-900' : 'text-white'
      } inline-flex items-center ${fontStyle} ${AppConfig.className}`}
    >
      <img
        alt="img1"
        src={`${router.basePath}/assets/images/IconNdTitle.png`}
        className={`${navSize} transition-all mr-3`}
      />

      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
