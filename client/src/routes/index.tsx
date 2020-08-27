import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import AdminEmployeesPage from '../pages/admin/employees';
import AdminAddEmployeesPage from '../pages/admin/employees/input';

const Routes = () => {
  return (
    <Switch>
      {/* Admin */}
      <Route exact path="/admin/login" component={AuthenticationPage} />
      <Route exact path="/admin/employees" component={AdminEmployeesPage} />
      <Route
        exact
        path="/admin/employees/add-employee"
        component={AdminAddEmployeesPage}
      />

      {/* Viewers */}
    </Switch>
  );
};

export default Routes;
