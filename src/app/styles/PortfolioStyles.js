import { createGlobalStyle } from 'styled-components';

export const PortfolioStyles = createGlobalStyle`
    .portfolio {
        background-color: #f5f5f5;
        z-index: 1;
    }
    .portfolioContainer{
        width: 100%;
        margin-top: 4rem;
        margin-bottom: 1.15rem;
    }
    .mediaCardContainer{
        width: 100%;
    }
    .cardContainer {
        max-width: 100%;
        max-height: 100%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        transition: all 0.5s;
        border-radius: 1rem;
    }
    .cardContainer:hover {
        box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
    }
    .action {
        position: relative;
        max-height: 345px;
    }
    .action:hover .photo{
        scale: 1.2;
        transition: all 0.3s;
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
    .photo {
        height: 100%;
        width: 100%;
        min-height: 15rem;
        min-width: 15rem;
        border-radius: 1rem;
        transition: all 0.3s;
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
        flex-direction: column;
        border-radius: 66% 25% 29% 61% / 50% 52% 43% 46%;
        width: 200px;
        height: 200px;
        background: linear-gradient(180deg, rgba(4,28,50,1) 55%, rgba(2,131,165,1) 100%);
        transition: all 1s;
    }
    .modal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80%;
        border-radius: 1rem;
        box-shadow: 24;
        padding: 0;
    }
    .modalCard{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }
    .modalImage{
        height: 60%;
        width: 100%;
        border-bottom: 4px solid #f50057;
        background-image: cover;
        background-position: center;
    }
    .modalContainerContent{
        height: 26%;
        padding: 1rem;
    }
    .modalContainerButtons{
        height: 14%;
        padding: 1rem;
    }
    .modalButtons{
        display: flex;
        justify-content: space-between;
        flex:1;
    }
`