import Pix from "../../assets/pix.png"
import Perfil from "../../assets/perfil.png"
import Sair from "../../assets/sair.png"
import Transacao from "../../assets/transacao.png"

import {StyledSidebar} from "../sidebar/sidebar-style.js"
import { useContext } from "react"
import { UserContext } from "../../context/user/index.js"
import { useNavigate } from "react-router"

export default function Sidebar() {

    const { logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        localStorage.clear();
        navigate("/")
    };

    return(
        <StyledSidebar>
            <div>
                <h4>Barra de Ações</h4>
            </div>
            <p>GERAL</p>
            <ul>
                <li><img src={Transacao} alt="pix icon" />Transações</li>
                <li>
                    <button onClick={handleLogout}>
                        <img src={Perfil}    alt="perfil icon" />Log out
                    </button>
                </li>
                <li><img src={Sair}      alt="exit icon" />Perfil</li>
                <li><img src={Pix}       alt="transacao icon" />PIX</li>
            </ul>
        </StyledSidebar>
    )
}