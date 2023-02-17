import { Button } from '../../components/button/Button';
import { VerticalFeatureTwoSection } from '../../components/feature/VerticalFeatureTwoSection';
import { Section } from '../../layout/Section';

const ShopDetailWithImg = () => (
  <div id="Details" className="overflow-hidden">
    <Section className="slide-left">
      <VerticalFeatureTwoSection
        title="Customize your NFT"
        priceSol={20}
        priceDoller={150}
        stockLeft={6}
        button={
          <a className="flex">
            <div className="mr-1">
              <Button
                onclick={() =>
                  window.open('https://www.hel.io/pay/63c597818e1d47822ed370fc')
                }
                color_state={false}
              >
                Buy Now
              </Button>
            </div>
          </a>
        }
        supported={['Rude Golems', 'Sharks', 'Clayursours']}
        details={[
          '1:1 high fidelity figure.',
          'ABS Resin.',
          'Highly detailed painting.',
          'Personalized secure packaging.',
        ]}
        description="High-quality resin figure. Hand painted with acrylic and high coverage sealer. Packed with our special NFToys Box."
        image="/assets/images/Toys/HERO_MAIN.png"
        imageAlt="Stone Golem NFT"
        floatFrame="floatFrame"
      />
    </Section>
  </div>
);

export { ShopDetailWithImg };
