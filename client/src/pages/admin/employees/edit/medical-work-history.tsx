import React from 'react';
import {FullWindowLayoutProps} from '../../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../../components/admin/layout/full-window-layout';
import EditMedWorkHist from '../../../../components/admin/employees/edit/medical-work-history';

const EdtMedWorkHistEmployee: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Edit Medical and Work History',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <EditMedWorkHist />
    </FullWindowLayout>
  );
};

export default EdtMedWorkHistEmployee;
