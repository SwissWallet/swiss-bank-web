import AbstractIcon from "../../assets/abstract-icon.png"


export default function TitleLogin(){
    return(
        <div className="flex flex-col justify-between">
            <h1 className="font-sans text-5xl text-white p-10 ">SWISS <br /> BANK</h1>
            <img src={AbstractIcon} alt="" className="w-[70%]"/>
        </div>
    )
}