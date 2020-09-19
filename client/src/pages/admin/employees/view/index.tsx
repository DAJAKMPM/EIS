import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import EmployeeView from '../../../../components/admin/employees/view';

const VwEmployeePage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'View Employee',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <EmployeeView />
    </FullWindowLayout>
  );
};

export default VwEmployeePage;
