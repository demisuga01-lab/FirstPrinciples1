export default function ScanlineOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[var(--z-overlay)] opacity-[0.03]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px)",
        backgroundSize: "100% 4px",
      }}
      aria-hidden
    />
  );
}
