

interface InputProps{
    typeProps: string;
    placeholderProps: string;
    onChangeProps: (method: string) => void;
}

const Input = ({typeProps, placeholderProps, onChangeProps} : InputProps) => {
  return (
    <input type={typeProps} placeholder={placeholderProps} onChange={(e) => onChangeProps(e.target.value)} className="border-2 border-[#A7A7A7] px-6 py-5 rounded-md bg-transparent text-[#C50000] placeholder:text-[#C50000]"/>
  )
}

export default Input
