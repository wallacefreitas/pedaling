import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex flex-col w-full h-full">
        <Header />
        <Content>
          {children}
        </Content>
      </main>
    </div>
  )
}