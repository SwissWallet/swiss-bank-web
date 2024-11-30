import InputLogin from "../components/input-login/input-login";
import TitleLogin from "../components/title-login/title-login";


export function Login(){
    
    return(
        <div className="flex flex-col h-screen md:flex-row  md:justify-between bg-[#1b1b1b]">
            <TitleLogin />
            <InputLogin />
        </div>
    )
}