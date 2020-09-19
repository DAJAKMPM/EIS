import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import SrcEmployee from '../pages/admin/employees/search';
import InptEmployee from '../pages/admin/employees/input';
import VwEmployee from '../pages/admin/employees/view';

const Routes = () => {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin/login" component={AuthenticationPage} />
      <Route exact path="/admin/employees" component={SrcEmployee} />
      <Route
        exact
        path="/admin/employees/add-employee"
        component={InptEmployee}
      />

      {/* Admin - Employee view */}
      <Route
        exact
        path="/admin/employees/view-employee"
        component={VwEmployee}
      />

      {/* Viewers */}
    </Switch>
  );
};

export default Routes;
