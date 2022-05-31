import {
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
    GET_ADMIN_PRODUCTS_FAILURE,
    GET_ADMIN_PRODUCTS_RESET
} from '../Constants/ProductConstants'

// Get all products Admin
export const getAllProductsAdminReducer = (
    state = { listProducts: [] },
    action
) => {
    switch (action.type) {
        case GET_ADMIN_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listProducts: action.payload,
                totalPages: action.payload.totalPages
            }
        case GET_ADMIN_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_ADMIN_PRODUCTS_RESET:
            return {
                ...state,
                isLoading: false,
                listProducts: []
            }
        default:
            return state
    }
}
