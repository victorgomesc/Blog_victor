import { Github, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BanerContato() {
    return(
        <div className="w-4/6 hfull bg-gray-200 rounded-3xl flex-col mt-24">
            <div className="h-96 max-w[30%]">
                <h1 className="text-4xl ml-6 font-bold mt-6">Como me encontrar:</h1>

                <Link href="https://www.linkedin.com/in/victor-gomes-da-costa-123a90241">
                <h3 className="flex items-center text-3xl ml-6 mt-6 font-semibold">
                    <Linkedin size={32} />: Linkedln
                </h3>
                </Link>

                <Link href="https://www.instagram.com/victor_gomesc/">
                <h3 className="flex items-center text-3xl ml-6 mt-6 font-semibold">
                    <Instagram size={32} />: Instagram
                </h3>
                </Link>

                <Link href="#">
                <h3 className="flex items-center text-3xl ml-6 mt-6 font-semibold">
                    <Mail size={32} />: E-mail
                </h3>
                </Link>

                <Link href="https://github.com/victorgomesc">
                <h3 className="flex items-center text-3xl ml-6 mt-6 font-semibold">
                    <Github size={32} />: Github
                </h3>
                </Link>

                <Link href="#">
                <h3 className="flex items-center text-3xl ml-6 mt-6 font-semibold">
                    <Phone size={32} />: Telefone
                </h3>
                </Link>

                <Link href="">
                <h3 className="flex items-center text-3xl ml-6 mt-6 font-semibold">
                    <MapPin size={32} />: Quixadá-CE
                </h3>
                </Link>
                
            </div>
            <div className="h-60">

            </div>
        </div>
    )
}