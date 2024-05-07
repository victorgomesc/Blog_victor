import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HistoryFormação from "@/components/HitoryFormacao";
import Sidebar from "@/components/SidebarLeft";

export default function Formacao() {
    return(
        <div className="h-full flex items-center flex-col bg-white">
            <Header />
            <Sidebar />
            <HistoryFormação />
            <Footer />
        </div>
    )
}