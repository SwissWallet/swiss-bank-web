import InputLogin from "../components/input-login/input-login";
import TitleLogin from "../components/title-login/title-login";


export default function Login(){
    return(
        <div style={{display: "flex", justifyContent: "space-between", backgroundColor:"#1B1B1B"}}>
            <TitleLogin />
            <InputLogin />
        </div>
    )
}