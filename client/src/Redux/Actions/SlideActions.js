import axios from 'axios'
import {
    GET_ADMIN_SLIDE_REQUEST,
    GET_ADMIN_SLIDE_SUCCESS,
    GET_ADMIN_SLIDE_FAILURE,
    CREATE_ADMIN_SLIDE_REQUEST,
    CREATE_ADMIN_SLIDE_SUCCESS,
    CREATE_ADMIN_SLIDE_FAILURE
} from '../Constants/SlideConstants'

// Get all slides Admin
export const getAllSlidesAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_SLIDE_REQUEST })

        const { data } = await axios.get('/api/v1/slides')

        dispatch({ type: GET_ADMIN_SLIDE_SUCCESS, payload: data.slides })
    } catch (error) {
        dispatch({ type: GET_ADMIN_SLIDE_FAILURE, payload: error })
    }
}

//Create a new slide
export const createSlide = createSlideInfo => async dispatch => {
    try {
        dispatch({ type: CREATE_ADMIN_SLIDE_REQUEST })

        const { data } = await axios.post(
            '/api/v1/admin/slide/new',
            createSlideInfo
        )

        dispatch({ type: CREATE_ADMIN_SLIDE_SUCCESS, payload: data.slide })
    } catch (error) {
        dispatch({ type: CREATE_ADMIN_SLIDE_FAILURE, payload: error })
    }
}
