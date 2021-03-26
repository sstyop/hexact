import { memo as Memo} from 'react'
import * as React from "react"
import PropTypes from "prop-types"
import TopSectionStyle from './style'
import { StaticImage } from "gatsby-plugin-image"

const TopSection = Memo(props => {

    return(
        <TopSectionStyle className='top-section flexBoxColumn'>
            <h4 className='title font-bold'>{props.title}</h4>
            <div className='block flexBox spaceBetween'>
                <div className='content flexBoxColumn'>
                    <h3 className='subtitle font-bold'>{props.subtitle}</h3>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>
                    <button className='get-started fontMedium'>Get Started with for Free</button>
                </div>
                <div className='featured-image'>
                    <StaticImage src='../../../assets/images/analytics.png' alt='analytics'/>
                </div>
            </div>
        </TopSectionStyle>
    )
})

TopSection.propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
    text1:PropTypes.string,
    text2:PropTypes.string,
    text3:PropTypes.string
}

export default TopSection
