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
        <PayStyled>
            <h1>R$<span>{valuePix === "" ? ("00") : (valuePix)}</span>,00</h1>
            <button onClick={paymentPix}>Pagar</button>
        </PayStyled>
    );
}
