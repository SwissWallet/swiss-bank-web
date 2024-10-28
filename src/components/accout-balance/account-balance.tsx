import HandMoney from "../../assets/hand-money.png"

import {StyleBalance} from "./style-balance.js"
import { Link } from "react-router-dom";

export default function AccoutBalance(){


    return(
        <StyleBalance>
            <div>
                <p>Valor total em conta</p>
                <h1>R$<span>{}</span>,00</h1>
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