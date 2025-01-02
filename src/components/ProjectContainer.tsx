import Link from "next/link";

function ProjectCard({ videoSrc, title, description, skills, repoLink }) {
    return (
        <div className="h-[60vh] w-[80%] mt-16 bg-gray-200 flex justify-start rounded-3xl hover:scale-110 transform transition duration-300 ease-in-out">
            <div className="max-w-3/5 h-full">
                <video muted loop autoPlay className="object-contain w-full h-full rounded-3xl">
                    <source src={videoSrc} />
                </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">{title}</h1>
                <p className="ml-8 mt-12 flex flex-col mr-8 text-justify">{description}</p>
                <p className="ml-8 mt-2 flex flex-col mr-8 text-justify font-semibold">Skills: {skills}</p>
                <Link href={repoLink}>
                    <div className="w-60 bg-blue-600 h-12 rounded-full flex items-center justify-center mt-12">
                        <p className="text-white font-bold">Link do repositório</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default function ProjectContainer() {
    const projects = [
        {
            videoSrc: "./assets/iphone.webm",
            title: "IPhone Website",
            description:
                "Olá, gostaria de compartilhar mais um projeto, desta vez uma página animada com vários elementos animados e imagens 3D. Implementei as imagens 3D usando o Three.js e utilizei a biblioteca GSAP para animar os componentes. Outro ponto de destaque é o Server Side Rendering, que torna as páginas mais rápidas, melhorando a experiência do usuário.",
            skills: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, Jest, GSAP, Three.js, Vercel",
            repoLink: "https://github.com/victorgomesc/apple_website",
        },
        {
            videoSrc: "./assets/grav1.webm",
            title: "T-shirt Soccer",
            description:
                "Desenvolvi um e-commerce para venda de camisas de futebol chamado T-shirt Soccer. O sistema utiliza o Server Side Rendering do Next.js para renderizar páginas de forma eficiente, melhorando o desempenho.",
            skills: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, Jest, Node.js, MongoDB, Prisma, React Query, Vercel",
            repoLink: "https://github.com/victorgomesc/Victory_shoop",
        },
        {
            videoSrc: "./assets/carros.webm",
            title: "Cars Showcase",
            description:
                "Uma vitrine de uma locadora de carros desenvolvida com React, TypeScript, Next.js 14 e Tailwind CSS. O Next.js 14 garantiu uma renderização rápida e eficiente.",
            skills: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, Jest, C#, .NET, MongoDB, Prisma, React Query, Vercel",
            repoLink: "https://github.com/victorgomesc/Cars_showcase",
        },
        {
            videoSrc: "./assets/grav2.webm",
            title: "DT Money",
            description:
                "Um sistema de controle financeiro simples desenvolvido durante a trilha Ignite/React. Inclui listagem de entradas e saídas, soma total, e busca, com informações armazenadas em um JsonServer.",
            skills: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Redux, Jest, MongoDB, Prisma, React Query, Vercel",
            repoLink: "https://github.com/victorgomesc/DT_Money",
        },
        {
            videoSrc: "./assets/spot.webm",
            title: "Spotify Clone",
            description:
                "Um clone da interface do Spotify desenvolvido com TypeScript, React, Tailwind CSS e Next.js, com foco em estilização utilizando Tailwind CSS.",
            skills: "JavaScript, TypeScript, React, Next.js, Tailwind CSS, Vercel",
            repoLink: "https://github.com/victorgomesc/DT_Money",
        },
    ];

    return (
        <>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </>
    );
}
