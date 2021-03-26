import styled from 'styled-components'

const BottomSectionStyle = styled.div.attrs(props => ({ className: props.className }))`
    margin-top:48px;
    
    .rating {
        width:calc(50% - 16px);

        .single-rate {
            width:50%;
            
            &:not(:first-child):not(:nth-child(2)){
                margin-top:32px;
            }
            
            .single-rate-block {
                .logo-rating {
                    .rate {
                        font-size:16px;
                        margin-left:8px;
                    }
                }

                .stars {
                    margin-top:8px;
                    span {
                        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
                        background-color:#f3ad16;
                        width:20px;
                        height:20px;
                    }
                }
            }
        }
    }

    @media screen and (max-width:900px){
        margin-top:32px;
        flex-direction:column;

        .rating {
            width:100%;

            .single-rate {
                justify-content:center;
                
                &:not(:first-child):not(:nth-child(2)){
                    margin-top:24px;
                }
                
                .single-rate-block {
                    .logo-rating {
                        .rate {
                            font-size:16px;
                        }
                    }

                    .stars {
                        span {
                            width:16px;
                            height:16px;
                        }
                    }
                }
            }
        }
    }
`
export default BottomSectionStyle