import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import EditLeaveBenefits from '../../../../components/admin/employees/edit/leave-benefits';

const EdtLeaveBenefitstEmployeePage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Edit Leave and Benefits',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <EditLeaveBenefits />
    </FullWindowLayout>
  );
};

export default EdtLeaveBenefitstEmployeePage;
