
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
type ThemeProps = {
  setTheme(value: string): void;
  theme: string;
};

const SwitchTheme = ({ setTheme, theme }: ThemeProps) => {
//const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");
  
  document.querySelector("body")?.classList.add(theme);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark")
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light")
    }
  };

  return (
    <div
      className="md:mr-4 cursor-pointer duration-500 border border-black rounded-full w-10 relative"
      onClick={toggleTheme}
    >
      <div
        className={`dark:text-black dark:-translate-x-0 duration-500 text-white duration-500"
        } `}
      >
        <div
          className="rounded-full dark:bg-slate-700 bg-amber-400 text-white 
          w-[25px] h-[25px] text-center flex items-center justify-center relative"
        >
          {theme === "light" ? <BsFillSunFill className="translate-x-0 bg-amber-400 rounded-full" /> : <BsFillMoonStarsFill className="translate-x-4 dark:bg-slate-600 rounded-full" /> }
        </div>
      </div>
    </div>
  );
};

export default SwitchTheme;