import { useContext } from "react";
import HandMoney from "../../assets/hand-money.png"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user/index.js";

export default function AccoutBalance(){

    const { account } = useContext(UserContext);

    return(
        <div className="flex justify-between">
            <div>
                <p className="font-sans font-normal text-2xl text-[#A7A7A7] ">Valor total em conta</p>
                <h1 className="text-2xl pt-3 font-sans font-light text-white">R$<span className="text-6xl">{account?.balance}</span>,00</h1>
            </div>
            <section className="flex items-center justify-between gap-5">
                <p className="font-sans font-normal text-2xl text-[#A7A7A7] ">PIX</p>
                <Link to={`/pix`} className="items-center bg-[#2C2C2C] p-3 rounded-md 
                                                transition-all duration-150 ease-in-out cursor-pointer 
                                                    hover:scale-[1.05] hover:shadow-[0px_10px_12px_rgba(197,0,0,0.5)]
                                                    hover:bg-[#A7A7A7]">
                    <img src={HandMoney} alt="" />
                </Link>
            </section>
        </div>
    )
}