import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { message, Input } from 'antd'

import Loading from '../../../Components/More/Loader'

import { createSlide, getAllSlidesAdmin } from '../../../Redux/Actions/SlideActions'

const { TextArea } = Input
const SlideCreate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { success, isLoading } = useSelector(state => state.createSlideAdmin)

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1654019741/shoe/24-248253_user-profile-default-image-png-clipart-png-download_fwluw2.png'
    )

    useEffect(() => {
        if (success) {
            message.success('Thêm thành công')
            navigate('/admin/slides')
            dispatch(getAllSlidesAdmin())
            dispatch({ type: 'CREATE_ADMIN_SLIDE_RESET'})
        }
    }, [success, navigate, dispatch])

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

        const createSlideInfo = {
            name,
            title,
            description,
            image
        }

        dispatch(createSlide(createSlideInfo))
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <section
                    className="content-main"
                    style={{ maxWidth: '1200px' }}
                >
                    <form onSubmit={submitHandler}>
                        <div className="content-header">
                            <h2 className="content-title">Thêm mới slide</h2>
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
                                                        defaultValue={name}
                                                        placeholder="Nhập tên"
                                                        onChange={e =>
                                                            setName(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="Product-input">
                                                    <label
                                                        htmlFor="product_price"
                                                        className="form-label"
                                                    >
                                                        Tiêu đề
                                                    </label>
                                                    <Input
                                                        placeholder="Nhập email"
                                                        defaultValue={title}
                                                        onChange={e =>
                                                            setTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">
                                                Mô tả
                                            </label>
                                            <TextArea
                                                rows={4}
                                                placeholder="Nhập mô tả sản phẩm"
                                                defaultValue={description}
                                                onChange={e =>
                                                    setDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="avatar">
                                            <div className="avatar-preview">
                                                <img
                                                    src={image}
                                                    alt="Avatar Preview"
                                                />
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
                                                    onChange={
                                                        updateProfileDataChange
                                                    }
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
            )}
        </>
    )
}

export default SlideCreate
