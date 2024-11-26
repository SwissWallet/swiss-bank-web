import React, { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'>{
    children: ReactNode;
}

const Button = ({children, ...props} : ButtonProps) => {
  return (
         <button {...props} 
            className="flex justify-center border-none rounded-md 
                    bg-[#C50000] text-white text-xl p-6 transition-all duration-150 
                    ease-in-out cursor-pointer hover:bg-[#E50000] hover:scale-[1.01]" >{children}</button>
  )
}

export default Button
