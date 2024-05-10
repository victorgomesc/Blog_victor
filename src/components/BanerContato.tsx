import { Github, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function BanerContato() {
    return(
        <>
        <h1 className="text-3xl font-bold mt-10">Entre em contato comigo pelos canais abaixo</h1>
        <div className="w-full h-full bg-white grid grid-cols-6
         items-center justify-center rounded-3xl flex-col mt-32">

            <Link href="https://www.linkedin.com/in/victor-gomes-da-costa-123a90241">
            <div className="w-80 h-60 flex-col justify-center items-center flex">
                <h1 className="text-2xl font-bold">Linkedln</h1>
                <Image src="/assets/link.png" alt="" width={200} height={200} className="mt-2" />
            </div>
            </Link>

            <Link href="https://github.com/victorgomesc">
            <div className="w-80 h-60 flex-col justify-center items-center flex">
                <h1 className="text-2xl font-bold">Git Hub</h1>
                <Image src="/assets/git2.png" alt="" width={200} height={200} className="mt-2 rounded-3xl" />
            </div>
            </Link>

            <Link href="https://www.instagram.com/victor_gomesc/">
            <div className="w-80 h-60 flex-col justify-center items-center flex">
                <h1 className="text-2xl font-bold">Instagram</h1>
                <Image src="/assets/insta.png" alt="" width={200} height={200} className="mt-2" />
            </div>
            </Link>

            <Link href="#">
            <div className="w-80 h-60 flex-col justify-center items-center flex">
            <h1 className="text-2xl font-bold">Discord</h1>
                <Image src="/assets/disc.jpg" alt="" width={200} height={200} className="mt-2 rounded-3xl" />
            </div>
            </Link>

            <Link href="#">
            <div className="w-80 h-60 flex-col justify-center items-center flex">
                <h1 className="text-2xl font-bold">WhatsApp</h1>
                <Image src="/assets/zap.png" alt="" width={200} height={200} className="mt-2 rounded-3xl" />
            </div>
            </Link>

            <Link href="#">
            <div className="w-80 h-60 flex-col justify-center items-center flex">
                <h1 className="text-2xl font-bold">G-mail</h1>
                <Image src="/assets/gmail.png" alt="" width={200} height={200} className="mt-2 h-48 rounded-3xl" />
            </div>
            </Link>
        </div>
        <h1 className="mt-36 text-3xl font-bold">Deixe sua sugestão :)</h1>
        <form className="flex flex-col mt-16 items-center border-solid border-4 w-2/6">
            <label className="text-xl font-semibold mt-8">Digite seu nome:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700" type="text" />
            <label className="text-xl font-semibold mt-8">Digite seu email:</label>
            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700" type="text" />
            <label className="text-xl font-semibold mt-8">Digite sua sugestão:</label>
            <textarea className="border-solid mt-6 w-96 border-2 border-sky-200 hover:border-sky-700 h-36">
            </textarea>
            <button type="submit" className="w-44 h-10 mt-10 bg-blue-800 hover:bg-blue-600
            font-semibold text-xl text-white rounded-full mb-8">Enviar</button>
        </form>
        </>
    )
}