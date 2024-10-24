import { useState } from "react";
import { api } from "../../lib/axios.js";
import { StyledInputLogin } from "./input-style.js";

export default function InputLogin() {

    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    async function login(){
        console.log(username, password)
        await api.post(`/v1/auth`, {
            username,
            password
        })
        .then((json) => {
            const token = json.data.token;
            localStorage.setItem("token", token)
        })
        .catch((err) => console.log(err));

    };

    function onAuthUser(){
        if(!username || !password) return
        login();
    };

    return (
        <StyledInputLogin>
            <h2>Bem-vindo!</h2>
            <input type="text" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="••••" onChange={(e) => setPassword(e.target.value)}/>
            <a href="#">Esqueci minha senha</a>
            <button onClick={onAuthUser}>Login</button>
        </StyledInputLogin>
    );
}
