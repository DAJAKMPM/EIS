import React from 'react';
import {FullWindowLayoutProps} from '../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../components/admin/layout/full-window-layout';
import DashboardComponent from '../../../components/admin/dashboard';

const DashboardPage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Dashboard',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <DashboardComponent />
    </FullWindowLayout>
  );
};

export default DashboardPage;
