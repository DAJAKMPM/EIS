import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import AddEmployee from '../../../../components/admin/employees/input';

const InptEmployeePage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Add Employee',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <AddEmployee />
    </FullWindowLayout>
  );
};

export default InptEmployeePage;
