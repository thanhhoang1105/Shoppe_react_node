import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message, Select, Input } from 'antd'

import Loading from '../../../Components/More/Loader'

const { Option } = Select
const { TextArea } = Input

const UserUpdate = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { user } = useSelector(state => state.getUserDetailsAdmin)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1654019741/shoe/24-248253_user-profile-default-image-png-clipart-png-download_fwluw2.png'
    )

    useEffect(() => {
        setName(user.name)
        setEmail(user.email)
        setPassword(user.password)
        setRole(user.role)
        setImage(user.image)
    }, [user])

    console.log(user)

    const updateProfileDataChange = e => {
        const reader = new FileReader()

        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const submitHandler = e => {
        e.preventDefault()

        const createUserInfo = {
            name,
            email,
            password,
            role,
            image
        }

        // dispatch(createUserAdmin(createUserInfo))
    }

    return (
        //   <>
        //       {isLoading ? (
        //           <Loading />
        //       ) : (
        <section className="content-main" style={{ maxWidth: '1200px' }}>
            <form onSubmit={submitHandler}>
                <div className="content-header">
                    <h2 className="content-title">Cập nhật tài khoản</h2>
                </div>

                <div className="">
                    <div className="">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className="mb-4">
                                    <div className="Product-content">
                                        <div className="Product-input">
                                            <label
                                                htmlFor="product_price"
                                                className="form-label"
                                            >
                                                Tên
                                            </label>
                                            <Input
                                                value={name}
                                                placeholder="Nhập tên"
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="Product-input">
                                            <label
                                                htmlFor="product_price"
                                                className="form-label"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                placeholder="Nhập email"
                                                value={email}
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="Product-content">
                                        <div className="Product-input">
                                            <label
                                                htmlFor="product_price"
                                                className="form-label"
                                            >
                                                Mật khẩu
                                            </label>
                                            <Input
                                                placeholder="Nhập mật khẩu"
                                                value={password}
                                                onChange={e =>
                                                    setPassword(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="Product-input">
                                            <label
                                                htmlFor="product_price"
                                                className="form-label"
                                            >
                                                Danh mục
                                            </label>
                                            <Select
                                                value={role}
                                                style={{
                                                    width: '100%'
                                                }}
                                                onChange={e => setRole(e)}
                                            >
                                                <Option value="admin">
                                                    Admin
                                                </Option>
                                                <Option value="user">
                                                    User
                                                </Option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="avatar-preview">
                                        <img src={image} alt="Avatar Preview" />
                                    </div>
                                    <div className="upload-preview">
                                        <input
                                            type="file"
                                            name="avatar"
                                            accept="image/*"
                                            style={{
                                                width: '100%',
                                                fontSize: '15px'
                                            }}
                                            onChange={updateProfileDataChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        //       )}
        //   </>
    )
}

export default UserUpdate
