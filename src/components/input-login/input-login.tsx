import { useContext, useState } from "react";
import { api } from "../../lib/axios.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user/index.tsx";
import AbstractIcon from "../../assets/abstract-icon.png"
import Button from "../button/index.tsx";
import Input from "../input/index.tsx";

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
        <div className="flex flex-col flex-wrap gap-3 justify-center md:gap-16 p-16 md:p-24 md:w-[52%]">
            <h2 className="font-sans font-medium text-4xl text-white">Bem-vindo!</h2>
            <Input typeProps="text" onChangeProps={setUsername} placeholderProps="Username"></Input>
            <Input placeholderProps="••••" onChangeProps={setPassword} typeProps="password"/>
            <Button onClick={() => onAuthUser()}>Login</Button >
        </div>
    );
}