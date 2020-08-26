import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import AdminDashboardPage from '../pages/admin/dashboard';
import AdminNewsPage from '../pages/admin/news';

const Routes = () => {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin/login" component={AuthenticationPage} />
      <Route exact path="/admin/news" component={AdminNewsPage} />
      <Route exact path="/admin" component={AdminDashboardPage} />

      {/* Viewers */}
    </Switch>
  );
};

export default Routes;
