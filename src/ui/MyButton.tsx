import React from 'react'

interface ButtonType{
    text:string,
    onClick:React.MouseEventHandler<HTMLButtonElement>,
    size: 'S'|'M'|'L'
}

const MyButton:React.FC<ButtonType> = ({text,onClick,size}) => {
  return ( <button className={`${size==='S'?"h-4 w-fit":size==='M'?"h-8 w-full":"h-12 w-full"} bg-cyan-700 flex justify-center hover:bg-cyan-900 items-center text-white p-1 border-2 border-black text-2xl font-bold max-w-96`} onClick={onClick}>{text}</button>
  )
}

export default MyButton
