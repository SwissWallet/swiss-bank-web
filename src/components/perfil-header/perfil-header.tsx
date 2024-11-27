import { useContext } from "react"
import { UserContext } from "../../context/user/index.js"
import { BellRing } from "lucide-react";
export default function PerfilHeader(){

    const { user } = useContext(UserContext);
    
    return(
        <div className="flex justify-between border-2 border-[#A7A7A7] p-5 rounded-md">
            <p className="text-[#D6D6D6] font-light text-2xl">Bem-vindo de volta,<br/><strong>{user!.name}</strong></p>
            <article className="border-2 border-[#A7A7A7] text-[#a7a7a7] hover:text-[#c50000] hover:bg-[#a7a7a7] p-5 rounded-md transition-all duration-150 ease-in-out cursor-pointer hover:scale-[1.05]">
                <BellRing className=""/>
            </article>
        </div>
    )
}
