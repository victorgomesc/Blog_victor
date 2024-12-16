"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SwitchTheme from "./SwitchTheme";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const links = [
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Experiences",
      path: "#experiences",
    },
    {
      name: "Knowledges",
      path: "#knowledges",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  useEffect(() => {
    document.querySelector("body")?.setAttribute("class", theme);
    const handleScroll = () => {
      setSticky(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, sticky]);

  return (
    <header
      className={`${
        sticky && "sticky top-0 shadow-stone-400"
      } : "top-0 shadow-stone-400" shadow-md dark:shadow-xl duration-500 w-full md:flex items-center justify-between dark:bg-zinc-900 bg-zinc-100 h-auto p-4 z-[3]`}
    >
      <span
        className={`border-gradient-light dark:border-gradient-dark font-semibold mb-8 md:text-2xl md:mb-0 cursor-pointer`}
      >
        <Link className="font-bold" href="#home">
          &lt;Victor Gomes /&gt;
        </Link>
      </span>
      <nav>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute md:hidden top-4 right-6 text-2xl transition-all duration-500 cursor-pointer md:static dark:text-white"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <ul
          className={`pt-2 md:pt-0 md:flex md:items-center md:static md:z-auto absolute top-14 duration-500 z-[2] dark:bg-zinc-900 ${
            isOpen
              ? "translate-y-0 bg-zinc-100 w-full left-0 pl-2 pb-2"
              : "-translate-y-[300%] md:translate-y-0"
          }`}
        >
          <SwitchTheme setTheme={setTheme} theme={theme} />
          {links.map((link) => {
            return (
              <li
                key={link.name}
                className="md:ml-6 mt-4 md:mt-0 border-l-2 md:border-l-0 pl-2 border-gradient md:pl-0 dark:text-white text-base text-black duration-500 md:relative"
              >
                <Link
                  className="md:after:absolute md:after:content-[''] md:after:bg-gradient-to-r from-indigo-500 from-21%  via-sky-500 via-45% to-cyan-300 to-90% md:after:h-[2px] md:after:w-0  md:after:left-0 md:after:-bottom-[5px] md:hover:after:w-[100%] md:after:duration-500"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;