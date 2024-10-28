import styled from "styled-components";

export const StyleBalance = styled.div`
    display: flex;
    justify-content: space-between;

    div > p, section > p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.06em;

        color: #A7A7A7;
    }
    
    h1 {
        font-size: 24px;
        padding-top: 10px;
    }

    span{
        font-size: 64px
    }
    
    span, h1{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        color: #FFFFFF;
    }

    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .button-img{
        align-items: center;
        background-color: #2C2C2C;
        padding: 10px;
        border-radius: 5px;
        transition: 0.1s ease-in-out;
        cursor: pointer;
    }

    .button-img:hover{
        transform: scale(1.05);
        /* box-shadow: 0px 10px 12px rgba(197, 0, 0, 0.5); */
        /* background-color: #A7A7A7; */
    }
`