import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { useDispatch, useSelector } from 'react-redux'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './style.scss'

import { Pagination } from 'swiper'

import slide_1 from '../../../Assets/Images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
import slide_2 from '../../../Assets/Images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png'
import slide_3 from '../../../Assets/Images/JBL_JR 310BT_Product Image_Hero_Skyblue.png'
import slide_4 from '../../../Assets/Images/JBL_QUANTUM ONE_Product Image_Angle.png'
const Slider = () => {
    const { listSlides } = useSelector(state => state.getAllSlidesAdmin)

    console.log('listSlides', listSlides)

    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
                style={{ paddingTop: '50px' }}
            >
                {listSlides.map(slide => (
                    <SwiperSlide className="swiper__item">
                        <div className="swiper__content">
                            <span>{slide.name}</span>
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                        <div className="swiper__image">
                            <img
                                src={slide.image.url}
                                alt={slide.image.public_id}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider
