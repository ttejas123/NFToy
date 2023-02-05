import { OurBuild } from '../components/OurBuild/OurBuild';
import { ScrollToTop } from '../components/UIComponents/ScrollToTop';
import { WhyUs } from '../components/whyus/WhyUsMain';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './BaseTemplate/Footer';
import { Hero } from './BaseTemplate/Hero';
import Navbar from './BaseTemplate/Navbar';
import SideNavigator from './BaseTemplate/SideNavigator';
import { VerticalFeatures } from './BaseTemplate/VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600 relative scroll-smooth">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />

    <VerticalFeatures
      fullWidth={true}
      id="WHYUS"
      title="WHY US? NFToys"
      description="NFToys offers one-of-a-kind, handcrafted toys of your favorite NFTs. 
      Our expert blend of 3D modeling, hand painting, and traditional craftsmanship create truly special collectibles, bringing them to live."
    >
      {/* NFToys Component Come Here */}
      <WhyUs />
    </VerticalFeatures>

    <VerticalFeatures
      id="BUILD"
      title="OUR BUILD PROCESS"
      description="You pick your preferred NFT and place the order, we start designing the 3D model of it, print it in high quality resin and post process it. After this is done we hand it to our artists for them to curately hand paint it. We will then pack it with care and ship it as fast as possible."
    >
      {/* Our Build Component Come Here */}
      <OurBuild />
    </VerticalFeatures>

    <VerticalFeatures
      title="OUR WORKS OF ART"
      id="OURWORK"
      description="Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
    >
      <img
        id="OURWORK"
        src="/assets/images/NFTOY-ARTWORK_MAIN.png"
        alt="ARTWORK MAIN"
      />
    </VerticalFeatures>

    <VerticalFeatures
      id="TRUSTEDCOMMUNITY"
      title="OUR TRUSTED COMMUNITES"
      description="Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
    >
      <img
        src="/assets/images/NFTOY-TRUSTED_MAIN.png"
        className="sm:w-3/4 w-full mx-auto"
        alt="TRUSTED PARTERNS"
      />
    </VerticalFeatures>

    <Footer />

    <SideNavigator
      contentarray={['HOME', 'BUILD', 'WHYUS', 'OURWORK', 'TRUSTEDCOMMUNITY']}
    />
    <ScrollToTop />
  </div>
);

export { Base };
