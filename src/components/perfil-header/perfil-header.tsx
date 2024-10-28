import { useContext } from "react"
import Bruna from "../../assets/bruna.png"
import Sino from "../../assets/sino.png"

import {StyleHeader} from "./style-perfil-header.js"
import { UserContext } from "../../context/user/index.js"
export default function PerfilHeader(){

    const { user } = useContext(UserContext);
    
    return(
        <StyleHeader>
            <div>
                <img src={Bruna} alt="" />
                <div>
                    <p>Bem-vindo de volta,<br/>{user?.name}</p>
                </div>
            </div>
            <article>
                <img src={Sino} alt="" />
            </article>
        </StyleHeader>
    )
}