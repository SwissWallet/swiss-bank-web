import styled from "styled-components";

export const PayStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;


    /* background-color: #fff; */

    h1, span {
        color: #fff;
        font-family: "Inter", sans-serif;
        font-weight: 100;
    }
    
    span{
        font-size: 124px;
        padding: 0px 0px 0px 10px;
    }

    h1 {
        font-size: 48px;
    }

    button {
        display: flex;
        justify-content: center;
        border: none;
        border-radius: 5px;
        background-color: #C50000;
        color: #fff;
        font-size: 24px;
        padding: 25px;
        width: 500px;
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }

    button:hover{
        background-color: #e50000;
        transform: scale(1.01);
    }
`;
