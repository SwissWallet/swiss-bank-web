import styled from "styled-components";

export const StyledInputLogin = styled.div`

    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 100px;

    width: 52%;
    height: 100vh;

    h2 {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 32px;

        color: #FFFFFF;
    }

    input {
        border: 1px solid #A7A7A7;
        color: #c50000;
        font-size: 20px;
        padding: 25px 20px;
        border-radius: 5px;
        background-color: transparent;
    }

    input::placeholder {
        color: #c50000;
    }

    a {
        text-align: end;

        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 20px;

        color: #FFFFFF;

        text-decoration: none;
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
        transition: ease-in-out 0.15s;
        cursor: pointer;
    }
    
    button:hover{
        background-color: #e50000;
        transform: scale(1.01);
    }
`