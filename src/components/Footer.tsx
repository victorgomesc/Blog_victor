import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";


export default function Footer() {
    return(
        <footer className=" h-56 mt-36 w-full bg-gray-800 object-bottom">
          <div className="flex flex-row">
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
               <Link href="https://www.instagram.com/victor_gomesc/">
                <p className="text-white mt-2 flex gap-2"><Instagram size={20} />: Victor_gomesc</p>
               </Link>
                <p className="text-white mt-2 flex gap-2"><Mail size={20} />: victorgomesdacosta18@gmail.com</p>
                <p className="text-white mt-2 flex gap-2"><Phone size={20} />: +55(88)981437585</p>
               <Link href="https://www.linkedin.com/in/victor-gomes-da-costa-123a90241">
                <p className="text-white mt-2 flex gap-2"><Linkedin size={20} />: Linkedin</p>
               </Link>
               <Link href="https://github.com/victorgomesc">
                <p className="text-white mt-2 flex gap-2"><Github size={20} />: GitHub</p>
               </Link>
             </div>
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
                <p className="text-white mt-2 font-bold flex gap-2">Parcerias</p>
                <Link href="https://www.quixada.ufc.br/">
                  <p className="text-white mt-2 flex gap-2">Universidade federal do Ceara</p>
                </Link>

                <Link href="#">
                  <p className="text-white mt-2 flex gap-2">Sistem Coop</p>
                </Link>

                <Link href="https://www.ec.quixada.ufc.br/">
                  <p className="text-white mt-2 flex gap-2">Engenharia de computação</p>
                </Link>

                <Link href="#">
                  <p className="text-white mt-2 flex gap-2">Coop Tech</p>
                </Link>
             </div>
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
                <p className="text-white mt-2 flex gap-2">09/05/2024</p>
                <p className="text-white mt-2 flex gap-2">Versão 0.0.1</p>
                <p className="text-white mt-2 flex gap-2">Autor: Victor Gomes</p>
                <p className="text-white mt-2 flex gap-2">VGC Tec</p>
             </div>
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
               <p className="text-lg text-white italic">"Primeiro, lembre de olhar para as estrelas e não para seus pés."</p>
               <p className="text-lg text-white mt-2">Stephen Hawking</p>
             </div>
          </div>
        </footer>
    )
}