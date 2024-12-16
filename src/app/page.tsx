import dynamic from "next/dynamic";

// Carrega o ThemeProvider apenas no cliente
const ThemeProvider = dynamic(() => import("@/context/ThemeContext").then((mod) => mod.ThemeProvider), { ssr: false });

import Header from "@/components/Header";


export default function Home() {

  return (
    <ThemeProvider>
    <Header />
    </ThemeProvider>
  );
}
