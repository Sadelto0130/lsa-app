"use client";
import { useState } from "react";
import Image from "next/image";
import Espacio from "../../../../public/abc/espacio.png";
import A from "../../../../public/abc/a.png";
import B from "../../../../public/abc/b.png";
import C from "../../../../public/abc/c.png";
import CH from "../../../../public/abc/ch.png";
import D from "../../../../public/abc/d.png";
import E from "../../../../public/abc/e.png";
import F from "../../../../public/abc/f.png";
import G from "../../../../public/abc/g.png";
import H from "../../../../public/abc/h.png";
import I from "../../../../public/abc/i.png";
import J from "../../../../public/abc/j.png";
import K from "../../../../public/abc/k.png";
import L from "../../../../public/abc/l.png";
import M from "../../../../public/abc/m.png";
import N from "../../../../public/abc/n.png";
import Ñ from "../../../../public/abc/ñ.png";
import O from "../../../../public/abc/o.png";
import P from "../../../../public/abc/p.png";
import Q from "../../../../public/abc/q.png";
import R from "../../../../public/abc/r.png";
import S from "../../../../public/abc/s.png";
import T from "../../../../public/abc/t.png";
import U from "../../../../public/abc/u.png";
import V from "../../../../public/abc/v.png";
import W from "../../../../public/abc/w.png";
import X from "../../../../public/abc/x.png";
import Y from "../../../../public/abc/y.png";
import Z from "../../../../public/abc/z.png";

function Page() {
  const [azar, setAzar] = useState(0);
  const [imageHidden, setImageHidden] = useState(true);

  const abecedario = [
    { letra: "", imagen: Espacio },
    { letra: "a", imagen: A },
    { letra: "b", imagen: B },
    { letra: "c", imagen: C },
    { letra: "ch", imagen: CH },
    { letra: "d", imagen: D },
    { letra: "e", imagen: E },
    { letra: "f", imagen: F },
    { letra: "g", imagen: G },
    { letra: "h", imagen: H },
    { letra: "i", imagen: I },
    { letra: "j", imagen: J },
    { letra: "k", imagen: K },
    { letra: "l", imagen: L },
    { letra: "m", imagen: M },
    { letra: "n", imagen: N },
    { letra: "ñ", imagen: Ñ },
    { letra: "o", imagen: O },
    { letra: "p", imagen: P },
    { letra: "q", imagen: Q },
    { letra: "r", imagen: R },
    { letra: "s", imagen: S },
    { letra: "t", imagen: T },
    { letra: "U", imagen: U },
    { letra: "v", imagen: V },
    { letra: "w", imagen: W },
    { letra: "x", imagen: X },
    { letra: "y", imagen: Y },
    { letra: "z", imagen: Z },
  ];

  const letrasAzar = () => {
    setAzar(Math.floor(Math.random() * 29));
    
  };

  const toggleImage = () => {
    setImageHidden((prevHidden) => !prevHidden);
    console.log(abecedario[azar].imagen)
  };

  return (
    <div>
      <header className="grid grid-rows-2 my-4 mb-10">
        <h1 className="text-center font-bold text-3xl">
          Practique el Abecendario
        </h1>
        <h3 className="text-center text-md text-xl font-bold">
          Genere una letra y haga la seña
        </h3>
      </header>

      <div className="grid justify-items-center ">
        <button
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-lg "
          onClick={letrasAzar}
        >
          Generar Letra
        </button>
        {azar != "" ? (
          <h1 className="my-4 mb-10 font-bold text-6xl">
            {abecedario[azar].letra.toUpperCase()}
          </h1>
        ) : (
          <p className="text-lg font-semibold text-gray-500 p-4">
            Presione para generar una tecla al azar
          </p>
        )}
        <button
          onClick={toggleImage}
          className="mt-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {imageHidden ? "Mostrar Imagen" : "Ocultar Imagen"}
        </button>
        <Image
          src={abecedario[azar].imagen}
          alt={`Imagen de la letra ${abecedario[azar].letra}`}
          className={`w-auto h-auto ${imageHidden  ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
}

export default Page;
