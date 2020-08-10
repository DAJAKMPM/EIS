import React from 'react';
import {FullWindowLayoutProps} from '../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../components/admin/layout/full-window-layout';
import HomeComponent from '../../../components/admin/home';

const Home: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Home',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <HomeComponent />
    </FullWindowLayout>
  );
};

export default Home;
