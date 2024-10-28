import { useContext, useEffect } from "react";
import AccoutBalance from "../components/accout-balance/account-balance";
import ExtractArea from "../components/extract-area/extract-area";
import PerfilHeader from "../components/perfil-header/perfil-header";
import Sidebar from "../components/sidebar/sidebar";
import { api } from "../lib/axios";
import { UserContext } from "../context/user";

export default function Home(){
    const { setDataCard } = useContext(UserContext);
    
    async function getCardData(){
        await api.get(`/v1/cards/current`)
        .then((json) => {
            const data = json.data;
            setDataCard(data);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        getCardData();
    }, [])

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