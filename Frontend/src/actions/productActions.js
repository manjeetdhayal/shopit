import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

//action to perform
export const listProducts = () => async (dispatch) => {
  //we added a function within a function using redux-thunk i.e, to make a async calls
  try {
    //when data is not fetched
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");

    //when data is fetched constant is PRODUCT_LIST_SUCCESS and payload is data i.e, res from the request
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //when something goes wrong i.e, API call fails
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
