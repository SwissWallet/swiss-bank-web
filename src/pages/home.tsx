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
    const [ isOpenSidebar, setIsOpenSidebar ] = useState<boolean>(false);

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
            <div className="w-[300px] h-screen md:block hidden">
                <Sidebar setIsOpenSidebar={setIsOpenSidebar}/>
            </div>
            {isOpenSidebar && (
                <div className="w-[300px] h-screen block md:hidden fixed z-50">
                    <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
                </div>
            )}
            
            <div className="w-full px-8 py-16 flex flex-col gap-8 h-screen" >
                <PerfilHeader
                    setIsOpenSidebar={setIsOpenSidebar}
                />
                <AccoutBalance />
                <ExtractArea 
                    extract={extract}
                />
            </div>
        </div>

    )
}