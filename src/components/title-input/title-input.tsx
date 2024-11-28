import { useContext, useState } from "react"
import { Eye, EyeClosed } from "lucide-react"
import { UserContext } from "../../context/user/index.js";

interface TitleInputProps{
    getPixCode: () => void;
    setPixCode: (code: string) => void;
};

export default function TitleInput({
    getPixCode,
    setPixCode,
}: TitleInputProps){

    const [ isShowBalance, setIsShowBalance ] = useState<boolean>(true);

    const { account } = useContext(UserContext);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setPixCode(e.target.value);
        getPixCode();
    }

    return(
        <div className="flex w-full pt-[30px] pr-[90px] pb-0 pl-[60px] flex-col items-center">
            <div className="flex flex-col gap-[60px]">
                <h1 className="text-white text-2xl font-normal">Qual o valor da transferencia?</h1>
                <input className="p-[35px] rounded-[5px] w-[1000px] bg-transparent border-[1px] border-[#a7a7a7] placeholder:text-[#c50000] placeholder:text-xl" onChange={(e) => handleChange(e)} type="text" placeholder="Usuario" />
            </div>
            <article className="flex items-center m-[60px] gap-[30px] pb-[5px] border-b-[1px] border-b-[#a7a7a7]">
                <h4 className="text-white text-2xl font-normal">Saldo em conta</h4>
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