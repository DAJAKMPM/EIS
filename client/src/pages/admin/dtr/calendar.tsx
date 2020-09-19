import React from 'react';
import {FullWindowLayoutProps} from '../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../components/admin/layout/full-window-layout';
import CalendarViewDTR from '../../../components/admin/dtr/calendar';

const CalendarViewDTRPage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Calendar DTR',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <CalendarViewDTR />
    </FullWindowLayout>
  );
};

export default CalendarViewDTRPage;
