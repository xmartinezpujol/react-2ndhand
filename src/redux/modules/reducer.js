import { combineReducers } from 'redux';
import products from './products';

// $FlowFixMe
const rootReducer = combineReducers({
  products,
});

export default rootReducer;
