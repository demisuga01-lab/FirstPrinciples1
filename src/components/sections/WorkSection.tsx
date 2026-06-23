import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { staggerContainer, slideUp, slideInRight } from "../../utils/animations";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import projects from "../../data/projects.json";
import content from "../../data/content.json";

export default function WorkSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
      ref={ref}
      className="section-padding border-t border-border"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2
          variants={slideUp}
          className="mb-2 font-heading text-4xl tracking-mono text-accent-cyan"
        >
          {content.work.heading}
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="mb-12 font-body text-text-secondary"
        >
          {content.work.subheading}
        </motion.p>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={slideInRight}>
              <Card>
                <h3 className="mb-3 font-heading text-xl tracking-mono">
                  {project.title}
                </h3>
                <p className="mb-4 font-body text-text-secondary">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-sm tracking-mono text-accent-cyan transition-colors hover:text-accent-lime"
                  >
                    [Source]
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-sm tracking-mono text-accent-cyan transition-colors hover:text-accent-lime"
                    >
                      [Live]
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
