import { useContext, useState } from "react"
import { Eye, EyeClosed, Menu } from "lucide-react"
import { UserContext } from "../../context/user/index.js";

interface TitleInputProps{
    getPixCode: () => void;
    setPixCode: (code: string) => void;
    setIsOpenSidebar: (e: boolean) => void;
};

export default function TitleInput({
    getPixCode,
    setPixCode,
    setIsOpenSidebar,
}: TitleInputProps){

    const [ isShowBalance, setIsShowBalance ] = useState<boolean>(true);

    const { account } = useContext(UserContext);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setPixCode(e.target.value);
        getPixCode();
    }

    return(
        <div className="flex w-full pt-[30px] pr-[90px] pb-0 pl-[60px] flex-col items-center">
            <div className="flex flex-col gap-8 md:gap-[60px]">
                <div className="flex justify-center">
                    <button 
                        onClick={() => setIsOpenSidebar(true)}
                        className="block md:hidden text-white hover:text-red-600 transition-all hover:scale-110">
                        <Menu />
                    </button>
                </div>
                <h1 className="text-white text-xl md:text-2xl font-normal">Qual o valor da transferencia?</h1>
                
                <input className="px-10 py-2 md:p-[35px] rounded-[5px] w-[200px] md:w-[1000px] bg-transparent border-[1px] border-[#a7a7a7] placeholder:text-[#c50000] placeholder:text-xl" onChange={(e) => handleChange(e)} type="text" placeholder="Usuario" />
            </div>
            <article className="flex items-center m-[60px] gap-[30px] pb-[5px] border-b-[1px] border-b-[#a7a7a7]">
                <h4 className="text-white text-xl text-nowrap md:text-2xl font-normal">Saldo em conta</h4>
                <input
                    className="bg-transparent text-center text-white text-2xl w-24 focus:outline-none" 
                    type={isShowBalance ? ("text") : ("password")} value={`${account?.balance}`} />
                {isShowBalance ? (
                    <button className="text-white" onClick={() => setIsShowBalance(false)}>
                        <Eye />
                    </button>
                ) : (
                    <button className="text-white">
                        <EyeClosed onClick={() => setIsShowBalance(true)} />
                    </button>
                )}
            </article>
        </div>
    )
} 