import Link from "next/link"

export default function ProjectContainer(){
    return(
        <>
        <div className="h-[60vh] w-[80%] mt-16 bg-gray-200 flex justify-start rounded-3xl 
        hover:scale-110 transform transition duration-300 ease-in-out">
            <div className="max-w-3/5 h-full ">
            <video muted loop autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/iphone.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">IPhone Website</h1>
                <p className="ml-8 mt-12 flex flex-col mr-8 text-justify">
                Olá, gostaria de compartilhar mais um projeto, desta vez uma pagina animada com 
                varios elementos animados e imagens 3D, quero dar destaque para as imagens 3D que
                implementei utilizando o Three.js e as animaçãoes que utilizei a biblioteca GSAP para dar
                vida aos components. Outro ponto que quero destacar é o Server Side Redering que é uma 
                forma de renderizar com antecedência as paginas no servidor, deixando as paginas do 
                nosso sistema mais rápidas melhorando a experiência do usuário.
                </p>
                <p className="ml-8 mt-2 flex flex-col mr-8 text-justify font-semibold">
                    Skills: Java Script, Type Script, React, Next.js, Tailwind CSS, Redux, Jest, GSAP, 
                    Three.js, Vercel.
                </p>
                <Link href="https://github.com/victorgomesc/apple_website">
                    <div className="w-60 bg-blue-600 h-12 rounded-full flex items-center justify-center mt-12">
                    <p className="text-white font-bold">Link do repositorio</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className="h-[60vh] w-[80%] mt-16 bg-gray-200 flex justify-start rounded-3xl 
        hover:scale-110 transform transition duration-300 ease-in-out">
            <div className="max-w-3/5 h-full">
            <video muted loop autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/grav1.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">T-shirt Soccer</h1>
                <p className="ml-8 mt-12 flex flex-col mr-8 text-justify">
                Olá pessoal, trago pra voces mais um projeto, dessa vez eu desenvolvi um e-commerce
                uma loja virtual que vende camisas de futebol, chamei o sistema de T-shirt Soccer, nele 
                utilizei um recurso do Next.js que é o Server Side Redering que é uma 
                forma de renderizar com antecedência as paginas no servidordeixando o sistema mais rapido
                e eficiente para o usuário.
                </p>
                <p className="ml-8 mt-2 flex flex-col mr-8 text-justify font-semibold">
                    Skills: Java Script, Type Script, React, Next.js, Tailwind CSS, Redux, Jest, Node.js
                    , MongoDB, Prisma, React Query, Vercel.
                </p>
                <Link href="https://github.com/victorgomesc/Victory_shoop">
                <div className="w-60 bg-blue-600 h-12 rounded-full flex items-center justify-center mt-12">
                    <p className="text-white font-bold">Link do repositorio</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className="h-[60vh] w-[80%] mt-16 bg-gray-200 flex justify-start rounded-3xl 
        hover:scale-110 transform transition duration-300 ease-in-out">
            <div className="max-w-3/5 h-full">
            <video muted loop autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/carros.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">Cars Showcase</h1>
                <p className="ml-8 text-justify mt-12 flex flex-col mr-8">
                Empolgado em compartilhar o mais recente projeto em que estive trabalhando, 
                o projeto consiste em uma vitrine de uma locadora de carros que foi desenvolvida 
                utilizando React, TypeScript, Next.js 14 e Tailwind CSS, com destaque para o Next.js 
                14 proporcionou uma renderização rápida e eficiente, garantindo uma navegação fluida em 
                toda a aplicação.
                </p>
                <p className="ml-8 mt-2 flex flex-col mr-8 text-justify font-semibold">
                    Skills: Java Script, Type Script, React, Next.js, Tailwind CSS, Redux, Jest, C#, .NET,
                    , MongoDB Prisma, React Query, Vercel.
                </p>
                <Link href="https://github.com/victorgomesc/Cars_showcase">
                <div className="w-60 bg-blue-600 h-12 rounded-full flex items-center justify-center mt-12">
                    <p className="text-white font-bold">Link do repositorio</p>
                </div>
                </Link>
            </div>
        </div>

        <div className="h-[60vh] w-[80%] mt-16 bg-gray-200 flex justify-start rounded-3xl 
        hover:scale-110 transform transition duration-300 ease-in-out">
            <div className="max-w-3/5 h-full">
            <video muted loop autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/grav2.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">DT Money</h1>
                <p className="ml-8 text-justify mt-12 flex flex-col mr-8">
                Olá e com grande prazer que venho compartilhar com vocês mais um projeto, dessa vez
                 trata-se de um sistema de controle financeiro que eu desenvolvi durante
                  a trilha Ignite/React. Esse sistema de controle financeiro trata-se de 
                  uma aplicação simples mais que foi utilizadas varias tecnologias modernas 
                  como JavaScript, TypeScript, React, Next.js, o sistema consiste de uma listagem 
                  de entradas e saídas além de uma seção que faz o soma das entradas, das saídas e 
                  do total, além de uma barra de busca. Também utilizei um arquivo JsonServer para 
                  guardar e consultar minhas informações. Bom pessoal é isso espero que gostem.
                </p>
                <p className="ml-8 mt-2 flex flex-col mr-8 text-justify font-semibold">
                    Skills: Java Script, Type Script, React, Next.js, Tailwind CSS, Redux, Jest, MongoDB,
                    , Prisma, React Query, Vercel.
                </p>
                <Link href="https://github.com/victorgomesc/DT_Money">
                <div className="w-60 bg-blue-600 h-12 rounded-full flex items-center justify-center mt-12">
                    <p className="text-white font-bold">Link do repositorio</p>
                    </div>
                </Link>
            </div>
        </div>

        <div className="h-[60vh] w-[80%] mt-16 bg-gray-200 flex justify-start rounded-3xl 
        hover:scale-110 transform transition duration-300 ease-in-out">
            <div className="max-w-3/5 h-full">
            <video muted loop autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/spot.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">Spotify Clone</h1>
                <p className="ml-8 text-justify mt-12 flex flex-col mr-8">
                Gostaria de compartilhar este projeto consiste na criação de um clone do Spotify, 
                uma plataforma popular de streaming de música, utilizando tecnologias modernas como 
                TypeScript, React, Tailwind CSS e Next.js. O projeto e composto principalmente pela 
                interface do Spotify, que foi desenvolvida exclusivamente com as tecnologias citadas 
                acima, o objetivo desse projeto é desenvolver as habilidades em estilização de projetos 
                utilizando Tailwind CSS.
                </p>
                <p className="ml-8 mt-2 flex flex-col mr-8 text-justify font-semibold">
                    Skills: Java Script, Type Script, React, Next.js, Tailwind CSS, Vercel.
                </p>
                <Link href="https://github.com/victorgomesc/DT_Money">
                <div className="w-60 bg-blue-600 h-12 rounded-full flex items-center justify-center mt-12">
                    <p className="text-white font-bold">Link do repositorio</p>
                    </div>
                </Link>
            </div>
        </div>

        </>
        
    )
}