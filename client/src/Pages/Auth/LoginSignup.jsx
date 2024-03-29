import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'

import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import FaceIcon from '@material-ui/icons/Face'

import { login, register } from '../../Redux/Actions/UserActions'

import MetaData from '../../Components/More/Metadata'
import Loading from '../../Components/More/Loader'
import './style.css'

const LoginSignup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, error, loading, isAuthenticated } = useSelector(
        state => state.getUser
    )

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1654019741/shoe/24-248253_user-profile-default-image-png-clipart-png-download_fwluw2.png'
    )

    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = users

    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

    const loginSubmit = e => {
        e.preventDefault()
        dispatch(login(loginEmail, loginPassword))
    }

    useEffect(() => {
        // if (error) {
        //     message.error(error)
        // }

        if (isAuthenticated) {
            message.success('Đăng nhập thành công')
            navigate('/')
        }
        if (user?.role === 'admin') {
            navigate('/admin')
            window.location.reload()
        }
        if (user?.role === 'user') {
            navigate('/')
            // window.location.reload()
        }
    }, [dispatch, error, isAuthenticated, navigate, user])

    const registerSubmit = e => {
        e.preventDefault()

        const RegisterInfo = {
            name,
            email,
            password,
            avatar
        }
        dispatch(register(RegisterInfo))
        // console.log('register', RegisterInfo)
    }

    const registerDataChange = e => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader()

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0])
        } else {
            setUsers({ ...users, [e.target.name]: e.target.value })
        }
    }

    const switchTabs = (e, tab) => {
        if (tab === 'login') {
            switcherTab.current.classList.add('shiftToNeutral')
            switcherTab.current.classList.remove('shiftToRight')

            registerTab.current.classList.remove('shiftToNeutralForm')
            loginTab.current.classList.remove('shiftToLeft')
        }
        if (tab === 'register') {
            switcherTab.current.classList.add('shiftToRight')
            switcherTab.current.classList.remove('shiftToNeutral')

            registerTab.current.classList.add('shiftToNeutralForm')
            loginTab.current.classList.add('shiftToLeft')
        }
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <MetaData title="Login or Signup" />
                    <div className="LoginSignUpContainer">
                        <div className="LoginSignUpBox">
                            <div>
                                <div className="login_signUp_toggle">
                                    <p onClick={e => switchTabs(e, 'login')}>
                                        Đăng nhập
                                    </p>
                                    <p onClick={e => switchTabs(e, 'register')}>
                                        Đăng ký
                                    </p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>
                            <form
                                className="loginForm"
                                ref={loginTab}
                                onSubmit={loginSubmit}
                            >
                                <div className="loginEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Điền Email"
                                        required
                                        value={loginEmail}
                                        onChange={e =>
                                            setLoginEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="loginPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Điền mật khẩu"
                                        required
                                        value={loginPassword}
                                        onChange={e =>
                                            setLoginPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <Link to="/password/forgot">
                                    Quên mật khẩu?
                                </Link>
                                <input
                                    type="submit"
                                    value="Đăng nhập"
                                    className="loginBtn"
                                />
                            </form>

                            <form
                                className="signUpForm"
                                ref={registerTab}
                                encType="multipart/form-data"
                                onSubmit={registerSubmit}
                            >
                                <div className="signUpName">
                                    <FaceIcon />
                                    <input
                                        type="text"
                                        placeholder="Điền tên"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Điền Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Điền mật khẩu"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={registerDataChange}
                                    />
                                </div>

                                <div id="registerImage">
                                    <img
                                        src={avatarPreview}
                                        alt="Avatar Preview"
                                    />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value="Đăng ký"
                                    className="signUpBtn"
                                />
                            </form>
                        </div>
                    </div>
                    <div></div>
                </>
            )}
        </>
    )
}

export default LoginSignup
