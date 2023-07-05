import ToggleTheme from "../components/ToggleTheme";

export default function Header() {
  return (
    <header className="flex bg-[#9384D1] dark:bg-[#1C1C28] h-14 p-4 w-full justify-between">
      Header
      <ToggleTheme />
    </header>
  )
}