import { useContext, useEffect, useState } from "react";
import AccoutBalance from "../components/accout-balance/account-balance";
import ExtractArea from "../components/extract-area/extract-area";
import PerfilHeader from "../components/perfil-header/perfil-header";
import Sidebar from "../components/sidebar/sidebar";
import { api } from "../lib/axios";
import { UserContext } from "../context/user";

interface Extract {
    id: string,
    description: string,
    value: string,
    type: string,
    date: string
}

export default function Home(){
    const [ extract, setExtract ] = useState<Extract[]>([]);

    const { setDataCard, setDataAccount } = useContext(UserContext);
    
    async function getCardData(){
        await api.get(`/v1/cards/current`)
        .then((json) => {
            const data = json.data;
            setDataCard(data);
        })
        .catch((err) => console.log(err));
    };

    async function getAccountData(){
        await api.get(`/v1/accounts/current`)
        .then((json) => {
            const data = json.data;
            setDataAccount(data);
        })
    };

    async function getExtract(){
        await api.get(`/v1/extracts/current`)
        .then((json) => {
            const data = json.data;
            console.log("data: ", data)
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

    useEffect(() => {
        getCardData();
        getAccountData();
        getExtract();
    }, [])

    console.log("extract: ", extract)

    return(
        <div style={{display:"flex", backgroundColor:"#1B1B1B"}}>
            <Sidebar />
            <div style={{width: "100%", padding:"30px 60px", display:"flex", flexDirection: "column", gap:"30px", height:"100vh"}}>
                <PerfilHeader />
                <AccoutBalance />
                <ExtractArea />
            </div>
        </div>

    )
}