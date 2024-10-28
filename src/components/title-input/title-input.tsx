import { StyledTitleInput } from "../title-input/title-input-style.js"
import { useState } from "react"
import { Eye, EyeClosed } from "lucide-react"

export default function TitleInput(){

    const [ isShowBalance, setIsShowBalance ] = useState<boolean>(true);

    return(
        <StyledTitleInput>
            <div>
                <h1>Qual o valor da transferencia?</h1>
                <input type="text" placeholder="Usuario" />
            </div>
            <article>
                <h4>Saldo em conta</h4>
                <p>$ {"30"}</p>
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