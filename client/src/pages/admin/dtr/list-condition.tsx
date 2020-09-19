import React from 'react';
import {FullWindowLayoutProps} from '../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../components/admin/layout/full-window-layout';
import ListViewDtrCond from '../../../components/admin/dtr/list/condition';

const ListViewDTRCondPage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'List DTR Condition',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <ListViewDtrCond />
    </FullWindowLayout>
  );
};

export default ListViewDTRCondPage;
