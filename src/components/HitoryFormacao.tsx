import Image from "next/image";

export default function HistoryFormacao() {
  const formacoes = [
    {
      titulo: "Engenharia de Computação",
      instituicao: "Universidade Federal do Ceará",
      periodo: "26/02/2021 - 31/12/2025",
      nivel: "Bacharelado",
    },
    {
      titulo: "Ignite React/Next.js",
      instituicao: "Rocketseat",
      periodo: "01/03/2023 - 15/12/2023",
      nivel: "Técnico",
    },
    {
      titulo: "Engenheiro de Software",
      instituicao: "Alura",
      periodo: "04/05/2022 - 31/10/2022",
      nivel: "Técnico",
    },
    {
      titulo: "Técnico em Informática",
      instituicao: "EEEP Rita Matos Luna",
      periodo: "15/02/2017 - 31/12/2019",
      nivel: "Médio & Técnico",
    },
  ];

  return (
    <div className="mt-10 h-full w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-6 text-blue-900">Minhas Formações</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl gap-8 mt-12 px-4">
        {formacoes.map((formacao, index) => (
          <div
            key={index}
            className="h-auto w-full bg-blue-800 flex flex-col items-center justify-center p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-xl font-bold text-white">{formacao.titulo}</h2>
            <p className="text-lg text-white mt-2">{formacao.instituicao}</p>
            <p className="text-md text-white mt-2">{formacao.periodo}</p>
            <p className="text-md text-white mt-2">{formacao.nivel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
