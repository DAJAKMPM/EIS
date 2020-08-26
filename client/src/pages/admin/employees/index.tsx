import React from "react";
import {FullWindowLayoutProps} from "../../../components/admin/layout/full-window-layout/types";
import FullWindowLayout from "../../../components/admin/layout/full-window-layout";
import NewsList from "../../../components/admin/employees/search";

const ArticlesIndexPage: React.FC = () => {
  const fullWindowLayoutProps: FullWindowLayoutProps = {
    headerTitle: "Employee Management",
  };

  return (
    <FullWindowLayout {...fullWindowLayoutProps}>
      <NewsList />
    </FullWindowLayout>
  );
};

export default ArticlesIndexPage;
