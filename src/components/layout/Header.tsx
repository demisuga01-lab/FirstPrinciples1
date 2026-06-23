import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#timeline" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const scrollProgress = useScrollProgress();

  return (
    <header className="fixed top-0 right-0 left-0 z-[var(--z-header)]">
      {/* Scroll progress bar */}
      <motion.div
        className="h-[2px] bg-accent-cyan origin-left"
        style={{ scaleX: scrollProgress }}
      />

      <nav className="mx-auto flex max-w-[var(--max-width)] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-mono text-accent-cyan transition-colors hover:text-accent-lime"
        >
          Oxide
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-heading text-sm tracking-mono text-text-secondary transition-colors hover:text-accent-cyan"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button placeholder */}
        <button
          className="font-heading text-sm tracking-mono text-text-secondary hover:text-accent-cyan md:hidden"
          aria-label="Menu"
        >
          [Menu]
        </button>
      </nav>
    </header>
  );
}
