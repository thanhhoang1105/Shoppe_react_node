import React from 'react'

const SlideUpdate = () => {
    return (
        // <>
        //     {isLoading ? (
        //         <Loading />
        //     ) : (
        <div className="col-md-12 col-lg-8">
            <table className="table">
                <thead>
                    <tr>
                        <th>Tên danh mục</th>
                        <th>Mô tả</th>
                        <th className="text-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {listCategories.map(category => (
                                <tr key={category._id}>
                                    <td>
                                        <b>{category.name}</b>
                                    </td>
                                    <td>{category.description}</td>
                                    <td className="text-end">
                                        <div className="actions">
                                            <Link
                                                to=""
                                                onClick={() =>
                                                    handleUpdate(category._id)
                                                }
                                            >
                                                <i className="fas fa-pen"></i>
                                            </Link>
                                            <Link
                                                className="text-danger"
                                                to=""
                                                onClick={e =>
                                                    handleDeleteCategory(
                                                        category._id
                                                    )
                                                }
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))} */}
                </tbody>
            </table>
            {/* {open1 && (
                        <>
                            <div className="details-modal-overlay"></div>
                            <div className="details-modal">
                                <div className="details-modal-title">
                                    <h1>Cập nhật danh mục</h1>
                                    <button
                                        type="button"
                                        className="details-modal-close"
                                        onClick={() => setOpen1(false)}
                                    >
                                        X
                                    </button>
                                </div>

                                <div className="details-modal-content">
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <Input
                                                value={categoryName}
                                                onChange={e =>
                                                    setCategoryName(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Tên</label>
                                            <Input
                                                value={categoryDescription}
                                                onChange={e =>
                                                    setCategoryDescription(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="button-group">
                                            <button
                                                onClick={() => setOpen1(false)}
                                                className="btn-outline"
                                                type="button"
                                            >
                                                Đóng
                                            </button>
                                            <button
                                                className="btn-primary"
                                                type="submit"
                                            >
                                                Lưu thay đổi
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )} */}
        </div>
        //     )}
        // </>
    )
}

export default SlideUpdate
