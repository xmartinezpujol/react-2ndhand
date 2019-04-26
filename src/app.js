import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import ProductDetail from './components/ProductDetail';
import ProductList from './containers/ProductList';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/list"
          component={ProductList}
        />
        <Route
          exact
          path="/list/:id"
          component={ProductDetail}
        />
        <Redirect to="/list" />
      </Switch>
    );
  }
}

export default withRouter(App);
