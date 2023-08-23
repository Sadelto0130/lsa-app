"use client";
import { useState } from "react";

export function Numeros() {
  const [numero, setNume] = useState(null);
  const [nuevoNumero, setNuevoNumero] = useState();

  const generarNumero = () => {
    let numeroAleatorio = Math.floor(Math.random() * nuevoNumero);
    setNume(numeroAleatorio);
  };

  const handleSubtmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    //toma el objeto y le agrega los datos nuevos
    setNuevoNumero(e.target.value);
  };
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center flex-col">
      <form onSubmit={handleSubtmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl">Diga en LSA los numeros que salen en pantalla</h1>
        </header>
        <h3 className="font-bold text-2xl mt-10">Numero aleatorio del 1 al:</h3>
        <input
          type="number"
          min="0"
          name="title"
          placeholder="Inserte un numero"
          onChange={handleChange}
          value={nuevoNumero}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4 text-white"
        />{" "}
        <button
          type="submit"
          className="bg-green-600 hover:bg-greem-700 text-white font-bold px-4 rounded-lg"
          onClick={generarNumero}
        >
          Generar Numero Aleatorio
        </button>
      </form>
      <p className="text-white-800 my-5 text-3xl">
        {numero !== null ? numero : `Presiona el botón para generar un número`}
      </p>
    </div>
  );
}

export default Numeros;
