import React from "react";
import Link from "next/link";


export default function Sidebar() {
  return(
    <div className=" w-screen h-14 bg-blue-900 gap-60 flex flex- items-center justify-center">
      <Link href="/">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold">Home</p>
      </div>
      </Link>
      <Link href="/formacao">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold">Formação</p>
      </div>
      </Link>
      <Link href="/projects">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold">Projetos</p>
      </div>
      </Link>
      <Link href="/experiencias">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold">Experiencias</p>
      </div>
      </Link>
      <Link href="/contato">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-2xl text-white font-bold">Contato</p>
      </div>
      </Link>
    </div>
  )
}