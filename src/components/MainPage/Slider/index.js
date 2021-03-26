import { memo as Memo, useEffect, useMemo, useState} from 'react'
import PropTypes from "prop-types"
import * as React from "react"
import Image from '../../Image'
import SliderStyle from './style'
import Swiper from "react-id-swiper"
import 'swiper/swiper.scss'
import SwiperCore, {Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

const Slider = Memo(props => {

    const params = {
        autoplay:{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLast: true,
        },
        spaceBetween: 30,
        slidesPerView: 4,
        loop:true,
        breakpoints:{
            900:{
                slidesPerView: 5,
            },
            480:{
                slidesPerView: 4,
            },
            320:{
                slidesPerView: 3,
            },
        }
    }

    const storePartners = useMemo(() => {
        return props.partnersArr.map((item,index)=>{
            return (
                <Image src={item.photo} key={index} />
            )
        })
    },[props.partnersArr])

    return(
        <SliderStyle className='top-section flexBoxColumn'>
            <h3 className='title font-bold'>{props.sliderTitle}</h3>
            <div className='slider'>
                <Swiper {...params}>
                    {storePartners}
                </Swiper>
            </div>
        </SliderStyle>
    )
})

Slider.propTypes = {
    partnersArr:PropTypes.array,
    sliderTitle:PropTypes.string
}

export default Slider
