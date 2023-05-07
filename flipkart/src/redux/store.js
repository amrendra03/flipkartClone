import { combineReducers, createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer.js';

import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer.js';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductsDetails: getProductDetailsReducer,
    cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store