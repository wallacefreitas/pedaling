import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
        <Content>
          {children}
        </Content>
      <Footer />
    </div>
  )
}