import styled from 'styled-components'

const PageStyle = styled.main.attrs(props => ({ className: props.className }))`
    max-width:1328px;
    padding: 0 64px;
    width:100%;
    margin:0 auto;
    
    @media screen and (max-width:1200px){
        padding: 0 48px;
    }

    @media screen and (max-width:480px){
        padding: 0 24px;
    }
`
export default PageStyle