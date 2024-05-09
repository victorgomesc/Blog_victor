import BanerContato from "@/components/BanerContato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/SidebarLeft";

export default function Contato() {
    return(
        <div className="h-full flex items-center flex-col bg-white">
            <Header />
            <Sidebar />
            <BanerContato />
            <Footer />
        </div>
    )
}