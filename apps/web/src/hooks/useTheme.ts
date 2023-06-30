import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light")
  const currentTheme = theme === "dark" ? "light" : "dark"

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(currentTheme);
    root.classList.add(theme);
  }, [theme])

  return {
    setTheme
  }
}