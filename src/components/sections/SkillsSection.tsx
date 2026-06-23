import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { staggerContainer, slideUp } from "../../utils/animations";
import Badge from "../ui/Badge";
import skills from "../../data/skills.json";
import content from "../../data/content.json";

const CATEGORIES = [
  { key: "language", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
] as const;

export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
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
          {content.skills.heading}
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="mb-12 font-body text-text-secondary"
        >
          {content.skills.subheading}
        </motion.p>

        <div className="space-y-10">
          {CATEGORIES.map((category) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.key,
            );

            return (
              <motion.div key={category.key} variants={slideUp}>
                <h3 className="mb-4 font-heading text-sm tracking-mono text-accent-lime">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <Badge key={skill.name} variant="skill">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
