import { useEffect, useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";

export function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4"
        >
            {theme === "dark" ?
                <BsFillSunFill className="h-6 w-6 text-yellow-300" /> :
                <BiSolidMoon className="h-6 w-6 text-text" />}
        </button>
    );
}