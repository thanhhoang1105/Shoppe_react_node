import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { message, Select } from 'antd'
import { deleteSlideAdmin, getAllSlidesAdmin } from '../../../Redux/Actions/SlideActions'

const SlideAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { listSlides } = useSelector(state => state.getAllSlidesAdmin)
    const { success } = useSelector(state => state.deleteSlideAdmin)

    useEffect(() => {
        if (success) {
            message.success('Xóa thành công')
            dispatch(getAllSlidesAdmin())
            dispatch({ type: 'DELETE_SLIDE_RESET' })
        }
    }, [success, dispatch])

    const handleDelete = id => {
        dispatch(deleteSlideAdmin(id))
    }
    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Danh sách Slide</h2>
                <div>
                    <Link to={`/admin/slide/new`} className="btn btn-primary">
                        Thêm mới slide
                    </Link>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Ảnh</th>
                                    <th>Tiêu đề</th>
                                    <th>Tên</th>
                                    <th>Mô tả</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listSlides.map((item, index) => (
                                    <tr key={index}>
                                        {item.image ? (
                                            <td>
                                                <img
                                                    src={item.image.url}
                                                    alt="avatar"
                                                    className="img-fluid"
                                                    style={{
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: '50%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </td>
                                        ) : (
                                            <td>
                                                <img
                                                    src="https://via.placeholder.com/150"
                                                    alt="avatar"
                                                    className="img-fluid"
                                                />
                                            </td>
                                        )}
                                        <td>{item.name}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td className="text-end">
                                            <div className="actions">
                                                <Link
                                                    to={`/admin/user/${item._id}`}
                                                    className="text-success"
                                                    // onClick={() =>
                                                    //     handleUpdate(item._id)
                                                    // }
                                                >
                                                    <i className="fas fa-eye"></i>
                                                </Link>
                                                <Link
                                                    className="text-danger"
                                                    to=""
                                                    onClick={() => {
                                                        handleDelete(item._id)
                                                    }}
                                                >
                                                    <i className="fas fa-trash-alt"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SlideAdmin
