import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
    @font-face {
        font-family: PoppinsMedium;
        src: url('/fonts/Poppins-Medium.ttf') format('truetype');
        font-display: auto;
        font-style: normal;
        font-weight: 500;
    }

    @font-face {
        font-family: PoppinsBold;
        src: url('/fonts/Poppins-Bold.ttf') format('truetype');
        font-display: auto;
        font-style: normal;
        font-weight: 700;
    }

    *:not(input):not(select):not(textarea) {
        user-select: none;
        -webkit-user-select: none;
    }

    * {
        box-sizing: border-box;
        -webkit-appearance: none;
        outline: none;
    }

    * {
        -webkit-font-smoothing: antialiased;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    body {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        color: #000;
        font-family: PoppinsMedium;
        -webkit-overflow-scrolling: touch;
        overflow-x: hidden;
        position: relative;
        background-color:#fff;
        
        main.page {
            min-height: 100vh;
            z-index: 1;
            position: relative;
            padding-bottom:60px;
        }
    }

    h1,h2,h3,h4,h5,h6,p,pre {
        padding:0;
        margin:0;
    }
    
    ul,
    fieldset {
        margin: 0;
        padding: 0;
        list-style: none;
        border: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    //colors
    .green {
        color:#16ac59;
    }

    
    //font-weight

    .fontMedium {
        font-family: PoppinsMedium;
    }

    .fontBold {
        font-family: PoppinsBold;
    }

    // flexbox
    
    .flexBoxWrap {
        display: flex;
        flex-wrap: wrap;
    }

    .flexBoxColumn {
        display: flex;
        flex-direction: column;
    }

    .flexBox {
        display: flex;
    }

    .alignMiddle {
        align-items: center;
    }

    .alignCenter {
        justify-content: center;
    }

    .justifyEnd {
        justify-content: flex-end;
    }
    
    .alignEnd{
        align-items: flex-end;
    }

    .justifyEnd{
        justify-content: flex-end;
    }

    .spaceBetween {
        justify-content: space-between;
    }

    //
    .textAlignCenter {
        text-align:center;
    }

    .posRelative {
        position: relative;
    }

    //buttons 
    button,.btn {
        webkit-appearance: none;
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.3s ease;
    }
`

export default Typography
