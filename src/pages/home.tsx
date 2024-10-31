import { useContext, useEffect, useState } from "react";
import AccoutBalance from "../components/accout-balance/account-balance";
import ExtractArea from "../components/extract-area/extract-area";
import PerfilHeader from "../components/perfil-header/perfil-header";
import Sidebar from "../components/sidebar/sidebar";
import { api } from "../lib/axios";
import { UserContext } from "../context/user";

export interface Extract {
    id: string,
    description: string,
    value: string,
    type: string,
    date: string
}

export default function Home(){
    const [ extract, setExtract ] = useState<Extract[]>([]);

    const { setDataCard, setDataAccount, logIn } = useContext(UserContext);
    
    async function getCardData(){
        await api.get(`/v1/cards/current`)
        .then((json) => {
            const data = json.data;
            if(data){
                setDataCard(data);
            }
        })
        .catch((err) => console.log(err));
    };

    async function getAccountData(){
        await api.get(`/v1/accounts/current`)
        .then((json) => {
            const data = json.data;
            if(data){
                setDataAccount(data);
            }
        })
    };

    async function getExtract(){
        await api.get(`/v1/extracts/current`)
        .then((json) => {
            const data = json.data;
            if(data){
                setExtract(data.map((item: Extract) => ({
                    id: item.id,
                    type: item.type,
                    date: item.date,
                    value: item.value,
                    description: item.description,
                })))
            }
        })
        .catch((err) => console.log(err))
    };

    async function isValidToken(){
        await api.get(`/v1/users/current`)
        .then((json) => {
            const data = json.data;
            if(data){
                logIn(data)
            }
        })
        .catch((err) => console.log("error \n", err))
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        isValidToken();
        getCardData();
        getAccountData();
        getExtract();
    } else {
        console.log("Token não encontrado.");
    }
    }, [])

    return(
        <div style={{display:"flex", backgroundColor:"#1B1B1B"}}>
            <Sidebar />
            <div style={{width: "100%", padding:"30px 60px", display:"flex", flexDirection: "column", gap:"30px", height:"100vh"}}>
                <PerfilHeader />
                <AccoutBalance />
                <ExtractArea 
                    extract={extract}
                />
            </div>
        </div>

    )
}