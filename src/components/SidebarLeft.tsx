import React from "react";
import Link from "next/link";


export default function Sidebar() {
  return(
    <div className=" w-screen h-14 bg-blue-900 gap-60 flex flex- items-center justify-center">
      <Link href="/">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Home</p>
      </div>
      </Link>
      <Link href="/formacao">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Formação</p>
      </div>
      </Link>
      <Link href="/projects">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Projetos</p>
      </div>
      </Link>
      <Link href="/experiencias">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Experiencias</p>
      </div>
      </Link>
      <Link href="/contato">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold hover:text-yellow-400">Contato</p>
      </div>
      </Link>
    </div>
  )
}