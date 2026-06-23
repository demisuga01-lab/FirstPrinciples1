import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { staggerContainer, slideUp } from "../../utils/animations";
import Button from "../ui/Button";
import socialLinks from "../../data/socialLinks.json";
import content from "../../data/content.json";

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding border-t border-border"
    >
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2
          variants={slideUp}
          className="mb-2 font-heading text-4xl tracking-mono text-accent-cyan"
        >
          {content.contact.heading}
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="mb-8 font-body text-text-secondary"
        >
          {content.contact.subheading}
        </motion.p>

        <motion.div variants={slideUp} className="space-y-4">
          <Button href="mailto:hello@oxide.dev" variant="primary">
            {content.contact.cta}
          </Button>

          {/* Social links */}
          <div className="flex justify-center gap-6 pt-8">
            {Object.values(socialLinks).map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm tracking-mono text-text-secondary transition-colors hover:text-accent-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
