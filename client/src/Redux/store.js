import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    getAllOrdersAdminReducer,
    getOrderDetailsAdminReducer
} from './Reducers/OrderReducer'
import { getAllProductsAdminReducer } from './Reducers/ProductReducer'

const reducer = combineReducers({
    //Admin
    getAllOrdersAdmin: getAllOrdersAdminReducer,
    getAllProductsAdmin: getAllProductsAdminReducer,
    getOrderDetails: getOrderDetailsAdminReducer
})

let initialState = {}

const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store
