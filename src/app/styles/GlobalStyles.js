import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        min-height: 100vh;
        max-width: 100vw;
    }
    /* Header */
    .navBar{
        width: 100%;
        text-align: center;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        border-bottom: solid 2px red;
        background-color: #041C32;
        height: 80px;
    }
    .navBarDesktop{
        max-width: 100%;
        display: flex;
        justify-content: start;
        padding-left: 10%;
    }
    .containerNavBarDesktop{
        margin: 0;
        padding: 0;
    }
    .hide {
        display: none;
    }
    .currentLink{
        color: red;
        transition: all 0.5s;
    }
    .navBarMobile{
        display: flex;
        justify-content: end;
        border-bottom: solid 2px #00d4ff;
        background-color: #041C32;
    }
    .listContainer{
        background-color: #041C32;
        color: #e3f2fd;
    }
    /* End Header */
    /* Pages Set Up */
    .layout{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .pages{
        min-height: 100vh;
        display: flex;
        flex: 1;
    }
    .content, .contentDesktop {
        z-index: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
        padding-bottom: 5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .contentDesktop {
        padding-left: 10%;
        padding-right: 10%;
    }
    .containerBox{
        text-align: center;
        z-index: 10;
    }
    .underline::after, .underlineWhite::after{
        content: "";
        display: block;
        justify-content: center;
        align-items: center;
        width: 5.5rem;
        height: 5px;
        margin: auto;
        position: relative;
        left: 7px;
    }
    .underlineWhite::after{
        background-color: #e3f2fd;
    }
    .underline::after{
        background-color: rgba(0, 0, 0, 0.87);
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`