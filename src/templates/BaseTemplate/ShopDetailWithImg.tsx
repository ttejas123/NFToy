import { Button } from '../../components/button/Button';
import { VerticalFeatureTwoSection } from '../../components/feature/VerticalFeatureTwoSection';
import { Section } from '../../layout/Section';

const ShopDetailWithImg = () => (
  <div id="Details" className="overflow-hidden">
    <Section className="slide-left">
      <VerticalFeatureTwoSection
        title={
          <>
            <div className="heroTextAnimetion">MAKE YOUR NFT</div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-300">
              TRULY YOURS
            </span>
          </>
        }
        button={
          <a className="flex">
            <div className="mr-1">
              <Button color_state={false}>Buy Now</Button>
            </div>
          </a>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        icon="/assets/images/NFTOY_HERO_MAIN.png"
        image="/assets/images/NFTOY-SHOPHERO_ICON.png"
        imageAlt="First feature alt text"
        floatFrame="floatFrame"
      />
    </Section>
  </div>
);

export { ShopDetailWithImg };
