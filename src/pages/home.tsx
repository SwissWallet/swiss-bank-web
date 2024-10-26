import { useDispatch, useSelector } from "react-redux";
import AccoutBalance from "../components/accout-balance/account-balance";
import ExtractArea from "../components/extract-area/extract-area";
import PerfilHeader from "../components/perfil-header/perfil-header";
import Sidebar from "../components/sidebar/sidebar";
import { api } from "../lib/axios";
import { setAccount } from "../features/account-slice";
import { useEffect } from "react";
import { RootState } from "../store";

export default function Home(){

    const dispatch = useDispatch();

    const account = useSelector((state: RootState) => state.account.value);

    async function getAccountData(){
        await api.get(`/v1/accounts/current`)
        .then((json) => {
            const data = json.data;
            dispatch(setAccount(data));
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(account)
        getAccountData();
    }, []);

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