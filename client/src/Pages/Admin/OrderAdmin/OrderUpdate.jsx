import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Rate } from 'antd'
import moment from 'moment'

import Formatter from '../../../Components/More/Formatter'
import './style.css'

const OrderUpdate = () => {
    const dispatch = useDispatch()

    const imageUrl =
        'https://res.cloudinary.com/shopecommerceonline/image/upload/v1654023807/products/giay-nike-air-jordan-1-retro-high-og-court-purple-2-0-555088-500-phoi-mau-size-43-61076e12e573e-02082021110122_lbxftg.jpg'

    const { order, error, loading } = useSelector(
        state => state.getOrderDetails
    )

    // let totalAllPrice = order.reduce((a, c) => a + c.price * c.quantity, 0)
    const subtotal = order?.totalPrice
    const shippingCharges = 100000
    const totalAllPrice = subtotal + shippingCharges

    // console.log('totalAllPrice', totalAllPrice)
    // console.log('totalPrice', totalPrice)
    // console.log('order', order)
    return (
        <section className="content-main" style={{ maxWidth: '1200px' }}>
            <form /* onSubmit={submitHandler} */>
                <div className="content-header">
                    <h2 className="content-title">Đơn Hàng</h2>
                </div>
                <div className="mb-4">
                    <div className="">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <div className="Order-top_details">
                                    <div className="Order-top-left">
                                        Địa Chỉ Nhận Hàng:{' '}
                                        {order?.shippingInfo?.address},{' '}
                                        {order?.shippingInfo?.province},{' '}
                                        {order?.shippingInfo?.district},{' '}
                                        {order?.shippingInfo?.ward},
                                    </div>
                                    <div className="Order-top-right">
                                        <div className="Order-top-right-item">
                                            Số điện thoại:{' '}
                                            {order?.shippingInfo?.phoneNo}
                                        </div>
                                    </div>
                                </div>
                                <div className="Order-bottom_details">
                                    <div className="Order-bottom-left_details">
                                        <div className="Order-bottom-left-item_details">
                                            Tên: {order?.shippingInfo?.name}
                                        </div>
                                        <div className="Order-bottom-left-item_details">
                                            Email: {order?.shippingInfo?.email}
                                        </div>
                                    </div>
                                    <div className="Order-bottom-right_details">
                                        <div className="Order-bottom-right-item_details">
                                            Thời gian tạo:{' '}
                                            {moment(order.createdAt).calendar()}
                                        </div>
                                        <div className="Order-bottom-right-item_details">
                                            Thời gian đánh giá:{' '}
                                            {moment(
                                                order.deliveredAt
                                            ).calendar()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="Order-top">
                                    <div className="Order-top-left">
                                        ID: {order._id}
                                    </div>
                                    <div className="Order-top-right">
                                        <div className="Order-top-right-item">
                                            Giao hàng thành công
                                        </div>
                                        <div className="Order-top-right-center"></div>
                                        <div className="Order-top-right-item">
                                            ĐÁNH GIÁ
                                        </div>
                                    </div>
                                </div>
                                {order?.orderItems?.map((item, index) => (
                                    <div className="Order-center" key={index}>
                                        <div className="Order-center-left">
                                            <div className="Order-center-left-item">
                                                <img
                                                    src={item?.image}
                                                    className="Order-center-Image"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="Order-center-left-item">
                                                <div className="Order-center-left-item-name">
                                                    {item?.name}
                                                </div>
                                                <div className="Order-center-left-item-categories">
                                                    phân loại đèn
                                                </div>
                                                <div className="Order-center-left-item-quality">
                                                    x{item?.quantity}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Order-center-right">
                                            <div className="Order-center-right-item">
                                                {Formatter.format(item?.price)}
                                            </div>
                                            <div className="Order-center-right-item">
                                                <Rate
                                                    disabled
                                                    defaultValue={2}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="Order-bottom">
                                    <div className="Order-bottom-left">
                                        <div className="Order-bottom-left-item">
                                            Tổng tiền hàng
                                        </div>
                                        <div className="Order-bottom-left-item">
                                            Phí vận chuyển
                                        </div>
                                        <div className="Order-bottom-left-item">
                                            Tổng số tiền
                                        </div>
                                        <div className="Order-bottom-left-item">
                                            Phương thức Thanh toán
                                        </div>
                                    </div>
                                    <div className="Order-bottom-right">
                                        <div className="Order-bottom-right-item">
                                            {Formatter.format(
                                                order?.totalPrice
                                            )}
                                        </div>
                                        <div className="Order-bottom-right-item">
                                            {Formatter.format(shippingCharges)}
                                        </div>
                                        <div className="Order-bottom-right-item">
                                            {Formatter.format(totalAllPrice)}
                                        </div>
                                        <div className="Order-bottom-right-item">
                                            Thanh toán khi nhận hàng
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default OrderUpdate
