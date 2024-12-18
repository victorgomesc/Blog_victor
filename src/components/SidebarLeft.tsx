import React from "react";
import Link from "next/link";


export default function Sidebar() {
  
  const links = [
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Formação",
      path: "#formacao",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      name: "Experiencias",
      path: "#experiencias",
    },
    {
      name: "Contato",
      path: "#contato",
    },
  ];

  return(
    <div className=" w-screen h-16 bg-blue-900 gap-60 flex flex- items-center justify-center">
      <Link href="/">
      <div className="w-full h-full flex items-center justify-center 
      hover:scale-110 transform transition duration-300 ease-in-out">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Home</p>
      </div>
      </Link>
      <Link href="/formacao">
      <div className="w-full h-full flex items-center justify-center 
      hover:scale-110 transform transition duration-300 ease-in-out">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Formação</p>
      </div>
      </Link>
      <Link href="/projects">
      <div className="w-full h-full flex items-center justify-center 
      hover:scale-110 transform transition duration-300 ease-in-out">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Portfólio</p>
      </div>
      </Link>
      <Link href="/experiencias">
      <div className="w-full h-full flex items-center justify-center
      hover:scale-110 transform transition duration-300 ease-in-out">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Experiencias</p>
      </div>
      </Link>
      <Link href="/contato">
      <div className="w-full h-full flex items-center justify-center 
      hover:scale-110 transform transition duration-300 ease-in-out">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Contato</p>
      </div>
      </Link>
    </div>
  )
}