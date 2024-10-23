import InputLogin from "../components/input-login/input-login";
// import Sidebar from "../components/sidebar/sidebar";
import TitleLogin from "../components/title-login/title-login";


export default function Login(){
    return(
        <div style={{display: "flex", justifyContent: "space-between", backgroundColor:"#1B1B1B"}}>
            {/* <Sidebar /> */}
            <TitleLogin />
            <InputLogin />
        </div>
    )
}