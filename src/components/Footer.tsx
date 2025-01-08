import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const contactInfo = [
    { href: "https://www.instagram.com/victor_gomesc/", icon: <Instagram size={20} />, text: "Victor_gomesc" },
    { icon: <Mail size={20} />, text: "victorgomesdacosta18@gmail.com" },
    { icon: <Phone size={20} />, text: "+55(88)981437585" },
    { href: "https://www.linkedin.com/in/victor-gomes-da-costa-123a90241", icon: <Linkedin size={20} />, text: "Linkedin" },
    { href: "https://github.com/victorgomesc", icon: <Github size={20} />, text: "GitHub" },
  ];

  const partnerships = [
    { href: "https://www.quixada.ufc.br/", text: "Universidade Federal do Ceará" },
    { href: "#", text: "Sistem Coop" },
    { href: "https://www.ec.quixada.ufc.br/", text: "Engenharia de Computação" },
    { href: "#", text: "Coop Tech" },
  ];

  const footerDetails = [
    { text: "09/05/2024" },
    { text: "Versão 0.0.1" },
    { text: "Autor: Victor Gomes" },
    { text: "VGC Tec" },
  ];

  const quote = {
    text: "Primeiro, lembre de olhar para as estrelas e não para seus pés.",
    author: "Stephen Hawking",
  };

  return (
    <footer className="h-56 mt-36 w-full bg-gray-800">
      <div className="flex flex-row">
        {/* Contact Info */}
        <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
          {contactInfo.map((item, index) => (
            <Link key={index} href={item.href || "#"} aria-label={item.text}>
              <p className="text-white mt-2 flex gap-2">
                {item.icon}: {item.text}
              </p>
            </Link>
          ))}
        </div>

        {/* Partnerships */}
        <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
          <p className="text-white mt-2 font-bold">Parcerias</p>
          {partnerships.map((item, index) => (
            <Link key={index} href={item.href} aria-label={item.text}>
              <p className="text-white mt-2">{item.text}</p>
            </Link>
          ))}
        </div>

        {/* Footer Details */}
        <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
          {footerDetails.map((detail, index) => (
            <p key={index} className="text-white mt-2">
              {detail.text}
            </p>
          ))}
        </div>

        {/* Quote */}
        <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
          <p className="text-lg text-white italic">{quote.text}</p>
          <p className="text-lg text-white mt-2">{quote.author}</p>
        </div>
      </div>
    </footer>
  );
}
