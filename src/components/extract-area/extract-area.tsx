import { useContext } from "react";
import Dollar from "../../assets/dollar.png"
import { Extract } from "../../pages/home.js"

import {StyleExtract} from "./style-extract-area.js"
import { UserContext } from "../../context/user/index.js";

interface ExtractAreaProps {
    extract: Extract[];
};

export default function ExtractArea({
    extract
}: ExtractAreaProps) {

    const { card } = useContext(UserContext);

    return(
        <StyleExtract>
            <h1>Movimentações</h1>

            {/* linha */}

            {extract.length > 0 ? (
                extract.map((item: Extract) => (
                    <div className="row" key={item.id}>
                        <div className="button-img">
                            <img src={Dollar} alt="" />
                        </div>
                        <article>
                            <div className="text">
                                <h4>{card?.cardNumber}</h4>
                                <p>BRL conta</p>
                            </div>
                            {item.type === "TRANSACTION" ? (
                                <h4 className="type-transaction">- {item.value}</h4>
                            ) : (
                                <h4 className="type-deposit">{item.value}</h4>
                            )}
                        </article>
                    </div>
                ))
            ) : ( 
                <h1>Realize movimentações</h1>
            )}
        </StyleExtract>
    )
}   