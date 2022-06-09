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
        background: rgb(4,28,50);
        background: linear-gradient(180deg, rgba(4,28,50,1) 50%, rgba(2,131,165,1) 90%, rgba(0,212,255,1) 100%);
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
    .about, .portfolio, .contact {
        z-index: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 5rem;
        padding-bottom: 5rem;
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
    /* Portfolio Page */
    .portfolio {
        background-color: #f5f5f5;
        z-index: 1;
        padding-left: 14%;
        padding-right: 14%;
    }
    .mediaCardContainer{
        width: 100%;
    }
    .cardContainer {
        max-width: 100%;
        max-height: 100%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        transition: all 0.5s;
    }
    .cardContainer:hover {
        box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
    }
    .action {
        position: relative;
        max-height: 345px;
    }
    .action:hover .media{
        scale: 1.4
    }
    .action:hover .bgColorUp{
        top: 0;
        transform: translateY(0px);
        z-index: 8;
        opacity: 0.4;
        background-color: black;
    }
    .action:hover .bgColorDown{
        top: 0px;
        transform: translateY(0px);
        z-index: 8;
        opacity: 0.4;
        background-color: black;
    }
    .action:hover .boxDown{
        top: 0;
        transform: translateY(0px);
        z-index: 9;
    }
    .action:hover .boxUp{
        top: 0;
        transform: translateY(0px);
        z-index: 9;
    }
    .media {
        height: 300px;
        max-height: 300px;
        transition: all 1s;
    }
    .bgColor{
        width: 100%;
        height: 100%;
        z-index: 8;
        position: absolute;
        transition: all 1s;
    }
    .bgColorUp{
        top: 300px;
        transform: translateY(100%);
    }
    .bgColorDown{
        top: -300px;
        transform: translateY(-300px);
    }
    .box{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s;
    }
    .boxDown {
        top: 300px;
        transform: translateY(-600px);
    }
    .boxUp {
        top: 300px;
        transform: translateY(100%);
    }
    .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 200px;
        height: 200px;
        background-color: gold;
        transition: all 1s;
    }
    .contact {
        background: rgb(4,28,50);
        background: linear-gradient(145deg, rgba(4,28,50,1) 50%, rgba(2,131,165,1) 90%, rgba(0,212,255,1) 100%);
        z-index: 1;
        padding-left: 14%;
        padding-right: 14%;
        display: flex;
        flex: 1;
    }
    .bgTest{
        opacity: 0.5;
        position: absolute;
    }
    .test{
        clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        background-color: red;
    }
    .lineWhite::after{
        content: "";
        display: block;
        justify-content: center;
        align-items: center;
        width: 5.5rem;
        height: 5px;
        background-color: #e3f2fd;
        margin: auto;
        position: relative;
        left: 7px;
    }

    .formContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 2px solid #e3f2fd;
        height: 30rem;
        border-radius: 84% 16% 85% 15% / 31% 85% 15% 69%;
        padding: 2rem;
    }
    .inputForm{
        margin-bottom: 1.3rem;
    }
    .footer{
        display: flex;
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 5vh;
        width: 100%;
        border-top: 2px solid #f50057;
        background-color: #041c32;
    }
    
`