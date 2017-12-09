import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import shortid from 'shortid';
import CrudIndex from './CrudIndex';
import CrudForm from './CrudForm';
import resources from './resources';

const CrudRoutes = () => (
    resources.map((item) => (
        <Switch key={shortid.generate()}>
          <Route
              exact
              path={item.path}
              key={shortid.generate()}
              component={CrudIndex}
          />
          <Route
              exact
              path={`${item.path}/:action`}
              key={shortid.generate()}
              component={CrudForm}
          />
        </Switch>
    ))
);

export default CrudRoutes;