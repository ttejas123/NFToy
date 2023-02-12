import React, { useEffect, useState } from 'react';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

import { Logo } from '../../assets/SVG/Logo';
import { Button } from '../../components/button/Button';
import { NavbarTwoColumns } from '../../components/navigation/NavbarTwoColumns';
import { Section } from '../../layout/Section';

function Navbar() {
  const [currentPath, setCurrentPath] = useState('');
  const [styleChange, setStyleChange] = useState(false);

  const checkScrollYHeight = () => {
    if (window.scrollY > 100) {
      setStyleChange(true);
    }
    if (window.scrollY < 10) {
      setStyleChange(false);
    }
  };
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    window.addEventListener('scroll', checkScrollYHeight);

    return () => {
      window.removeEventListener('scroll', checkScrollYHeight);
    };
  }, []);

  return (
    <div
      className={`sticky -top-0 z-50 ${
        styleChange ? 'bg-background-hero' : 'bg-background-hero'
      }`}
    >
      <Section
        yPadding={` ${
          styleChange ? 'py-3' : 'py-5'
        } transition-all ease-in-out delay-50 `}
      >
        <NavbarTwoColumns logo={<Logo xl dark={styleChange} />}>
          <li className="font-extrabold">
            <Link href="/">
              <a
                className={`lineBottomAnimetion ${
                  currentPath === '/'
                    ? 'text-background-highlight'
                    : 'text-gray-400'
                }`}
              >
                HOME
              </a>
            </Link>
          </li>
          <li className="font-extrabold">
            <Link href="/shop">
              <a
                className={`lineBottomAnimetion ${
                  currentPath === '/shop/'
                    ? 'text-background-highlight'
                    : 'text-gray-400'
                }`}
              >
                SHOP
              </a>
            </Link>
          </li>
          <li className="font-extrabold">
            <Link href="/">
              <a
                className={`lineBottomAnimetion ${
                  currentPath === '/raffles'
                    ? 'text-background-highlight'
                    : 'text-gray-400'
                }`}
              >
                RAFFLES
              </a>
            </Link>
          </li>
          <li className="font-extrabold">
            <Button xl color_state={styleChange} wallet>
              <WalletMultiButton className="p-0 m-0 hover:text-white hover:bg-transparent" />
            </Button>
          </li>
        </NavbarTwoColumns>
      </Section>
    </div>
  );
}

export default Navbar;
