import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Product from './components/Product';
import ProductList from './containers/ProductList';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/list"
          render={ProductList}
        />
        <Route
          exact
          path="/list/:id"
          component={Product}
        />
      </Switch>
    );
  }
}

export default withRouter(App);
