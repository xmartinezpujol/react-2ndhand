import React from "react";
// $FlowFixMe
import Ads from '../../mocks/ads.json';
import ProductCard from "../../components/ProductCard";
import {ListContainer} from "../../containers/ProductList/styles";

const initialState = {
  data: [],
  isLoading: true,
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return Object.assign({}, action, {
        data: action.data,
        isLoading: false,
      });
    case 'RESET_PRODUCTS':
      return initialState;
    default: return state;
  }
}

// Sync Action
export const getProductsSuccess = data => ({
  type: 'GET_PRODUCTS_SUCCESS',
  isLoading: false,
  data,
});

export const resetProducts = () => ({
  type: 'RESET_PRODUCTS',
});

// Async Action
export const getProducts = () => {
  return (dispatch) => {
    // Connect here a proper API
    const addsByPage = Ads.map(page => page.ads);
    const allAds = [].concat.apply([], addsByPage);
    return dispatch(getProductsSuccess(allAds));
  };
};

