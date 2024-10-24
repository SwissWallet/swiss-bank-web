import Dollar from "../../assets/dollar.png"

import {StyleExtract} from "./style-extract-area.js"

export default function ExtractArea() {
    return(
        <StyleExtract>
            <h1>Movimentações</h1>

            {/* linha */}
            <div className="row">
                <div className="button-img">
                    <img src={Dollar} alt="" />
                </div>
                <article>
                    <div className="text">
                        <h4>•••• 7836</h4>
                        <p>BRL conta</p>
                    </div>
                    <h4>- R$ 800,00</h4>
                </article>
            </div>
            <div className="row">
                <div className="button-img">
                    <img src={Dollar} alt="" />
                </div>
                <article>
                    <div className="text">
                        <h4>•••• 7836</h4>
                        <p>BRL conta</p>
                    </div>
                    <h4>- R$ 800,00</h4>
                </article>
            </div>
        </StyleExtract>
    )
}   