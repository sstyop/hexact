/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {Header} from "../../components"
import Typography from "../../assets/styles/typography"
import PageStyle from "./style"

const Page = (props) => {
    return (
        <>
            <Typography/>
            <PageStyle className={`page ${props.className}`}>
                <Header/>
                {props.children}
            </PageStyle>
        </>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Page
