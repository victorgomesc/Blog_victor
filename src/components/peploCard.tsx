import Image from "next/image";


export default function PeploCard() {
    return(
        <div className="w-96 h-2/6 bg-slate-600 mt-10">
            <Image src="/assets/eu2.jpeg" width={500} height={500} alt="" className="container h-full w-full" />
        </div>
    )
}