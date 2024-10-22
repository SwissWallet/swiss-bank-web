import styled from "styled-components";

export const StyledTitleInput = styled.section`
    display: flex;
    width: 100%;
    padding: 30px 90px 0px 60px;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid; */

    h1{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
    }

    h4{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;

        color: #FFFFFF;
    }

    p{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;

        color: #FFFFFF;
    }

    h4, p {
        color: #FFFFFF;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    input{
        padding: 35px;
        border-radius: 5px;
        width: 1000px;
        background-color: transparent;
        border: 1px solid #a7a7a7;
    }

    input::placeholder{
        color: #c50000;
        font-size: 20px;
    }

    article{
        display: flex;
        align-items: center;
        margin: 60px;
        gap: 30px;
        padding-bottom: 5px;
        border-bottom: 1px solid #a7a7a7;
    }
`


