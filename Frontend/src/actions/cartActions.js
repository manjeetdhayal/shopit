import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

//async is used with the help of redux thunk that applies middleware and allows us to make it async call 
export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data } = await axios.get(`/api/products/${id}`); 

    //once we have the data we dispatch the payload 
    dispatch({
        type: CART_ADD_ITEM, 
        payload: {
            product: data._id, 
            name: data.name, 
            image: data.image, 
            price: data.price,
            countInStock: data.countInStock, 
            qty // this from the parameters or say props 
        }
    })

    //once we dispatch it we save our cart to the local storage so that we can use it directly form there 
    //only string JSON data is saved in the local storage. Thus we convert it into that format before saving it. 
    // getState().cart.cartItems => this will give us JavaScript object 
    // we convert it to json format before saving 

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); //saves data in local storage 
}