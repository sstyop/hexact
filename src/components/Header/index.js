import { useState } from 'react'
import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import HeaderStyle from './style'
import { Link } from "gatsby"

const Header = () => {
    const [burgerOpen, setburgerOpen] = useState(false);
    return(
        <HeaderStyle className='header flexBox alignMiddle spaceBetween'>
            <Link className='logo flexBox alignMiddle' to='/'>
                <StaticImage src='../../assets/images/hexometerLogo.svg' alt='logo'/>
            </Link>
            <nav className={`flexBox alignMiddle ${burgerOpen ? 'active' : ''}`}>
                <Link to='#' className='single-page posRelative fontRegular'>How does it Work?</Link>
                <Link to='#' className='single-page posRelative fontRegular'>Solutions</Link>
                <Link to='#' className='single-page posRelative fontRegular'>Pricing</Link>
                <Link to='#' className='single-page posRelative fontRegular'>Tools</Link>
                <Link to='#' className='single-page posRelative fontRegular'>Blog</Link>
                {window.innerWidth <= 900 ? 
                <div className='sign-block flexBox alignMiddle'>
                    <button className='get-started fontMedium'>Get Started for Free</button>
                    <button className='login posRelative fontMedium'>Login</button>
                </div>
                : null}
            </nav>
            {window.innerWidth > 900 ? 
            <div className='sign-block flexBox alignMiddle'>
                <button className='get-started fontMedium'>Get Started for Free</button>
                <button className='login posRelative fontMedium'>Login</button>
            </div>
            : null}
            {window.innerWidth < 900 ? <div onClick={() => setburgerOpen(!burgerOpen)} className={`burger ${burgerOpen ? 'active' : ''}`}><span></span><span></span><span></span></div>: null}
        </HeaderStyle>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
