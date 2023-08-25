"use client"
import { useState } from "react";
import Link from "next/link"
import OptionNavbar from "./ui/OptionNavbar"


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-950 py-5 mb-2">
      <div className="container flex justify-between px-10 md:px-0 mx-auto">
        <Link href='/'>
          <h1 className="text-2xl font-bold text-white">Inicio</h1>
        </Link>

        <ul className="flex gap-x-4">
          <li>
          <OptionNavbar />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar