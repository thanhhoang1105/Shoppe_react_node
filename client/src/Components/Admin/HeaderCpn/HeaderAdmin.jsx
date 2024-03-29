import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../Redux/Actions/UserActions'
import { message } from 'antd'
import $ from 'jquery'

const HeaderAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        $('[data-trigger]').on('click', function (e) {
            e.preventDefault()
            e.stopPropagation()
            var offcanvas_id = $(this).attr('data-trigger')
            $(offcanvas_id).toggleClass('show')
        })

        $('.btn-aside-minimize').on('click', function () {
            if (window.innerWidth < 768) {
                $('body').removeClass('aside-mini')
                $('.navbar-aside').removeClass('show')
            } else {
                // minimize sidebar on desktop
                $('body').toggleClass('aside-mini')
            }
        })
    }, [])

    const handleLogout = () => {
        dispatch(logout())
        message.success('Đăng xuất thành công')
        window.location.href = '/auth'
    }

    const Avatar =
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1654019741/shoe/24-248253_user-profile-default-image-png-clipart-png-download_fwluw2.png'

    return (
        <header className="main-header navbar">
            <div className="col-search">
                <form className="searchform">
                    <div className="input-group">
                        <input
                            list="search_terms"
                            type="text"
                            className="form-control"
                            placeholder="Search term"
                        />
                        <button className="btn btn-light bg" type="button">
                            <i className="far fa-search"></i>
                        </button>
                    </div>
                    <datalist id="search_terms">
                        <option value="Products" />
                        <option value="New orders" />
                        <option value="Apple iphone" />
                        <option value="Ahmed Hassan" />
                    </datalist>
                </form>
            </div>
            <div className="col-nav">
                <button
                    className="btn btn-icon btn-mobile me-auto"
                    data-trigger="#offcanvas_aside"
                >
                    <i className="md-28 fas fa-bars"></i>
                </button>
                <ul className="nav">
                    <li className="nav-item">
                        <Link
                            className={`nav-link btn-icon `}
                            title="Dark mode"
                            to="#"
                        >
                            <i className="fas fa-moon"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn-icon" to="#">
                            <i className="fas fa-bell"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            English
                        </Link>
                    </li>
                    <li className="dropdown nav-item">
                        <Link
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            to="#"
                        >
                            <img
                                className="img-xs rounded-circle"
                                src={Avatar}
                                alt="User"
                            />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                            <Link
                                onClick={handleLogout}
                                className="dropdown-item text-danger"
                                to="#"
                            >
                                Đăng xuất
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderAdmin
