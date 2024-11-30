import Pix from "../../assets/pix.png"
import { useContext } from "react"
import { UserContext } from "../../context/user/index.js"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { ArrowRightLeft, LogOut, X } from "lucide-react"

interface SidebarProps {
    setIsOpenSidebar: (e: boolean) => void; 
}

export default function Sidebar({
    setIsOpenSidebar,
}: SidebarProps) {

    const { logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        localStorage.clear();
        navigate("/")
    };

    return(
        <div className="flex-col p-[30px] w-full h-full bg-[#212121]">
            <button
                onClick={() => setIsOpenSidebar(false)}
                className="block md:hidden text-white hover:text-red-600 transition-all hover:scale-110">
                <X />
            </button>
            <h4 className="font-medium text-2xl border-b-[1px] border-b-[#a7a7a7] text-[#c1c1c1] text-center">Barra de Ações</h4>
            <nav className="flex flex-col gap-10 mt-5">
                <Link to={"/home"}>
                    <div className="flex gap-4 text-xl text-[#c50000] hover:scale-110 transition-all">
                        <ArrowRightLeft />
                        <span className="">Transações</span>
                    </div>
                </Link>
                <Link to={"/pix"}>
                    <div className="flex gap-4 text-xl text-[#c50000] hover:scale-110 transition-all">
                        <img src={Pix}       alt="transacao icon" />
                        <span>Pix</span>
                    </div>
                </Link>
                <button onClick={handleLogout}>
                    <div className="flex gap-4 text-xl text-[#c50000] hover:scale-110 transition-all">
                        <LogOut />
                        <span>Sair</span>
                    </div>
                </button>
            </nav>
        </div>
    )
}