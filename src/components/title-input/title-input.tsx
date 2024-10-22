import {StyledTitleInput} from "../title-input/title-input-style.js"
import Eye from "../../assets/olho.png"

export default function TitleInput(){
    return(
        <StyledTitleInput>
            <div>
                <h1>Qual o valor da transferencia?</h1>
                <input type="text" placeholder="Usuario" />
            </div>
            <article>
                <h4>Saldo em conta</h4>
                <p>$ 3456,00</p>
                <img src={Eye} alt="eye icon" />
            </article>
        </StyledTitleInput>
    )
}