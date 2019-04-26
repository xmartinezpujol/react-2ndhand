import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as productActions from './redux/modules/products';
import { getProductById } from './utils/products';

import Loader from './components/Loader';
import ProductDetail from './components/ProductDetail';
import ProductList from './containers/ProductList';

type Props = {
  products: ProductType[]
};
type State = {};

class App extends React.Component<Props, State> {

  componentDidMount(): void {
    this.props.dispatch(productActions.getProducts());
  }

  render() {
    const { products } = this.props;
    return (
      <Switch>
        <Route
          exact
          path="/list"
          render={() => (
            products.isLoading
              ? <Loader />
              : <ProductList products={products.data} />
          )}
        />
        <Route
          exact
          path="/list/:id"
          render={(routerProps) => (
            products.isLoading
              ? <Loader />
              : <ProductDetail product={getProductById(products.data, routerProps.match.params.id)} />
          )}
        />
        <Redirect to="/list" />
      </Switch>
    );
  }
}

export const mapStateToProps = (state: Object) => ({
  products: state.products
});

export default withRouter(connect(
  mapStateToProps,
)(App));
