import Link from 'next/link';

import { Button } from '../components/button/Button';
import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Hero = () => (
  <div id="HOME" className="overflow-hidden">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li className="font-extrabold">
          <Link href="HOME">
            <a className="lineBottomAnimetion">HOME</a>
          </Link>
        </li>
        <li className="font-extrabold">
          <Link href="/">
            <a className="lineBottomAnimetion">RAFFLES</a>
          </Link>
        </li>
        <li className="font-extrabold">
          <Link href="/">
            <a className="lineBottomAnimetion">ORDER NOW</a>
          </Link>
        </li>
        <li className="font-extrabold">
          <Button xl color_state={true}>
            CONNECT WALLET
          </Button>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-20 pt-5 slide-left">
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
  </div>
);

export { Hero };
