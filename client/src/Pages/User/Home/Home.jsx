import React, {useEffect} from 'react'
import Product from '../../../Components/User/ProductCpn/Product'

import Slider from '../../../Components/User/Slider/Slider'

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
        });
    }, []);

    return (
        <div>
            <Slider />
            <div className="products">
                <div className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Latest product</h2>
                        </div>
                        <Product />
                        <div className="section-footer">
                            <a href="./products" className="btn-flat btn-hover">
                                view all
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <BestSelling /> */}
        </div>
    )
}

export default Home
