import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthenticationPage from '../pages/admin/authentication';
import SrcEmployeePage from '../pages/admin/employees/search';
import InptEmployeePage from '../pages/admin/employees/input';
import VwEmployeePage from '../pages/admin/employees/view';
import EdtPrsnlEmployeePage from '../pages/admin/employees/edit/personal';
import EdtCntctFmlyEmployeePage from '../pages/admin/employees/edit/contact-family-history';
import EdtMedWorkHistEmployeePage from '../pages/admin/employees/edit/medical-work-history';
import EdtLeaveBenefitstEmployeePage from '../pages/admin/employees/edit/leave-benefits';
import CalendarViewDTRPage from '../pages/admin/dtr/calendar';
import ListViewDTRCondPage from '../pages/admin/dtr/list-condition';
import ListViewDTRResPage from '../pages/admin/dtr/list-result';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login" component={AuthenticationPage} />

      {/* Admin - Employee search */}
      <Route exact path="/admin/employees" component={SrcEmployeePage} />

      {/* Admin - Employee Input */}
      <Route
        exact
        path="/admin/employees/add-employee"
        component={InptEmployeePage}
      />

      {/* Admin - Employee view */}
      <Route
        exact
        path="/admin/employees/view-employee"
        component={VwEmployeePage}
      />

      {/* Admin - Employee search */}
      <Route
        exact
        path="/admin/employees/edit-employee/personal"
        component={EdtPrsnlEmployeePage}
      />
      <Route
        exact
        path="/admin/employees/edit-employee/contact-family-history"
        component={EdtCntctFmlyEmployeePage}
      />
      <Route
        exact
        path="/admin/employees/edit-employee/medical-work-history"
        component={EdtMedWorkHistEmployeePage}
      />
      <Route
        exact
        path="/admin/employees/edit-employee/leave-benefits"
        component={EdtLeaveBenefitstEmployeePage}
      />

      {/* Admin - DTR */}
      <Route exact path="/admin/dtr/calendar" component={CalendarViewDTRPage} />
      <Route
        exact
        path="/admin/dtr/list-condition"
        component={ListViewDTRCondPage}
      />
      <Route
        exact
        path="/admin/dtr/list-result"
        component={ListViewDTRResPage}
      />
    </Switch>
  );
};

export default Routes;
