import axios from 'axios'
import {
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
    GET_ADMIN_PRODUCTS_FAILURE
} from '../Constants/ProductConstants'

// Get all products Admin
export const getAllProductsAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_PRODUCTS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/products')

        dispatch({ type: GET_ADMIN_PRODUCTS_SUCCESS, payload: data.products })
    } catch (error) {
        dispatch({ type: GET_ADMIN_PRODUCTS_FAILURE, payload: error })
    }
}
