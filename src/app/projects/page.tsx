import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HistoryProjects from "@/components/HistoryProjects";
import ProjectContainer from "@/components/ProjectContainer";
import Sidebar from "@/components/SidebarLeft";

export default function Projects() {
    return(
        <div className="h-full flex items-center flex-col bg-white">
            <Header />
            <Sidebar />
            <HistoryProjects />
            <ProjectContainer />
            <Footer />
        </div>
    )
}