import socialLinks from "../../data/socialLinks.json";

const ICONS: Record<string, string> = {
  github: "[GH]",
  youtube: "[YT]",
  linkedin: "[LI]",
  twitter: "[X]",
};

export default function Footer() {
  const links = Object.values(socialLinks);

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-[var(--max-width)] flex-col items-center justify-between gap-6 md:flex-row">
        {/* Social links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm tracking-mono text-text-secondary transition-colors hover:text-accent-cyan"
            >
              {ICONS[link.icon] ?? `[${link.label}]`} {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-heading text-xs tracking-mono text-text-secondary">
          &copy; {new Date().getFullYear()} Oxide. Built from first principles.
        </p>
      </div>
    </footer>
  );
}
