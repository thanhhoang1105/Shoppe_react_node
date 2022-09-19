import {
    GET_ADMIN_SLIDE_REQUEST,
    GET_ADMIN_SLIDE_SUCCESS,
    GET_ADMIN_SLIDE_FAILURE,
    GET_ADMIN_SLIDE_RESET,
    CREATE_ADMIN_SLIDE_REQUEST,
    CREATE_ADMIN_SLIDE_SUCCESS,
    CREATE_ADMIN_SLIDE_FAILURE,
    CREATE_ADMIN_SLIDE_RESET
} from '../Constants/SlideConstants'

// Get slides
export const getSlidesReducer = (state = { listSlides: [] }, action) => {
    switch (action.type) {
        case GET_ADMIN_SLIDE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_ADMIN_SLIDE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listSlides: action.payload
            }
        case GET_ADMIN_SLIDE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case GET_ADMIN_SLIDE_RESET:
            return {
                ...state,
                isLoading: false,
                error: null,
                listSlides: []
            }
        default:
            return state
    }
}

// Create slides
export const createSlideReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ADMIN_SLIDE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_ADMIN_SLIDE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                slide: action.payload.slide
            }
        case CREATE_ADMIN_SLIDE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case CREATE_ADMIN_SLIDE_RESET:
            return {
                ...state,
                isLoading: false,
                error: null,
                slide: {}
            }
        default:
            return state
    }
}
