import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Header() {
    return(
        <div className=" container object-top max-w-none bg-gray-950 h-28 items-center justify-center flex">
        <div className=" w-1/4 items-center justify-center flex">
          <Menu size={32} color="white" className="mr-20" />
        </div>
        <div className=" w-2/4 items-center justify-center flex">
          <h1 className=" text-5xl font-bold text-white">Victor Gomes</h1>
        </div>
        <div className=" w-1/4 items-center justify-center flex gap-16">
          <Link href="/carshopping">
          <ShoppingCart color="white" size={32} />
          </Link>
          <Link href="/loginsection">
          <CircleUserRound color="white" size={32}/>
          </Link>
          <Search color="white" size={32}/>
        </div>
      </div>
    )
}