import Header from "@/components/Header";
import HistoryExperiencias from "@/components/HistoryExperiencias";
import Sidebar from "@/components/SidebarLeft";

export default function Experiencias() {
    return(
        <div className="h-full flex items-center flex-col bg-white">
            <Header />
            <Sidebar />
            <HistoryExperiencias />
        </div>
    )
}