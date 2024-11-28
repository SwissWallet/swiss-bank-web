import Pix from "../../assets/pix.png"
import { useContext } from "react"
import { UserContext } from "../../context/user/index.js"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { ArrowRightLeft, LogOut } from "lucide-react"

export default function Sidebar() {

    const { logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut();
        localStorage.clear();
        navigate("/")
    };

    return(
        <div className="flex flex-col p-[30px] w-[300px] bg-[#212121]">
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