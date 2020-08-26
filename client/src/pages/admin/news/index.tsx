import React from 'react';
import {FullWindowLayoutProps} from '../../../components/admin/layout/full-window-layout/types';
import FullWindowLayout from '../../../components/admin/layout/full-window-layout';
import NewsList from '../../../components/admin/news/list';

const ArticlesIndexPage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: 'Articles',
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <NewsList />
    </FullWindowLayout>
  );
};

export default ArticlesIndexPage;
