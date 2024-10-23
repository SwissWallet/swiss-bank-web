import { api } from "../../lib/axios.js";
import { StyledInputLogin } from "./input-style.js";

export default function InputLogin() {

    async function authUser(){
        await api.post(`/v1/auth`)
        .then((json) => console.log(json.data))
        .catch((err) => console.log(err));

    };

    return (
        <StyledInputLogin>
            <h2>Bem-vindo!</h2>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="••••" />
            <a href="#">Esqueci minha senha</a>
            <button onClick={authUser}>Login</button>
        </StyledInputLogin>
    );
}
