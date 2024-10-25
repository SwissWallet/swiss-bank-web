import styled from "styled-components";

export const StyleHeader = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    border: 1px solid #a7a7a7;
    padding: 20px;
    border-radius: 5px;

    p{
        color: #d6d6d6;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 24px;
    }

    div {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
    }

    div > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    article{
        border: 1px solid #a7a7a7;
        padding: 20px;
        border-radius: 5px;
        transition: 0.15s ease-in-out;
        cursor: pointer;

    }

    article:hover{
        transform: scale(1.05);
    }


`