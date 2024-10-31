import { useContext, useState } from "react";
import { api } from "../../lib/axios.js";
import { StyledInputLogin } from "./input-style.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/index.tsx";

export default function InputLogin() {
    const { logIn } = useContext(UserContext);

    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");


    const navigate = useNavigate();

    async function auth(token: string){
        
        await api.get(`/v1/users/current`, {
            headers: {
                'Authorization': `Bearer ${token}`   
            }
        })
        .then((json) => {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const data = json.data;
            if(data){}
            logIn(data);
            navigate(`/home`);
        })
        .catch((err) => console.log(err))
    };

    async function login(){
        await api.post(`/v1/auth`, {
            username,
            password
        })
        .then((json) => {
            const token = json.data.token;
            localStorage.setItem("token", token);

            auth(token);
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
