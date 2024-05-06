import Baner from "@/components/Baner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MyHistory from "@/components/MyHistory";
import Sidebar from "@/components/SidebarLeft";
import PeploCard from "@/components/peploCard";

export default function Home() {

  return (

    <div className="h-full flex items-center flex-col bg-white">
      <Header />
      <Sidebar />
      <Baner />
      <div className="flex">
        <PeploCard  />
        <div className="ml-32">
        <MyHistory />
        </div>
      </div>
      <Footer />
    </div>
  );
}
