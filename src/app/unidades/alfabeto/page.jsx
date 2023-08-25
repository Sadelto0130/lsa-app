"use client";
import { useState } from "react"

function Page() {

  const [azar, setAzar] = useState('')

  const abecedario = ['','a','b','c','d','e','f','g','h','i','j','k','l', 'ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ]

  const letrasAzar = () => {
    setAzar(Math.floor(Math.random() * 28))
    return azar
  }

  return (
    <div >
      <header className="grid grid-rows-2 my-4 mb-10">
        <h1 className="text-center font-bold text-3xl">Practique el Abecendario</h1>
        <h3 className="text-center text-md text-xl font-bold">Genere una letra y haga la seña</h3>
      </header>

      <div className="grid justify-items-center ">
        <button
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-lg "
          onClick={letrasAzar}
        >Generar Letra</button>
        {azar != '' 
          ? <h1 
              className="my-4 mb-10 font-bold text-6xl">
              {abecedario[azar].toUpperCase()}
            </h1> 
          : <p className="text-lg font-semibold text-gray-500 p-4">Presione para generar una tecla al azar</p>
        }
      </div>
    </div>
  )
}

export default Page