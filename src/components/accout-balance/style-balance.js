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
    }
`