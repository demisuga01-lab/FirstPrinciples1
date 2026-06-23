import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { staggerContainer, slideUp, slideInLeft } from "../../utils/animations";
import experience from "../../data/experience.json";
import content from "../../data/content.json";

export default function TimelineSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="timeline"
      ref={ref}
      className="section-padding border-t border-border"
    >
      <motion.div
        className="mx-auto max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2
          variants={slideUp}
          className="mb-2 font-heading text-4xl tracking-mono text-accent-cyan"
        >
          {content.timeline.heading}
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="mb-12 font-body text-text-secondary"
        >
          {content.timeline.subheading}
        </motion.p>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-8" />

          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={slideInLeft}
              className="relative pl-8 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-accent-cyan md:left-[30px]" />

              <div className="border border-border p-6 transition-colors hover:border-accent-cyan/30">
                <span className="mb-2 block font-heading text-xs tracking-mono text-accent-lime">
                  {exp.period}
                </span>
                <h3 className="mb-1 font-heading text-lg tracking-mono">
                  {exp.role}
                </h3>
                <p className="mb-3 font-body text-sm text-text-secondary">
                  {exp.company}
                </p>
                <p className="mb-4 font-body text-text-secondary">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-text-secondary before:mr-2 before:text-accent-cyan before:content-['>']"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
