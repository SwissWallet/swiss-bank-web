import HandMoney from "../../assets/hand-money.png"

import {StyleBalance} from "./style-balance.js"

export default function AccoutBalance(){
    return(
        <StyleBalance>
            <div>
                <p>Valor total em conta</p>
                <h1>R$<span>1700</span>,00</h1>
            </div>
            <section>
                <p>PIX</p>
                <div className="button-img">
                    <img src={HandMoney} alt="" />
                </div>
            </section>
        </StyleBalance>
    )
}