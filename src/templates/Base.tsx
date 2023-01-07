import { WHY_US } from '../components/whyus/WHYUS';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />

    <VerticalFeatures
      title="OUR BUILD PROCESS"
      description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
    >
      {/* Our Build Component Come Here */}
    </VerticalFeatures>

    <VerticalFeatures
      title="WHY US? NFToys"
      description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
    >
      {/* NFToys Component Come Here */}
      <WHY_US />
    </VerticalFeatures>

    <VerticalFeatures
      title="OUR WORKS OF ART"
      description="Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
    >
      <img src="/assets/images/NFTOY-ARTWORK_MAIN.png" alt="ARTWORK MAIN" />
    </VerticalFeatures>

    <VerticalFeatures
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
  </div>
);

export { Base };
