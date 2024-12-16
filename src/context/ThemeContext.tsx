"use client"

import { createContext, useEffect, useState } from "react";

type ThemeContext = {
  setTheme(value: string): void;
  theme: string;
};
type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    // Verifica se estamos no cliente antes de acessar o localStorage
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []); 

  const updateTheme = (value: string) => {
    setTheme(value);
    localStorage.setItem("theme", value); // Atualiza o localStorage
  };
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};