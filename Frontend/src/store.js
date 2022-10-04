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

import { cartReducer } from "./Reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducer,
  cart: cartReducer,
});

//we fetch saved cart items from local storage if present else emtpy object; if present change to parse to JS object before storing for that use JSON.parse(json_object)
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] 

const initialState = {
  cart: {cartItems: cartItemsFromStorage }
}; //something that we want to load when reducers load

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); //third argument so that it works with react dev tools

export default store;
