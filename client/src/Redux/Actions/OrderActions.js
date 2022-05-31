import axios from 'axios'
import {
    GET_ADMIN_ORDERS_REQUEST,
    GET_ADMIN_ORDERS_SUCCESS,
    GET_ADMIN_ORDERS_FAILURE,
    GET_ADMIN_ORDERS_DETAIL_REQUEST,
    GET_ADMIN_ORDERS_DETAIL_SUCCESS,
    GET_ADMIN_ORDERS_DETAIL_FAILURE
} from '../Constants/OrderConstants'

// Get all orders Admin
export const getAllOrdersAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_ORDERS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/orders')

        dispatch({ type: GET_ADMIN_ORDERS_SUCCESS, payload: data.orders })
    } catch (error) {
        dispatch({ type: GET_ADMIN_ORDERS_FAILURE, payload: error })
    }
}

// Get order details Admin
export const getOrderDetailsAdmin = id => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_ORDERS_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/v1/order/${id}`)

        dispatch({ type: GET_ADMIN_ORDERS_DETAIL_SUCCESS, payload: data.order })
    } catch (error) {
        dispatch({ type: GET_ADMIN_ORDERS_DETAIL_FAILURE, payload: error })
    }
}
