import { memo as Memo,useMemo} from 'react'
import PropTypes from "prop-types"
import * as React from "react"
import Image from '../../Image'
import {CommentSlider} from "../../../components"
import BottomSectionStyle from "./style"

const BottomSection = Memo(props => {
    const storeRates = useMemo(() => {
        return props.ratingsArr.map((item,index)=>{
            return (
                <div className='single-rate flexBox' key={index}>
                    <div className='single-rate-block flexBoxColumn alignMiddle'>
                        <div className='logo-rating flexBox'>
                            <Image src={item.logo} alt='logo'/>
                            <p className='rate'>{item.rate}/5</p>
                        </div>
                        <div className='stars flexBox'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            )
        })
    },[props.ratingsArr])

    return (
        <BottomSectionStyle className='flexBox spaceBetween alignMiddle'>
            <div className='rating flexBoxWrap'>
                {storeRates}
            </div>
            <CommentSlider comments={props.comments}/>
        </BottomSectionStyle>
    )
})

BottomSection.propTypes = {
    ratingsArr:PropTypes.array,
    logo:PropTypes.string,
    rate:PropTypes.string,
    comments:PropTypes.array
}

export default BottomSection
