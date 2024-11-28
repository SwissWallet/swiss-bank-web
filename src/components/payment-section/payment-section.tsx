import {PayStyled} from "./style-payment.js";

interface PayProps{
    valuePix: string;
    paymentPix: () => void;
}

export default function Pay({
    valuePix,
    paymentPix
}: PayProps) {
    return (
        <div className="flex flex-col gap-[60px] items-center">
            <h1 className="text-white font-thin text-[40px]">R$<span className="text-[124px] pl-[10px]">{valuePix === "" ? ("00") : (valuePix)}</span>,00</h1>
            <button 
                className="flex justify-center border-none rounded-[5px] bg-[#c50000] text-white text-2xl p-[25px] w-[500px] transition-all cursor-pointer hover:bg-[#e50000] hover:scale-110"
                onClick={paymentPix}>Pagar</button>
        </div>
    );
}
