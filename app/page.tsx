'use client'

import Image from "next/image"
import numberFour from '@/public/imagens/numberFour.svg'
import Planet from '@/public/Planet.png'
import { PlanetAnimated } from "./components/PlanetAnimated"

export default function Home() {

  return (
    <div className="grid grid-cols-2 place-items-center h-screen ">
      <div className="text-[#D6D6F2] w-[23.75rem] flex flex-col justify-center items-start gap-6">
         <h1 className="font-bold text-[2.5rem] leading-[120%] self-stretch">Ops, esta página não foi encontrada</h1>
         <span className="self-stretch text-xl leading-[140%] font-light">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</span>
         <div className="flex items-center gap-4 text-[#e2e2f5]">
          <button className="flex py-3 px-7 items-center gap-2 bg-[#151557] hover:bg-[#212187] rounded-[62rem] uppercase transition-all  ">Voltar</button>
          <button className="flex py-3 px-7 items-center gap-2 bg-[#151557] hover:bg-[#212187] rounded-[62rem] uppercase transition-all ">Ir para a Home</button>
         </div>
      </div>
      <div className="  flex items-center justify-center test  gap-2">
        <Image src={numberFour} alt='numberFour' className="shadow-[0px_0px_196px_0px_rgba(112,0,255,0.70)]" />
      <PlanetAnimated/>
        <Image src={numberFour} alt='numberFour' className="shadow-[0px_0px_196px_0px_rgba(112,0,255,0.70)]" />


      </div>
    
    </div>
  )
}
