import {PayStyled} from "./style-payment.js";

export default function Pay() {
    return (
        <PayStyled>
            <h1>R$<span>00</span>,00</h1>
            <button>Pagar</button>
        </PayStyled>
    );
}
