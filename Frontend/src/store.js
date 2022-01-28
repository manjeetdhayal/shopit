import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'; 
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers} from './Reducers/productReducers'


const reducer = combineReducers({
    productList: productListReducers,
})

const initialState = {}

const middleware = [thunk]; 

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store 