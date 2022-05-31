import {
    GET_ADMIN_ORDERS_REQUEST,
    GET_ADMIN_ORDERS_SUCCESS,
    GET_ADMIN_ORDERS_FAILURE,
    GET_ADMIN_ORDERS_RESET,
    GET_ADMIN_ORDERS_DETAIL_REQUEST,
    GET_ADMIN_ORDERS_DETAIL_SUCCESS,
    GET_ADMIN_ORDERS_DETAIL_FAILURE,
    GET_ADMIN_ORDERS_DETAIL_RESET
} from '../Constants/OrderConstants'

// Get all orders Admin
export const getAllOrdersAdminReducer = (
    state = { listOrders: [] },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_ORDERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_ORDERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listOrders: action.payload
            }
        case GET_ADMIN_ORDERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_ORDERS_RESET:
            return {
                ...state,
                isLoading: false,
                listOrders: []
            }
        default:
            return state
    }
}

//get order details Admin
export const getOrderDetailsAdminReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case GET_ADMIN_ORDERS_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_ORDERS_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                order: action.payload
            }
        case GET_ADMIN_ORDERS_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_ORDERS_DETAIL_RESET:
            return {
                ...state,
                isLoading: false,
                order: {}
            }
        default:
            return state
    }
}
