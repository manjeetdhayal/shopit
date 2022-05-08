import { createStore, combineReducers, applyMiddleware } from "redux";
//combineReducers to combine different reducers
// applyMiddleware to apply middleware such as thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers } from "./Reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducers,
});

const initialState = {}; //something that we want to load when reducers load

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); //third argument so that it works with react dev tools

export default store;
