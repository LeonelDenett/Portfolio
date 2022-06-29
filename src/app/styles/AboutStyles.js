import { createGlobalStyle } from 'styled-components';

export const AboutStyles = createGlobalStyle`
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
    .iconAboutHover{
        position: relative;
        font-size: 3.5rem;
        color: gold;
    }
    .HexagoneContainer{
        width: 7.5rem;
        height: 6.5rem;
        background-color: #f50057;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
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
    /* Image Profile & Skills  */
    .containerImageSkills{
        margin-bottom: -5.25rem;
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
`