import Image from "next/image";


export default function PeploCard() {
    return(
        <div className="w-96 h-2/6 bg-slate-600 mt-10 
        hover:scale-110 transform transition duration-300 ease-in-out">
            <Image src="/assets/victor.jpeg" width={500} height={500} alt="" className="container h-full w-full" />
        </div>
    )
}