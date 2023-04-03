import React from 'react';

import { Footer } from './BaseTemplate/Footer';
import Navbar from './BaseTemplate/Navbar';
import { ShopDetailWithImg } from './BaseTemplate/ShopDetailWithImg';
import SideNavigator from './BaseTemplate/SideNavigator';
import { ScrollToTop } from '../components/UIComponents/ScrollToTop';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

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
