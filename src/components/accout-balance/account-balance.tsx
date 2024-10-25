import { useSelector } from "react-redux";
import HandMoney from "../../assets/hand-money.png"

import {StyleBalance} from "./style-balance.js"
import { RootState } from "../../store.js";

export default function AccoutBalance(){

    const balance = useSelector((state: RootState) => state.account.value.balance);

    return(
        <StyleBalance>
            <div>
                <p>Valor total em conta</p>
                <h1>R$<span>{balance}</span>,00</h1>
            </div>
            <section>
                <p>PIX</p>
                <button className="button-img">
                    <img src={HandMoney} alt="" />
                </button>
            </section>
        </StyleBalance>
    )
}