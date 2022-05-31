import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import store from './Redux/store'

import { getAllOrdersAdmin } from './Redux/Actions/OrderActions'
import { getAllProductsAdmin } from './Redux/Actions/ProductActions'

import LayoutAdmin from './Layout/LayoutAdmin/LayoutAdmin'
import DashboardAdmin from './Pages/Admin/Dashboard/DashboardAdmin'
import ProductAdmin from './Pages/Admin/Products/ProductAdmin'
import OrderAdmin from './Pages/Admin/OrderAdmin/OrderAdmin'
import OrderUpdate from './Pages/Admin/OrderAdmin/OrderUpdate'

function App() {
    useEffect(() => {
        //get all orders admin
        store.dispatch(getAllOrdersAdmin())
        //get all products admin
        store.dispatch(getAllProductsAdmin())
    }, [])
    return (
        <Routes>
            <Route path="/admin" element={<LayoutAdmin />}>
                <Route index element={<DashboardAdmin />} />
                <Route path="/admin/products" element={<ProductAdmin />} />
                <Route path="/admin/orders" element={<OrderAdmin />} />
                <Route path="/admin/order/:id" element={<OrderUpdate />} />
                {/* <Route path="/admin/slides" element={<SlideAdminPage />} />
                <Route path="/admin/users" element={<UserAdminPage />} /> */}
                {/* <Route
                    path="/admin/products/edit/:id"
                    element={<EditProduct />}
                />
                <Route
                    path="/admin/categories"
                    element={<CategoryAdminPage />}
                />
                <Route path="/admin/reviews" element={<ReviewAdminPage />} />  */}
            </Route>

            {/* <Route path="/load" element={<Loading />} />
            <Route path="/auth" element={<LoginSignup />} /> */}
        </Routes>
    )
}

export default App
