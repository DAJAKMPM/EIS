import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';

const VwEmployeePersonal: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'View Employee',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <h1>GG</h1>
    </FullWindowLayout>
  );
};

export default VwEmployeePersonal;
