import {PayStyled} from "./style-payment.js";

interface PayProps{
    paymentPix: () => void;
}

export default function Pay({
    paymentPix
}: PayProps) {
    return (
        <PayStyled>
            <h1>R$<span>00</span>,00</h1>
            <button onClick={paymentPix}>Pagar</button>
        </PayStyled>
    );
}
