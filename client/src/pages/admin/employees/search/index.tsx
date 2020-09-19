import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import EmployeeList from '../../../../components/admin/employees/search';

const SrcEmployeePage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Employee Management',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <EmployeeList />
    </FullWindowLayout>
  );
};

export default SrcEmployeePage;
