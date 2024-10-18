import { StyledInputLogin } from "./input-style.js";

export default function InputLogin() {
    return (
        <StyledInputLogin>
            <h2>Bem-vindo!</h2>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="••••" />
            <a href="#">Esqueci minha senha</a>
            <button>Login</button>
        </StyledInputLogin>
    );
}
