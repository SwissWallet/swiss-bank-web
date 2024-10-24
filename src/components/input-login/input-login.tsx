import { useState } from "react";
import { api } from "../../lib/axios.js";
import { StyledInputLogin } from "./input-style.js";
import { useDispatch } from "react-redux";
import { setLogin } from "../../features/user-slice.js";
import { useNavigate } from "react-router-dom";

export default function InputLogin() {

    const [ username, setUsername ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function auth(token: string){
        
        await api.get(`/v1/users/current`, {
            headers: {
                'Authorization': `Bearer ${token}`   
            }
        })
        .then((json) => {
            api.defaults.headers['Authorization'] = `Bearer ${token}`;
            dispatch(setLogin(json.data));
            navigate(`/pix`);
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
