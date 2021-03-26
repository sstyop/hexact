import styled from "styled-components"

const HeaderStyle = styled.div.attrs((props) => ({ className: props.className }))`
    padding: 32px 0;

    .logo { 
        width:210px;
        height:auto;
    }

    nav {
        .single-page {
            text-transform:capitalize;
            margin:0 16px;
            font-size:16px;
            padding:4px 0;

            &:before {
                content:'';
                position:absolute;
                top:100%;
                left:50%;
                transform:translateX(-50%) scale(0.85);
                width:100%;
                height:2px;
                background-color:#16ac59;
                transition:0.3s ease;
            }
            
            &:after {
                content:'';
                position:absolute;
                top:100%;
                left:50%;
                transform:translateX(-50%) scale(0.85);
                width:100%;
                height:2px;
                background-color:#16ac59;
                transition:0.3s ease;
            }
            
            @media screen and (min-width:1200px){
                &:hover {
                    &:before {
                        top:0;
                        transform:translateX(-50%) scale(1);
                    }

                    &:after {
                        transform:translateX(-50%) scale(1);
                    }
                }
            }
        }
    }

    .sign-block {
        .get-started {
            background-color:#16ac59;
            border-radius:30px;
            border:none;
            color:#fff;
            padding:8px 16px;
            transition:0.3s ease;
            font-size:16px;
            
            @media screen and (min-width:1200px){
                &:hover {
                    box-shadow: 0 0 20px rgba(22, 172, 89, 0.5), 0 0 20px rgba(22, 172, 89, 0.5);
                }
            }
        }
        
        .login {
            background:transparent;
            border:none;
            color:#000;
            margin-left:16px;
            transition:0.3s ease;
            font-size:16px;

            &:before {
                content:'';
                position:absolute;
                top:100%;
                left:0;
                width:0;
                height:2px;
                background-color:#16ac59;
                transition:0.3s ease;
            }

            @media screen and (min-width:1200px){
                &:hover {
                    &:before {
                        width:100%;
                    }
                }
            }
        }
    }

    @media screen and (max-width:900px){
        padding: 24px 0;
        position: relative;

        .logo { 
            width:150px;
            height:auto;
        }

        nav {
            position: absolute;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            transform:translateX(100%);
            transition:0.3s ease-out;
            background-color:#fff;
            z-index:10;
            flex-direction:column;
            justify-content:center;

            &.active {
                transform:translateX(-48px);
            }


            .single-page {
                margin:16px 0;
                font-size:16px;
                padding:4px 0;

                &:before {
                    content:'';
                    position:absolute;
                    top:100%;
                    left:50%;
                    transform:translateX(-50%) scale(0.85);
                    width:100%;
                    height:2px;
                    background-color:#16ac59;
                    transition:0.3s ease;
                }
                
                &:after {
                    content:'';
                    position:absolute;
                    top:100%;
                    left:50%;
                    transform:translateX(-50%) scale(0.85);
                    width:100%;
                    height:2px;
                    background-color:#16ac59;
                    transition:0.3s ease;
                }
                
                @media screen and (min-width:1200px){
                    &:hover {
                        &:before {
                            top:0;
                            transform:translateX(-50%) scale(1);
                        }

                        &:after {
                            transform:translateX(-50%) scale(1);
                        }
                    }
                }
            }
        }

        .sign-block {
            flex-direction:column;
            margin-top:24px;
            
            .get-started {
                padding:6px 12px;
                font-size:14px;
            }
            
            .login {
                margin-top:12px;
                margin-left:12px;
                font-size:14px;
            }
        }

        .burger {
            width:32px;
            height:24px;
            position: relative;
            cursor: pointer;
            z-index:11;
            
            &.active {
                span {
                    &:nth-child(1){
                        transform:rotate(45deg);
                    }
                    
                    &:nth-child(2){
                        width:0;
                    }
                    
                    &:nth-child(3){
                        transform:rotate(-45deg);
                    }
                }
            }
            
            span {
                position: absolute;
                width:100%;
                height:2px;
                background-color:#16ac59;
                transition:0.3s ease-out;

                &:nth-child(1){
                    top:0;
                    left:0;
                    transform-origin:top left;
                }
                &:nth-child(2){
                    top:calc(50% - 1px);
                    left:0;
                }
                &:nth-child(3){
                    bottom:0;
                    left:0;
                    transform-origin:bottom left;
                }
            }
        }
    }

    @media screen and (max-width:480px){
        nav {
            &.active {
                transform:translateX(-24px);
            }
        }
    }
`
export default HeaderStyle