import Pix from "../../assets/pix.png"
import Perfil from "../../assets/perfil.png"
import Sair from "../../assets/sair.png"
import Transacao from "../../assets/transacao.png"

import {StyledSidebar} from "../sidebar/sidebar-style.js"

export default function Sidebar() {
    return(
        <StyledSidebar>
            <div>
                <h4>Barra de Ações</h4>
            </div>
            <p>GERAL</p>
            <ul>
                <li><img src={Transacao} alt="pix icon" />Transações</li>
                <li><img src={Perfil}    alt="perfil icon" />Log out</li>
                <li><img src={Sair}      alt="exit icon" />Perfil</li>
                <li><img src={Pix}       alt="transacao icon" />PIX</li>
            </ul>
        </StyledSidebar>
    )
}