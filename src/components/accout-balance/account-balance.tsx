import { useContext } from "react";
import HandMoney from "../../assets/hand-money.png"

import {StyleBalance} from "./style-balance.js"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/index.js";

export default function AccoutBalance(){

    const { card } = useContext(UserContext);

    return(
        <StyleBalance>
            <div>
                <p>Valor total em conta</p>
                <h1>R$<span>{card?.cardLimit}</span>,00</h1>
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