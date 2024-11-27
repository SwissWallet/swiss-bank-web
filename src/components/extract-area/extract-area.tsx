import { useContext } from "react";
import Dollar from "../../assets/dollar.png"
import { Extract } from "../../pages/home.js"
import { UserContext } from "../../context/user/index.js";

interface ExtractAreaProps {
    extract: Extract[];
};

export default function ExtractArea({
    extract
}: ExtractAreaProps) {

    const { card } = useContext(UserContext);

    return(
        <div className="flex flex-col border-2 border-[#A7A7A7] rounded-md max-h-[510px] overflow-y-scroll p-5">
            <h1 className="font-sans font-thin text-2xl text-white">Movimentações</h1>

            {/* linha */}

            {extract.length > 0 ? (
                extract.reverse().map((item: Extract) => (
                    <div className="flex gap-4 items-center pt-5" key={item.id}>
                        <div className="flex flex-col gap-4 items-center bg-[#2C2C2C] P-3 rounded-md">
                            <img src={Dollar} alt="" />
                        </div>
                        <article className="flex justify-between items-center border-b-2 border-[#A7A7A7] w-full h-full">
                            <div>
                                <h4 className="font-sans font-normal text-xl text-white">{card?.cardNumber}</h4>
                                <p className="font-sans font-normal text-xl text-[#A7A7A7]">BRL conta</p>
                            </div>
                            {item.type === "TRANSACTION" ? (
                                <h4 className="font-sans font-normal text-xl text-red-600">- {item.value}</h4>
                            ) : (
                                <h4 className="font-sans font-normal text-xl text-white">{item.value}</h4>
                            )}
                        </article>
                    </div>
                ))
            ) : ( 
                <h1>Realize movimentações</h1>
            )}
        </div>
    )
}   
