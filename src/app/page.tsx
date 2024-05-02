import Baner from "@/components/Baner";
import Header from "@/components/Header";
import Sidebar from "@/components/SidebarLeft";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (

    <div className="h-screen flex items-center flex-col bg-gray-500">
      <Header />
      <Baner />
    </div>
  );
}
