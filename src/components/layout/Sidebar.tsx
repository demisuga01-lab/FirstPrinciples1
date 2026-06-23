import { useScrollProgress } from "../../hooks/useScrollProgress";

const SECTIONS = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#timeline" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Sidebar() {
  const scrollProgress = useScrollProgress();

  const activeIndex = Math.floor(scrollProgress * (SECTIONS.length - 1));

  return (
    <aside className="fixed right-8 top-1/2 z-[var(--z-overlay)] hidden -translate-y-1/2 lg:block">
      <nav>
        <ul className="flex flex-col items-center gap-4">
          {SECTIONS.map((section, index) => (
            <li key={section.href}>
              <a
                href={section.href}
                className="group relative flex items-center gap-3"
              >
                <span className="font-heading text-[10px] tracking-mono text-text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                  {section.label}
                </span>
                <div
                  className={`h-2 w-2 rounded-full border transition-colors ${
                    index === activeIndex
                      ? "border-accent-cyan bg-accent-cyan"
                      : "border-border bg-transparent"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
