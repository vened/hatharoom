import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import CrudIndex from './CrudIndex';
import CrudForm from './CrudForm';
import resources from './resources';

const CrudRoutes = () => (
    resources.map((item) => (
        <Switch>
          <Route
              exact
              path={item.path}
              key={item.path}
              component={CrudIndex}
          />
          <Route
              exact
              path={`${item.path}/new`}
              key={`${item.path}/new`}
              component={CrudForm}
          />
        </Switch>
    ))
);

export default CrudRoutes;