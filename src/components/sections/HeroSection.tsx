import { motion } from "framer-motion";
import GlitchText from "../ui/GlitchText";
import Button from "../ui/Button";
import content from "../../data/content.json";

export default function HeroSection() {
  const { hero } = content;

  return (
    <section className="section-padding relative flex min-h-[calc(100vh-var(--header-height))] items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-heading text-sm tracking-mono text-text-secondary"
        >
          {hero.greeting}
        </motion.p>

        {/* Name with glitch effect */}
        <GlitchText
          text={hero.name}
          className="mb-6 text-6xl font-bold md:text-8xl"
        />

        {/* Rotating roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <span className="font-heading text-lg tracking-mono text-accent-cyan">
            {hero.roles[0]}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl font-body text-lg text-text-secondary"
        >
          {content.site.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button href="#work" variant="primary">
            {hero.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
