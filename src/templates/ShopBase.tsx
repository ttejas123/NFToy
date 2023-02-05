import React from 'react';

import { ScrollToTop } from '../components/UIComponents/ScrollToTop';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './BaseTemplate/Footer';
import Navbar from './BaseTemplate/Navbar';
import { ShopDetailWithImg } from './BaseTemplate/ShopDetailWithImg';
import SideNavigator from './BaseTemplate/SideNavigator';

function ShopBase() {
  return (
    <div className="antialiased text-gray-600  scroll-smooth">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <ShopDetailWithImg />
      <Footer />
      <SideNavigator contentarray={['Details']} />
      <ScrollToTop />
    </div>
  );
}

export { ShopBase };
