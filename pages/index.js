import React from 'react';

import { HelmetLayout } from 'layouts/index';
import { HomeContainer } from 'containers/index';

const HomePage = () => {
  console.log(process.env) 
  return (
    <HelmetLayout>
      <HomeContainer />
    </HelmetLayout>
  );
};

export default HomePage;
