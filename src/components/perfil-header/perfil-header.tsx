import { useSelector } from "react-redux"
import Bruna from "../../assets/bruna.png"
import Sino from "../../assets/sino.png"

import {StyleHeader} from "./style-perfil-header.js"
import { RootState } from "../../store.js"

export default function PerfilHeader(){

    const name = useSelector((state: RootState) => state.user.value?.name);
    
    return(
        <StyleHeader>
            <div>
                <img src={Bruna} alt="" />
                <div>
                    <p>Bem-vindo de volta,<br/>{name}</p>
                </div>
            </div>
            <article>
                <img src={Sino} alt="" />
            </article>
        </StyleHeader>
    )
}