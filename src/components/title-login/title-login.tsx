import AbstractIcon from "../../assets/abstract-icon.png"
import { StyledTitleLogin } from "./title-style.js";


export default function TitleLogin(){
    return(
        <StyledTitleLogin>
            <h1>SWISS <br /> BANK</h1>
            <img src={AbstractIcon} alt="" />
        </StyledTitleLogin>
    )
}