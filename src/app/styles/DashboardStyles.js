import { createGlobalStyle } from 'styled-components';

export const DashboardStyles = createGlobalStyle`
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
`