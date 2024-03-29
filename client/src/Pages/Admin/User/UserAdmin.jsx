import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'

import {
    getAllUsersAdmin,
    getUserDetailsAdmin,
    deleteUserAdmin
} from '../../../Redux/Actions/UserActions'

const UserAdmin = () => {
    const dispatch = useDispatch()

    const { listUsers } = useSelector(state => state.getAllUsersAdmin)

    const { success } = useSelector(state => state.deleteUserAdmin)

    useEffect(() => {
        if (success) {
            message.success('Xóa thành công')
            dispatch(getAllUsersAdmin())
            dispatch({ type: 'DELETE_ADMIN_USER_RESET' })
        }
    }, [success, dispatch])

    const handleUpdate = id => {
        dispatch(getUserDetailsAdmin(id))
    }

    const handleDelete = id => {
        dispatch(deleteUserAdmin(id))
    }

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Danh sách tài khoản</h2>
                <div>
                    <Link to={`/admin/user/new`} className="btn btn-primary">
                        Thêm mới tài khoản
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
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>Quyền</th>
                                    <th>Thời gian tạo</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            {/* Table Data */}
                            <tbody>
                                {listUsers.map((item, index) => (
                                    <tr key={index}>
                                        {item.avatar ? (
                                            <td>
                                                <img
                                                    src={item.avatar.url}
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
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            {moment(item.createdAt).format(
                                                'llll'
                                            )}
                                        </td>
                                        <td className="text-end">
                                            <div className="actions">
                                                <Link
                                                    to={`/admin/user/${item._id}`}
                                                    className="text-success"
                                                    onClick={() =>
                                                        handleUpdate(item._id)
                                                    }
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

export default UserAdmin
