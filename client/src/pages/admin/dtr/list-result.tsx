import React from 'react';
import {FullWindowLayoutProps} from '../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../components/admin/layout/full-window-layout';
import ListViewDTRRes from '../../../components/admin/dtr/list/result';

const ListViewDTRResPage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'List DTR Result',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <ListViewDTRRes />
    </FullWindowLayout>
  );
};

export default ListViewDTRResPage;
