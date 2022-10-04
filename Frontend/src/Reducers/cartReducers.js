import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case CART_ADD_ITEM: 
            const item = action.payload
            // we check if the item already exists or not 
            const existItem = state.cartItems.find(x => x.product === item.product); 
            if(existItem) {
                //if it exists 
                return {
                    ...state, 
                    cartItems: state.cartItems.map( x => x.product === existItem.product ? item: x ), 
                }

            } else {
                // if not exists add current item to the state 
                return {...state, cartItems: [...state.cartItems, item]} // in cartitems add all previous item + new item 
                // we used spread operator to add all previous items [...state.cartItems] basically spreads all the previous items
            }


        default: return state; 

    }
}