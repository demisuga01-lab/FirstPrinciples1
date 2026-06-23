import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative z-[var(--z-content)] pt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
