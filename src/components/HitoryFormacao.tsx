import Image from "next/image";


export default function HistoryFormação() {
    return(
        <div className="mt-10 h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-6">Minhas Formações</h1>
            <div className="grid grid-cols-4 w-screen h-full max-w-[100%] mt-24 gap-8 mb-40">
                <div className="h-96 w-96 mt-8 mb-8 ml-8 bg-blue-800 flex flex-col
                 items-center justify-center p-6 rounded-xl hover:scale-110 transform
                  transition duration-300 ease-in-out">

                    <h1 className="text-xl font-bold text-white">Engenharia de Computação</h1>
                    <p className="text-xl font-bold text-white mt-3">Universidade Federal do Ceará</p>
                    <p className="text-xl font-bold text-white mt-3">02/26/2021 - 31/12/2025</p>
                    <p className="text-xl font-bold text-white mt-3">Bacharelado</p>
                </div>

                <div className="h-96 w-96 mt-8 mb-8 ml-8 bg-blue-800 flex flex-col
                 items-center justify-center p-6 rounded-xl hover:scale-110 transform
                  transition duration-300 ease-in-out">

                    <h1 className="text-xl font-bold text-white">Ignite React/Next.js</h1>
                    <p className="text-xl font-bold text-white mt-3">Rocket Seat</p>
                    <p className="text-xl font-bold text-white mt-3">01/03/2023 - 15/12/2023</p>
                    <p className="text-xl font-bold text-white mt-3">Tecnico</p>
                </div>

                <div className="h-96 w-96 mt-8 mb-8 ml-8 bg-blue-800 flex flex-col
                 items-center justify-center p-6 rounded-xl hover:scale-110 transform 
                 transition duration-300 ease-in-out">

                    <h1 className="text-xl font-bold text-white">Engenheiro de Software</h1>
                    <p className="text-xl font-bold text-white mt-3">Alura</p>
                    <p className="text-xl font-bold text-white mt-3">04/05/2022 - 31/10/2022</p>
                    <p className="text-xl font-bold text-white mt-3">Tecnico</p>
                </div>

                <div className="h-96 w-96 mt-8 mb-8 ml-8 bg-blue-800 flex flex-col
                 items-center justify-center p-6 rounded-xl hover:scale-110 transform 
                 transition duration-300 ease-in-out">

                    <h1 className="text-xl font-bold text-white">Tecnico em Informática</h1>
                    <p className="text-xl font-bold text-white mt-3">EEEP Rita Matos Luna</p>
                    <p className="text-xl font-bold text-white mt-3">15/02/2017 - 31/12/2019</p>
                    <p className="text-xl font-bold text-white mt-3">Médio & Tecnico</p>
                </div>
            </div>
            
        </div>
    )
}