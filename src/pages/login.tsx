import InputLogin from "../components/input-login/input-login";
// import Sidebar from "../components/sidebar/sidebar";
import TitleLogin from "../components/title-login/title-login";


export function Login(){
    
    return(
        <div className="flex justify-between bg-[#1b1b1b]">
            {/* <Sidebar /> */}
            <TitleLogin />
            <InputLogin />
        </div>
    )
}