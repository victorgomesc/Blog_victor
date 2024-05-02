import Image from "next/image";


export default function Baner() {
    return(
        <div className=" h-96 mt-8 w-4/5 ">
          <video muted autoPlay className=" object-fill w-full h-full rounded-3xl" >
            <source src="./assets/video1.mp4" />
          </video>
      </div>
    )
}
