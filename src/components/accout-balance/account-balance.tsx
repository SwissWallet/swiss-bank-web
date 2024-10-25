import { useSelector } from "react-redux";
import HandMoney from "../../assets/hand-money.png"

import {StyleBalance} from "./style-balance.js"
import { RootState } from "../../store.js";
import { Link } from "react-router-dom";

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
                <Link to={`/pix`} className="button-img">
                    <img src={HandMoney} alt="" />
                </Link>
            </section>
        </StyleBalance>
    )
}