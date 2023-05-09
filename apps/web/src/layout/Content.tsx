import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <section className={`flex h-full bg-[#FCECDD] dark:bg-[#1C1C28] w-full border-2 border-purple-700 p-4`}>
      {children}
    </section>
    )
}