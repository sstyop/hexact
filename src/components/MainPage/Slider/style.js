import styled from 'styled-components'

const SliderStyle = styled.div.attrs(props => ({ className: props.className }))`
    margin-top:48px;

    .title {
        font-size:32px;
        margin-bottom:32px;
    }

    @media screen and (max-width:900px){
        margin-top:32px;

        .title {
            margin-bottom:24px;
        }
    }
`
export default SliderStyle