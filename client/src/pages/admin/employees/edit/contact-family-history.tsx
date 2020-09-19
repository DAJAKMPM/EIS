import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import EditContactFamilyHist from '../../../../components/admin/employees/edit/contact-family-history';

const EdtCntctFmlyEmployeePage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Edit Contact and Family History',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <EditContactFamilyHist />
    </FullWindowLayout>
  );
};

export default EdtCntctFmlyEmployeePage;
