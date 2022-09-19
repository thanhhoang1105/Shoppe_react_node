import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAILURE,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_FAILURE,
    USER_UPDATE_AVATAR_REQUEST,
    USER_UPDATE_AVATAR_SUCCESS,
    USER_UPDATE_AVATAR_FAILURE,
    USER_UPDATE_PASSWORD_REQUEST,
    USER_UPDATE_PASSWORD_SUCCESS,
    USER_UPDATE_PASSWORD_FAILURE,
    USER_FORGOT_PASSWORD_REQUEST,
    USER_FORGOT_PASSWORD_SUCCESS,
    USER_FORGOT_PASSWORD_FAILURE,
    USER_RESET_PASSWORD_REQUEST,
    USER_RESET_PASSWORD_SUCCESS,
    USER_RESET_PASSWORD_FAILURE,
    GET_ADMIN_USER_REQUEST,
    GET_ADMIN_USER_SUCCESS,
    GET_ADMIN_USER_FAILURE,
    GET_ADMIN_USER_DETAIL_REQUEST,
    GET_ADMIN_USER_DETAIL_SUCCESS,
    GET_ADMIN_USER_DETAIL_FAILURE,
    CREATE_ADMIN_USER_REQUEST,
    CREATE_ADMIN_USER_SUCCESS,
    CREATE_ADMIN_USER_FAILURE,
    UPDATE_ADMIN_USER_REQUEST,
    UPDATE_ADMIN_USER_SUCCESS,
    UPDATE_ADMIN_USER_FAILURE,
    DELETE_ADMIN_USER_REQUEST,
    DELETE_ADMIN_USER_SUCCESS,
    DELETE_ADMIN_USER_FAILURE
} from '../Constants/UserConstants'

//login
export const login = (email, password) => async dispatch => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        const config = { headers: { 'Content-Type': 'application/json' } }

        const { data } = await axios.post(
            `/api/v1/login`,
            { email, password },
            config
        )
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user })
        // localStorage.setItem('userInfo', JSON.stringify(data.user))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response.data.message
        })
    }
}

//logout
export const logout = () => async dispatch => {
    try {
        await axios.get(`/api/v1/logout`)

        dispatch({ type: USER_LOGOUT_SUCCESS })
        localStorage.removeItem('userInfo')
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAILURE,
            payload: error.response.data.message
        })
    }
}

//register
export const register = RegisterInfo => async dispatch => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        const { data } = await axios.post(`/api/v1/registration`, {
            email: RegisterInfo.email,
            name: RegisterInfo.name,
            password: RegisterInfo.password,
            avatar: RegisterInfo.avatar
        })
        // console.log('RegisterInfo.avatar', RegisterInfo.avatar)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAILURE,
            payload: error.response.data.message
        })
    }
}

//load user
export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: USER_LOAD_REQUEST })

        const { data } = await axios.get(`/api/v1/me`)
        dispatch({ type: USER_LOAD_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: USER_LOAD_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Update Profile
export const updateProfile = updateProfileInfo => async dispatch => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        const { data } = await axios.put(`/api/v1/me/update/profile`, {
            email: `${updateProfileInfo.email}`,
            name: `${updateProfileInfo.name}`,
            address: `${updateProfileInfo.address}`,
            phoneNo: `${updateProfileInfo.phoneNo}`
        })

        // console.log('updateProfileInfo.avatar', updateProfileInfo)

        dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Update Avatar
export const updateAvatar = updateProfileInfo => async dispatch => {
    try {
        dispatch({ type: USER_UPDATE_AVATAR_REQUEST })

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }

        const { data } = await axios.put(`/api/v1/me/update/avatar`, {
            image: `${updateProfileInfo.avatar}`
        })

        // console.log('updateProfileInfo.avatar', updateProfileInfo)

        dispatch({ type: USER_UPDATE_AVATAR_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_AVATAR_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Update Password
export const updatePassword = updatePasswordInfo => async dispatch => {
    try {
        dispatch({ type: USER_UPDATE_PASSWORD_REQUEST })

        const config = { headers: { 'Content-Type': 'application/json' } }

        const { data } = await axios.put(
            `/api/v1/me/update`,
            updatePasswordInfo,
            config
        )

        dispatch({ type: USER_UPDATE_PASSWORD_SUCCESS, payload: data.success })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PASSWORD_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Forgot Password
export const forgotPassword = email => async dispatch => {
    try {
        dispatch({ type: USER_FORGOT_PASSWORD_REQUEST })

        const config = { headers: { 'Content-Type': 'application/json' } }

        const { data } = await axios.post(
            `/api/v1/password/forgot`,
            email,
            config
        )

        dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS, payload: data.message })
    } catch (error) {
        dispatch({
            type: USER_FORGOT_PASSWORD_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Reset Password
export const resetPassword = (token, passwords) => async dispatch => {
    try {
        dispatch({ type: USER_RESET_PASSWORD_REQUEST })

        const config = { headers: { 'Content-Type': 'application/json' } }

        const { data } = await axios.put(
            `/api/v1/password/reset/${token}`,
            passwords,
            config
        )

        dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data.success })
    } catch (error) {
        dispatch({
            type: USER_RESET_PASSWORD_FAILURE,
            payload: error.response.data.message
        })
    }
}

// Get all users Admin
export const getAllUsersAdmin = () => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_USER_REQUEST })

        const { data } = await axios.get('/api/v1/admin/users')

        dispatch({ type: GET_ADMIN_USER_SUCCESS, payload: data.users })
    } catch (error) {
        dispatch({ type: GET_ADMIN_USER_FAILURE, payload: error })
    }
}

//Get User Details Admin
export const getUserDetailsAdmin = id => async dispatch => {
    try {
        dispatch({ type: GET_ADMIN_USER_DETAIL_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/user/${id}`)

        dispatch({ type: GET_ADMIN_USER_DETAIL_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: GET_ADMIN_USER_DETAIL_FAILURE, payload: error })
    }
}

//Create user Admin
export const createUserAdmin = createUserInfo => async dispatch => {
    try {
        dispatch({ type: CREATE_ADMIN_USER_REQUEST })

        const { data } = await axios.post('/api/v1/admin/user/new', {
            name: createUserInfo.name,
            email: createUserInfo.email,
            password: createUserInfo.password,
            role: createUserInfo.role,
            avatar: createUserInfo.image
        })

        dispatch({ type: CREATE_ADMIN_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: CREATE_ADMIN_USER_FAILURE, payload: error })
    }
}

//Delete user Admin
export const deleteUserAdmin = id => async dispatch => {
    try {
        dispatch({ type: DELETE_ADMIN_USER_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/user/${id}`)

        dispatch({ type: DELETE_ADMIN_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: DELETE_ADMIN_USER_FAILURE, payload: error })
    }
}
