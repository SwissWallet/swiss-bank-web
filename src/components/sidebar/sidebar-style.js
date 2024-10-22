import styled from "styled-components";

export const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;

    background-color: #212121;
    padding: 30px;
    width: 300px;

    div{
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: #A7A7A7 1px solid;
    }

    h4{
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        font-size: 24px;
        /* letter-spacing: -0.06em; */

        color: #A7A7A7;
    }

    p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 200;
        font-size: 20px;
        letter-spacing: 0.22em;

        color: #A7A7A7;

        padding-bottom: 30px;

    }

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 25px;
    }

    li{
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 24px;
        color: #c50000;
        font-family: 'Inter', sans-serif;    
        
        transition: 0.1s ease-in-out ;
        cursor: pointer;
    }

    li:hover{
        transform: scale(1.05);
    }

    img {
        width: 28px;
        height: auto;
    }
`