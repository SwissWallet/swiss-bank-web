import styled from "styled-components";

export const StyleExtract = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #a7a7a7;
    padding: 20px;
    border-radius: 5px;

    h1{
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 100;
        font-size: 24px;
        letter-spacing: -0.01em;

        color: #FFFFFF;
        /* padding-bottom: 20px; */
    }

    .row{
        display: flex;
        gap: 15px;
        align-items: center;
        padding-top: 20px;
    }

    .row > div {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .text > h4 {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.07em;

        color: #FFFFFF;
    }

    .text > p {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.07em;

        color: #A7A7A7;
    }

    .button-img{
        align-items: center;
        background-color: #2C2C2C;
        padding: 10px;
        border-radius: 5px;
    }

    article {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #a7a7a7;
        width: 100%;

        height: 100%;
    }

    article > h4 {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.07em;

        color: #FFFFFF;
    }


`
