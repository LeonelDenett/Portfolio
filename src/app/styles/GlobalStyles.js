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
        max-width: 50%;
        display: flex;
        justify-content: center;
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
    /* Footer */
    .footer{
        min-height: 120px;
        background-color: darkkhaki;
    }
    /* End Footer */
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
    .containerBox{
        text-align: center;
        z-index: 10;
    }
    .underline::after{
        content: "";
        display: block;
        justify-content: center;
        align-items: center;
        width: 5.5rem;
        height: 5px;
        background-color: currentColor;
        margin: auto;
        position: relative;
        left: 7px;
    }
    /* End Paages Set Up */
    /* Dashboard Page */
    .dashboard {
        z-index: 1;
        justify-content: center;
        align-items: center;
    }
    .dashboardShadow{
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%);
        width: 100%;
        height: 100vh;
        position: absolute;
    }
    .dashboardBgContainer{
        min-height: 100vh;
        max-height: 100vh;
        position: absolute;
        z-index: 0;
        opacity: 0.9;
    }
    .dashboardButton:hover .dashboardIcon{
        transform: rotate(90deg);
        transition: all 0.3s;
    }
    .dashboardButton{
        border: solid 2px;
        margin-top: 1rem;
    }
    .dashboardButton:hover{
        border: solid 2px;
    }
    .dashboardIcon{
        transition: all 0.3s;
    }
    /* End Dashboard Page */
    /* About Page */
    .about, .portfolio {
        z-index: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
        padding-bottom: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .iconContainerAbout{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }
    .iconHexagoneAbout{
        position: absolute;
        font-size: 7rem;
    }
    .iconAbout{
        position: relative;
        font-size: 3.5rem;
    }
    .iconDivider{
        font-size: 2rem;
        border: solid 2px rgb(251, 158, 191);
        cursor: pointer;
    }
    .iconDownDivider {
        transform: rotate(180deg);
        transition: all 0.3s;
        cursor: pointer;
    }
    .iconUpDivider {
        transform: rotate(0deg);
        transition: all 0.3s;
        cursor: pointer;
    }
    .imageContainerAbout{
        font-size: 20rem;
        position: relative;
    }
    .skillsContainerAbout{
        display: flex;
        flex-direction: row;
        flex: 1;
        margin-bottom: 1rem;
    }
    .skillsName{
        background-color: #041C32;
        width: 20%;
    }
    .skillsProgressContainer{
        width: 80%;
    }
    .skillsLinearProgress{
        height: 100%;
        z-index: 6;
    }
    .skillsLinearProgress2{
        height: 100%;
        position: relative;
        bottom: 1.5rem;
        z-index: 7;
        background-color: transparent;
    }
    .skillsPorcentage{
        background-color: transparent;
        width: 0%;
        position: relative;
        z-index: 7;
    }
    /* End About Page */
    .portfolio {
        background-color: #f5f5f5;
        z-index: 1;
    }
    .contact {
        z-index: 1;
    }
`