import React from 'react'
import { useRecoilValue } from 'recoil'
import { ColorState } from '../Components/Color02/Color.Atom'


interface ButtonType{
    text:string,
    onClick:React.MouseEventHandler<HTMLButtonElement>,
    size: 'S'|'M'|'L'
}

const MyButton:React.FC<ButtonType> = ({text,onClick,size}) => {
  const value=useRecoilValue(ColorState);

  return ( <button style={{backgroundColor:value}} className={`${size==='S'?"h-4 w-fit":size==='M'?"h-8 w-full":"h-12 w-full"} flex justify-center items-center text-white p-1 border-2 border-black text-2xl font-bold max-w-96`} onClick={onClick}>{text}</button>
  )
}

export default MyButton
