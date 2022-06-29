import { createGlobalStyle } from 'styled-components';

export const ContactStyles = createGlobalStyle`
    /* Contact Page */
    .contact {
        background: rgb(4,28,50);
        background: linear-gradient(145deg, rgba(4,28,50,1) 50%, rgba(2,131,165,1) 90%, rgba(0,212,255,1) 100%);
        z-index: 1;
        display: flex;
        flex: 1;
        max-width: 100vw;
    }
    .sliderContainer{
        margin-top: 3rem;
    }
    .buttontestContainer{
        background-color: transparent;
        color: black;
        opacity: 0.4;
        transition: all 0.3s;
    }
    .buttontestContainer:hover{
        opacity: 0.8;
    }

    .paper{
        border-radius: 16% 84% 15% 55% / 65% 31% 69% 15%;

    }
    .bgImage{
        background: rgba(0, 0, 0, 1);
        border-radius: 16% 84% 15% 55% / 65% 31% 69% 15%;
        
        height: 18rem;
        max-height: 18rem;
        @media (min-width: 320px) and (max-width: 375px) {
            height: 18rem;
            max-height: 18rem;
        }
        @media (min-width: 375px) and (max-width: 600px) {
            height: 18rem;
            max-height: 18rem;
        }
        @media (min-width: 600px) and (max-width: 1200px) {
            height: 20rem;
            max-height: 20rem;
        }
        @media (min-width: 1200px) {
            height: 27rem;
            max-height: 27rem;
        }
    }
    .image{
        width: 100%;
        height: 100%;
        @media (min-width: 320px) and (max-width: 375px) {
            height: 18rem;
            max-height: 18rem;
        }
        @media (min-width: 375px) and (max-width: 600px) {
            height: 18rem;
            max-height: 18rem;
        }
        @media (min-width: 600px) and (max-width: 1200px) {
            height: 20rem;
            max-height: 20rem;
        }
        @media (min-width: 1200px) {
            height: 27rem;
            max-height: 27rem;
        }
    }
    .indicatorIconButtonProps{
        
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
        background-color: white;
        border: 2px solid #e3f2fd;
        border-radius: 84% 16% 85% 15% / 31% 85% 15% 69%;
        width: 100%;
        margin-top: 4rem;
        
    }
    .inputForm{
        margin-bottom: 1.3rem;
    }
    .inputForm:hover{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    .footer{
        display: flex;
        flex:1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-height: 9rem;
        border-top: 2px solid #f50057;
        background-color: #041c32;
    }
    .buttonContainerTop{
        position: relative;
        margin-top: -1.8rem;
        border: 2px solid #e3f2fd;
        background-color: #f50057;
    }
    .bar {
        opacity: 0;
        border-radius:50%;
        border: 2px solid #f50057;
        border-top-style:inset;
        border-right-style:inset;
        border-top-color: transparent;
        border-right-color: transparent;
        width:100%;
        height:100%;
        position:absolute;
        transform: rotate(135deg);
        transition: all 0.4s
    }
    .buttonContainerTop:hover{
        border: none;
        background: #e3f2fd;
    }
    .buttonContainerTop:hover .bar{
        opacity:1
    }
    .buttonContainerTop:hover .buttonTop{
        color: #f50057;
        transition: all 0.4s;
        scale: 1.02;
    }
    .buttonTop{
        transition: all 0.4s;
        color: #e3f2fd;
        border-radius: 100%;
    }
    .iconsButtonContainerMedia{
        margin-top: 1rem;
    }
    .buttonWrap {
        margin-left: 1rem;
        margin-right: 1rem;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        border-radius: 100%;
        &.instagram {
            background: #f50057;
            .iconButtonMedia.active { color: #f50057; }
        }
        &.linkedin {
            background-color: #0E76A8;
            .iconButtonMedia.active { color: #0E76A8; }
        }
        &.github {
            background-color: #CD2129;
            .iconButtonMedia.active { color: #CD2129; }
        }
        &:hover {
            .buttonInnerWrap {
            width: 3rem;
            height: 3rem;
            .iconButtonMedia.inactive { transform: translate(100px, -50%); }
            .iconButtonMedia.active { transform: translate(-50%, -50%); }
            }
        }
    }
    .buttonWrap:hover .instagramBg, .buttonWrap:hover .linkedinBg, .buttonWrap:hover .githubBg{
        background: #e3f2fd;
    }
    .buttonInnerWrap {
        width: 4rem;
        height: 4rem;
        border: 1px solid #DDD;
        position: absolute;
        left: 50%;
        top: 50%;
        overflow: hidden;
        background-color: #e3f2fd;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
    }
    .instagramBg{
        background: rgb(4,28,50);
        background: linear-gradient(90deg, rgba(4,28,50,1) 0%, rgba(2,131,161,1) 50%, rgba(0,212,255,1) 100%);
    }
    .linkedinBg{
        background: rgb(4,28,50);
        background: linear-gradient(180deg, rgba(4,28,50,1) 0%, rgba(2,131,161,1) 50%, rgba(0,212,255,1) 100%);
    }
    .githubBg{
        background: rgb(4,28,50);
        background: linear-gradient(270deg, rgba(4,28,50,1) 0%, rgba(2,131,161,1) 50%, rgba(0,212,255,1) 100%);
    }
    .iconButtonMedia {
        height: 2rem;
        width: 2rem;
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 50px;
        transition: all 0.3s ease;
        &.inactive {
        color: #e3f2fd;
        transform: translate(-50%, -50%);
        }
        &.active { transform: translate(-150px, -50%); }
    }
    .copyRight{
        margin-top: 0.5rem;
    }
    /* End Contact Page */
`