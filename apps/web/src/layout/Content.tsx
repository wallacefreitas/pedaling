import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <main className="flex h-full bg-[#FCECDD] w-full border-2 border-purple-700">
      <Sidebar />
      {children}
    </main>
    )
}