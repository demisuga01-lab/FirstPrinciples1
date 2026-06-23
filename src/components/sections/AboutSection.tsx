import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { staggerContainer, slideUp } from "../../utils/animations";
import content from "../../data/content.json";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding border-t border-border"
    >
      <motion.div
        className="mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.h2
          variants={slideUp}
          className="mb-12 font-heading text-4xl tracking-mono text-accent-cyan"
        >
          {content.about.heading}
        </motion.h2>

        {/* Content */}
        <div className="space-y-6">
          {content.about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={slideUp}
              className="font-body text-lg leading-relaxed text-text-secondary"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
