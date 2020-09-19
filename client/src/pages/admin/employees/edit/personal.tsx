import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import EditPersonal from '../../../../components/admin/employees/edit/personal';

const EdtPrsnlEmployeePage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Edit Personal Information',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <EditPersonal />
    </FullWindowLayout>
  );
};

export default EdtPrsnlEmployeePage;
