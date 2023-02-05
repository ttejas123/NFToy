import React from 'react';

import Link from 'next/link';

import { Section } from '../../layout/Section';
import { Button } from '../button/Button';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';

function HeroTwoButton() {
  return (
    <Section yPadding="pb-20 slide-left">
      <VerticalFeatureRow
        title={
          <>
            <div className="heroTextAnimetion">MAKE YOUR NFT</div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-300">
              TRULY YOURS
            </span>
          </>
        }
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a className="flex">
              <div className="mr-1">
                <Button color_state={false} xl>
                  FIND OUT HOW
                </Button>
              </div>
              <div className="ml-1">
                <Button color_state={true} xl>
                  ORDER NOW ➜
                </Button>
              </div>
            </a>
          </Link>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        icon="/assets/images/NFTOY_HERO_MAIN.png"
        image="/assets/images/NFTOY-HERO_ICON.png"
        imageAlt="First feature alt text"
        floatFrame="floatFrame"
      />
    </Section>
  );
}

export default HeroTwoButton;
