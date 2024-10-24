import Bruna from "../../assets/bruna.png"
import Sino from "../../assets/sino.png"

import {StyleHeader} from "./style-perfil-header.js"

export default function PerfilHeader(){
    return(
        <StyleHeader>
            <div>
                <img src={Bruna} alt="" />
                <div>
                    <p>Bem-vindo de volta,<br/>Bruna Silva!</p>
                </div>
            </div>
            <article>
                <img src={Sino} alt="" />
            </article>
        </StyleHeader>
    )
}