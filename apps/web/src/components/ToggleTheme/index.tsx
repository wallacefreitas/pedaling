import { useEffect, useState } from "react";
import { SunDim, Moon } from "@phosphor-icons/react"
import useTheme from "../../hooks/useTheme"

export default function ToggleTheme() {
  const [isToggleTheme, setToggleTheme] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(isToggleTheme ? "dark" : "light")
  }, [isToggleTheme])

  function handleChecked() {
    setToggleTheme(!isToggleTheme)
  }
  
  return (
    <div className="flex h-full items-center justify-center hover:bg-indigo-600/70 hover:rounded-xl p-4">
      <button onClick={handleChecked} >
        {isToggleTheme ? <SunDim size={24} /> : <Moon size={24} />}
      </button>
    </div>
  )
}