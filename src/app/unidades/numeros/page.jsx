"use client";
import { useState } from "react";

function Numeros() {
  const [numero, setNumero] = useState(null);
  const [nuevoNumero, setNuevoNumero] = useState();

  const generarNumero = () => {
    if (!nuevoNumero) {
      return null;
    }
    const numeroAleatorio = Math.floor(Math.random() * nuevoNumero);
    setNumero(numeroAleatorio);
  };

  const handleSubtmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    //toma el objeto y le agrega los datos nuevos
    setNuevoNumero(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubtmit}>
        <header className="grid justify-items-center">
          <h1 className="font-bold text-3xl">
            Diga en LSA los numeros que salen en pantalla
          </h1>
        </header>
        <h3 className="font-bold text-2xl mt-10">Numero aleatorio del 1 al:</h3>
        <input
          type="number"
          min="0"
          name="title"
          placeholder="Inserte un numero"
          onChange={handleChange}
          className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4 text-white"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold p-2 rounded-lg"
          onClick={generarNumero}
        >
          Generar Numero Aleatorio
        </button>
      </form>
      <p className="grid justify-items-center text-white-800 my-5 text-5xl">
        {numero !== null ? numero : `Presiona el botón para generar un número`}
      </p>
    </div>
  );
}

export default Numeros;
