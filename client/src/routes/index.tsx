import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import SrcEmployee from '../pages/admin/employees/search';
import InptEmployee from '../pages/admin/employees/input';
import VwEmployee from '../pages/admin/employees/view';
import EdtPrsnlEmployee from '../pages/admin/employees/edit/personal';
import EdtCntctFmlyEmployee from '../pages/admin/employees/edit/contact-family-history';
import EdtMedWorkHistEmployee from '../pages/admin/employees/edit/medical-work-history';
import EdtLeaveBenefitstEmployee from '../pages/admin/employees/edit/leave-benefits';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login" component={AuthenticationPage} />

      {/* Admin - Employee search */}
      <Route exact path="/admin/employees" component={SrcEmployee} />

      {/* Admin - Employee Input */}
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

      {/* Admin - Employee search */}
      <Route
        exact
        path="/admin/employees/edit-employee/personal"
        component={EdtPrsnlEmployee}
      />
      <Route
        exact
        path="/admin/employees/edit-employee/contact-family-history"
        component={EdtCntctFmlyEmployee}
      />
      <Route
        exact
        path="/admin/employees/edit-employee/medical-work-history"
        component={EdtMedWorkHistEmployee}
      />
      <Route
        exact
        path="/admin/employees/edit-employee/leave-benefits"
        component={EdtLeaveBenefitstEmployee}
      />

      {/* Viewers */}
    </Switch>
  );
};

export default Routes;
