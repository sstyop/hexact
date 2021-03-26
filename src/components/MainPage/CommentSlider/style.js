import styled from 'styled-components';

const CommentsSectionStyle = styled.div.attrs({className: "comments"})`
    display:flex;
    width:calc(50% - 16px);
    position: relative;

    .slider {
        width:100%;
        position:relative;
        padding-top:60%;

        .single-comment {
            max-width:380px;
            padding:24px;
            position:absolute;
            top:0;
            width:100%;
            cursor:pointer;
            transition-duration:1s;
            transition-property:transform,left,opacity;
            background-color:#fafafa;
            
            &:nth-of-type(1){
                left:20%;
                z-index:1;
            }

            &:nth-of-type(2){
                left:50%;
                z-index:2;
            }
            &:nth-of-type(3){
                left:80%;
                z-index:1;
            }

            .com {
                font-size:14px;
            }

            .role {
                font-size:16px;
            }

            .gatsby-image-wrapper {
                width:50px;
                height:50px;
                border-radius:50%;
                margin:16px 0;
            }

            .comp-logo {
                margin-top:16px;
                align-self:flex-end;
            }
        }
    }

    .sl-btn {
        width:32px;
        height:32px;
        position: absolute;
        top:50%;
        background-color:#16ac59;
        border-radius:50%;
        cursor: pointer;
        transform:translateY(-50%);
        z-index:5;

        @media screen and (min-width:1200px){
            &:hover {
                &:before {
                    left:40%;
                }
            }
        }
        
        &:before {
            content:"";
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:16px;
            height:16px;
            clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
            background-color:white;
            transition:0.3s ease-out;
        }

        &.left {
            left:5%;
        }
        
        &.right {
            transform:rotate(180deg) translateY(-50%);
            transform-origin:top;
            right:5%;
        }
    }

    @media screen and (max-width:1200px){
        .slider {
            padding-top:54%;

            .single-comment {
                max-width:300px;
                padding:20px;

                .com {
                    font-size:10px;
                }

                .role {
                    font-size:12px;
                }

                .gatsby-image-wrapper {
                    width:32px;
                    height:32px;
                    margin:12px 0;
                }

                .comp-logo {
                    margin-top:12px;
                }
            }
        }

        .sl-btn {
            width:24px;
            height:24px;

            &:before {
                width:12px;
                height:12px;
            }
        }
    }

    @media screen and (max-width:900px){
        margin-top:32px;
        width:70%;
    }

    @media screen and (max-width:480px){
        margin-top:24px;
        width:100%;

        .slider {
            padding-top:70%;
        }
    }
`
export default CommentsSectionStyle;