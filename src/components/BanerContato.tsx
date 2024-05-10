"use client";

import { Github, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

const createSugestionFormSchema = z.object({
    name: z.string().nonempty('Por favor digite seu nome'),
    email: z.string().nonempty('O email é obrigatorio').email('Formato do email não é valido')
})

type createSugestionFormData = z.infer<typeof createSugestionFormSchema>

export default function BanerContato() {

    const [ output, setOutput] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<createSugestionFormData>({
        resolver: zodResolver(createSugestionFormSchema)
    })

    function createSugestion(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    const [emailValue, setEmailValue] = useState<string>('');
    const [nameValue, setNameValue] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
    };

    return(
        <>
        <h1 className="text-3xl font-bold mt-10">Entre em contato comigo pelos canais abaixo</h1>
        <div className="w-full h-full bg-white grid grid-cols-6
         items-center justify-center rounded-3xl flex-col mt-32 ml-32">

            <Link href="https://www.linkedin.com/in/victor-gomes-da-costa-123a90241">
            <div className="w-24 h-24 flex-col justify-center items-center flex
            hover:scale-125 transform transition duration-300 ease-in-out">
                <h1 className="text-2xl font-bold">Linkedln</h1>
                <Image src="/assets/link.png" alt="" width={200} height={200} className="mt-2" />
            </div>
            </Link>

            <Link href="https://github.com/victorgomesc">
            <div className="w-24 h-24 flex-col justify-center items-center flex
            hover:scale-125 transform transition duration-300 ease-in-out">
                <h1 className="text-2xl font-bold">Git Hub</h1>
                <Image src="/assets/git2.png" alt="" width={200} height={200} className="mt-2 rounded-3xl" />
            </div>
            </Link>

            <Link href="https://www.instagram.com/victor_gomesc/">
            <div className="w-24 h-24 flex-col justify-center items-center flex
            hover:scale-125 transform transition duration-300 ease-in-out">
                <h1 className="text-2xl font-bold">Instagram</h1>
                <Image src="/assets/insta.png" alt="" width={200} height={200} className="mt-2" />
            </div>
            </Link>

            <Link href="#">
            <div className="w-24 h-24 flex-col justify-center items-center flex
            hover:scale-125 transform transition duration-300 ease-in-out">
            <h1 className="text-2xl font-bold">Discord</h1>
                <Image src="/assets/disc.jpg" alt="" width={200} height={200} className="mt-2 rounded-3xl" />
            </div>
            </Link>

            <Link href="#">
            <div className="w-24 h-24 flex-col justify-center items-center flex 
            hover:scale-125 transform transition duration-300 ease-in-out">
                <h1 className="text-2xl font-bold">WhatsApp</h1>
                <Image src="/assets/zap.png" alt="" width={200} height={200} className="mt-2 rounded-3xl" />
            </div>
            </Link>

            <Link href="#">
            <div className="w-24 h-24 flex-col justify-center items-center flex 
            hover:scale-125 transform transition duration-300 ease-in-out">
                <h1 className="text-2xl font-bold">G-mail</h1>
                <Image src="/assets/gmail.png" alt="" width={200} height={200} className="mt-2 h-48 rounded-xl" />
            </div>
            </Link>
        </div>
        <h1 className="mt-36 text-3xl font-bold">Deixe sua sugestão :)</h1>
        <form onSubmit={handleSubmit(createSugestion)} className="flex flex-col mt-16 
        items-center border-solid border-4 w-2/6 bg-blue-300 rounded-xl">
            
            <label className="text-xl font-semibold mt-8">Digite seu nome:</label>

            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" type="text"
             placeholder="Digite seu nome"
              {...register('name')}
             value={nameValue}
             onChange={handleNameChange} />
             {errors.name && <span>{errors.name.message}</span>}

            <label className="text-xl font-semibold mt-8">Digite seu email:</label>

            <input className="border-solid text-2xl w-96 mt-6 border-2 border-sky-200
             hover:border-sky-700 p-2 rounded-xl" 
             type="text" 
             placeholder="exemplo@email.com"
             {...register('email')}
             value={emailValue}
             onChange={handleEmailChange} />
             {errors.email && <span>{errors.email.message}</span>}

            <label className="text-xl font-semibold mt-8">Digite sua sugestão:</label>
            <textarea className="border-solid mt-6 w-96 border-2 border-sky-200 
            hover:border-sky-700 h-36 rounded-xl">
            </textarea>
            <button type="submit" className="w-44 h-10 mt-10 bg-blue-800 hover:bg-blue-600
            font-semibold text-xl text-white rounded-full mb-8">Enviar</button>
        </form>
        </>
    )
}