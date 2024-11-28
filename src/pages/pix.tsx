import { useState } from "react";
import Pay from "../components/payment-section/payment-section.tsx"; // Verifique o caminho
import Sidebar from "../components/sidebar/sidebar";
import TitleInput from "../components/title-input/title-input";
import { api } from "../lib/axios.ts";

export function PixPage() {

    const [ codePix, setPixCode ] = useState("");
    const [ valuePix, setValuePix ] = useState("");

    async function paymentPix(){
        await api.post(`/v1/codes/payment?code=${codePix}`)
        .then(() => console.log("passou"))
        .catch((err) => console.log(err))
    };

    async function getPixCode(){
        await api.get(`/v1/codes/${codePix}`)
        .then((json) => {
            const data = json.data;
            setValuePix(data.value);
        })
    };

    return (
        <div className="bg-[#1b1b1b] flex h-screen">
            <Sidebar />
            <div className="w-full">
                <TitleInput
                    getPixCode={getPixCode}
                    setPixCode={setPixCode}
                />
                <Pay
                    valuePix={valuePix}
                    paymentPix={paymentPix}
                />
            </div>
        </div>
    );
}
