import { useContext } from "react"
import { UserContext } from "../../context/user/index.js"
import { BellRing, Menu, X } from "lucide-react";

interface PerfilHeaderProps {
    setIsOpenSidebar: (e: boolean) => void;
};

export default function PerfilHeader({
    setIsOpenSidebar
}: PerfilHeaderProps){
    const { user } = useContext(UserContext);
    
    return(
        <>
            <button 
                onClick={() => setIsOpenSidebar(true)}
                className="block md:hidden ">
                <Menu className="text-white hover:text-red-600 transition-all hover:scale-110"/>       
            </button>
            <div className="flex justify-between border-2 border-[#A7A7A7] p-5 rounded-md">
                <p className="text-[#D6D6D6] font-light text-2xl">Bem-vindo de volta,<br/><strong>{user!.name}</strong></p>
                <article className="border-2 border-[#A7A7A7] text-[#a7a7a7] hover:text-[#c50000] hover:bg-[#a7a7a7] p-5 rounded-md transition-all duration-150 ease-in-out cursor-pointer hover:scale-[1.05]">
                    <BellRing className=""/>
                </article>
            </div>
        </>
    )
}
