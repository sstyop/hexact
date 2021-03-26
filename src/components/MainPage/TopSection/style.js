import styled from 'styled-components'

const TopSectionStyle = styled.div.attrs(props => ({ className: props.className }))`
    margin-top:48px;

    .title {
        font-size:32px;
    }

    .block {
        margin-top:32px;
        
        .content {
            width:calc(50% - 16px);

            .subtitle {
                font-size:24px;
                margin-bottom:20px;
            }

            p {
                margin-bottom:20px;
                font-size:16px;
            }

            .get-started {
                align-self:flex-start;
                background-color:#16ac59;
                border-radius:30px;
                border:none;
                color:#fff;
                padding:16px 40px;
                transition:0.3s ease;
                font-size:20px;

                @media screen and (min-width:1200px){
                    &:hover {
                        box-shadow: 0 0 20px rgba(22, 172, 89, 0.5), 0 0 20px rgba(22, 172, 89, 0.5);
                    }
                }
            }
        }

        .featured-image {
            width:calc(50% - 16px);
        }
    }

    @media screen and (max-width:900px){
        margin-top:32px;

        .block {
            margin-top:24px;
            flex-direction:column;

            .content {
                width:100%;
                margin-bottom:24px;

                .subtitle {
                    margin-bottom:16px;
                }

                p {
                    margin-bottom:16px;
                }

                .get-started {
                    padding:12px 32px;
                    font-size:16px;
                }
            }

            .featured-image {
                width:100%;
            }
        }
    }
`
export default TopSectionStyle