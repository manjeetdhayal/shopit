import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

//we pass the initial state and a action dispatcher and then check for the action response
export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }; //if it's still processing request loading: true and product is empty
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }; // if action completes with success we set loading: false and product = action.payload i.e, whatever action returns
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }; //if action fails to return the product list

    default:
      return state;
  }
};
