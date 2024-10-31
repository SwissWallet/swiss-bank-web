import { StyledTitleInput } from "../title-input/title-input-style.js"
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
        <StyledTitleInput>
            <div>
                <h1>Qual o valor da transferencia?</h1>
                <input onChange={(e) => handleChange(e)} type="text" placeholder="Usuario" />
            </div>
            <article>
                <h4>Saldo em conta</h4>
                <p>$ {account?.balance}</p>
                {isShowBalance ? (
                    <button onClick={() => setIsShowBalance(false)}>
                        <Eye />
                    </button>
                ) : (
                    <button>
                        <EyeClosed onClick={() => setIsShowBalance(true)} />
                    </button>
                )}
            </article>
        </StyledTitleInput>
    )
} 