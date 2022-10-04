//we need to add every reducer inside ours store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
//combineReducers to combine different reducers
// applyMiddleware to apply middleware such as thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducers,
} from "./Reducers/productReducers";

import { cartReducer } from "./Reducers/cardReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducer,
  cart: cartReducer,
});

const initialState = {}; //something that we want to load when reducers load

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); //third argument so that it works with react dev tools

export default store;
