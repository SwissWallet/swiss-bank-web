import { useContext } from "react"
import Sino from "../../assets/sino.png"
import { UserContext } from "../../context/user/index.js"
export default function PerfilHeader(){

    const { user } = useContext(UserContext);
    
    return(
        <div className="flex justify-between border-2 border-[#A7A7A7] p-5 rounded-md">
            <div className="flex justify-between gap-5 w-full">
                <div className="flex flex-col justify-between">
                    <p className="text-[#D6D6D6] font-sans font-light text-2xl">Bem-vindo de volta,<br/>{user?.name}</p>
                </div>
            </div>
            <article className="border-2 border-[#A7A7A7] p-5 rounded-md transition-all duration-150 ease-in-out cursor-pointer hover:scale-[1.05]">
                <img src={Sino} alt="" />
            </article>
        </div>
    )
}
