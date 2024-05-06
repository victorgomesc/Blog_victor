

export default function ProjectContainer(){
    return(
        <>
        <div className="h-[60vh] w-[80%] mt-10 bg-gray-200 flex justify-start rounded-3xl">
            <div className="max-w-3/5 h-full">
            <video muted autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/iphone.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">IPhone Website</h1>
                <p className="ml-6 text-center mt-12 flex flex-col mr-6">
                Olá, gostaria de compartilhar com todos mais uma etapa de aprendizado, dessa vez estive
                 estudando e desenvolvendo uma pagina web com imagens 3D e seções animadas, nesse projeto
                  utilizei varias tecnologias dentre elas Java Script, React e TailwindCSS, só que
                   o diferencial e maior destaque são as imagens 3D e as animações, para a quais eu
                    utilizei o GSAP que é uma biblioteca do Java Script utilizada nas animações da nossa
                     pagina que ajuda a dar vida e animação aos componentes, e o Three.js que é uma 
                     biblioteca que foi utilizada para manipular os pacotes de imagens 3D e que garantem 
                     uma ótima experiencia do usuário, todas as imagens utilizadas são imagens disponibi
                     lizadas pela Apple. Bom pessoal é isso espero que gostem.
                </p>
            </div>
        </div>

        <div className="h-[60vh] w-[80%] mt-10 bg-gray-200 flex justify-start rounded-3xl">
            <div className="max-w-3/5 h-full">
            <video muted autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/grav1.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">T-shirt Soccer</h1>
                <p className="ml-6 text-center mt-12 flex flex-col mr-6">
                Olá pessoal, é com grande satisfação que venho compartilhar com vocês mas um projeto
                 pessoal em que estive trabalhando, dessa vez estive desenvolvendo um e-commerce e
                  resolvi trabalhar com duas coisas que gosto que são tecnologia e futebol, o
                   projeto se chama T-shirt Soccer e trata-se de uma loja digital que vende camisas
                    de futebol, o projeto ainda não foi finalizado, pelo contrario ainda está bem no
                     começo mas já posso falar um pouco do que eu utilizei e vou utilizar mais adiante.
                      No front end da aplicação utilizei Type Script, React e Next.js, dando um pouco
                       mas de destaque para o React e o Next que utilizei para implementar o Server
                        Side Rendering que é uma forma de renderizar com antecedência as paginas no
                         servidor, deixando as paginas do nosso sistema mais rápidas melhorando a
                          experiência do usuário, ainda no Front end utilizei Tailwind.CSS para
                           estilizar todos os componentes. Já o Back end estive pensando em fazer
                            com Node.js e utilizar alguma arquitetura distribuída como micro serviços
                             para deixar sessões independentes umas das outras e o sistema mais fluido.
                              Bom pessoal por enquanto isso e tudo vou dar continuidade ao projeto e
                               qualquer mudança atualizo tudo para vocês.
                </p>
            </div>
        </div>

        <div className="h-[60vh] w-[80%] mt-10 bg-gray-200 flex justify-start rounded-3xl">
            <div className="max-w-3/5 h-full">
            <video muted autoPlay className=" object-contain w-full h-full rounded-3xl">
                <source src="./assets/grav2.webm" />
            </video>
            </div>
            <div className="w-2/5 h-full bg-blue flex flex-col justify-center items-center">
                <h1 className="mt-6 text-3xl font-bold">DT Money</h1>
                <p className="ml-6 text-center mt-12 flex flex-col mr-6">
                Olá e com grande prazer que venho compartilhar com vocês mais um projeto, dessa vez
                 trata-se de um sistema de controle financeiro que eu desenvolvi durante
                  a trilha Ignite/React. Esse sistema de controle financeiro trata-se de 
                  uma aplicação simples mais que foi utilizadas varias tecnologias modernas 
                  como JavaScript, TypeScript, React, Next.js, o sistema consiste de uma listagem 
                  de entradas e saídas além de uma seção que faz o soma das entradas, das saídas e 
                  do total, além de uma barra de busca. Também utilizei um arquivo JsonServer para 
                  guardar e consultar minhas informações. Bom pessoal é isso espero que gostem.
                </p>
            </div>
        </div>

        </>
        
    )
}