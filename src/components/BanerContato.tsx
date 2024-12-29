"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// Validação do formulário usando Zod
const createSuggestionFormSchema = z.object({
  name: z.string().nonempty("Por favor, digite seu nome"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato do e-mail não é válido"),
});

type CreateSuggestionFormData = z.infer<typeof createSuggestionFormSchema>;

export default function ContactBanner() {
  const [output, setOutput] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<CreateSuggestionFormData>({
    resolver: zodResolver(createSuggestionFormSchema),
  });

  // Função de envio do formulário
  const handleSuggestionSubmit = (data: CreateSuggestionFormData) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <h1 className="text-3xl font-bold mt-10">Entre em contato comigo pelos canais abaixo</h1>
      
      <div className="grid grid-cols-6 gap-6 items-center justify-center mt-32 ml-32 bg-white rounded-3xl">
        {[
          { href: "https://www.linkedin.com/in/victor-gomes-da-costa-123a90241", label: "LinkedIn", img: "/assets/link.png" },
          { href: "https://github.com/victorgomesc", label: "GitHub", img: "/assets/git2.png" },
          { href: "https://www.instagram.com/victor_gomesc/", label: "Instagram", img: "/assets/insta.png" },
          { href: "#", label: "Discord", img: "/assets/disc.jpg" },
          { href: "#", label: "WhatsApp", img: "/assets/zap.png" },
          { href: "#", label: "Gmail", img: "/assets/gmail.png" },
        ].map(({ href, label, img }) => (
          <Link key={label} href={href}>
            <div className="flex flex-col items-center justify-center w-24 h-24 transition-transform transform hover:scale-125">
              <h1 className="text-2xl font-bold">{label}</h1>
              <Image src={img} alt={label} width={200} height={200} className="mt-2 rounded-xl" />
            </div>
          </Link>
        ))}
      </div>

      <h1 className="mt-36 text-3xl font-bold">Deixe sua sugestão :)</h1>
      
      <form 
        onSubmit={handleSubmit(handleSuggestionSubmit)} 
        className="flex flex-col items-center w-2/6 p-6 mt-16 bg-blue-300 border-4 border-solid rounded-xl"
      >
        {[
          { label: "Digite seu nome:", name: "name", placeholder: "Digite seu nome" },
          { label: "Digite seu e-mail:", name: "email", placeholder: "exemplo@email.com" },
        ].map(({ label, name, placeholder }) => (
          <div key={name} className="w-full mt-8">
            <label className="text-xl font-semibold">{label}</label>
            <input
              className="w-full p-2 mt-2 text-2xl border-2 border-sky-200 rounded-xl hover:border-sky-700"
              type="text"
              placeholder={placeholder}
              {...register(name)}
            />
            {errors[name] && <span className="text-red-500">{errors[name]?.message}</span>}
          </div>
        ))}

        <label className="w-full mt-8 text-xl font-semibold">Digite sua sugestão:</label>
        <textarea 
          className="w-full h-36 p-2 mt-2 border-2 border-sky-200 rounded-xl hover:border-sky-700" 
          placeholder="Escreva aqui..."
        ></textarea>

        <button 
          type="submit" 
          className="w-44 h-10 mt-10 mb-8 text-xl font-semibold text-white bg-blue-800 rounded-full hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
