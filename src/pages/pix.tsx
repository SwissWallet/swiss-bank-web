import Pay from "../components/payment-section/payment-section.tsx"; // Verifique o caminho
import Sidebar from "../components/sidebar/sidebar";
import TitleInput from "../components/title-input/title-input";
import { api } from "../lib/axios.ts";

export function PixPage() {

    async function paymentPix(){
        await api.post(`http://localhost:8000/api/v1/codes/payment?code=${"SHbi7hS2xL1YBSiJlgSlU0LUmFI6hP"}`)
        .then(() => console.log("passou"))
        .catch((err) => console.log(err))
    };

    return (
        <div style={{ backgroundColor: "#1B1B1B", display: "flex", height: "100vh" }}>
            <Sidebar />
            <div style={{width:"100%"}}>
                <TitleInput />
                <Pay 
                    paymentPix={paymentPix}
                />
            </div>
        </div>
    );
}
