import { motion } from "framer-motion";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { staggerContainer, slideUp, slideInRight } from "../../utils/animations";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import content from "../../data/content.json";

const BLOG_POSTS = [
  {
    title: "Building a Raft Consensus Engine in Rust",
    description: "A deep dive into distributed consensus, from theory to production-ready implementation.",
    url: "https://dev.to/oxide/raft-consensus-rust",
    tags: ["Rust", "Distributed Systems"],
  },
  {
    title: "The Art of Brutalist UI Design",
    description: "Why raw, unpolished interfaces create memorable user experiences.",
    url: "https://dev.to/oxide/brutalist-ui-design",
    tags: ["Design", "React"],
  },
  {
    title: "TypeScript Generics: From Zero to Hero",
    description: "Understanding TypeScript's type system from first principles.",
    url: "https://dev.to/oxide/typescript-generics",
    tags: ["TypeScript", "Tutorial"],
  },
] as const;

export default function BlogSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="blog"
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
          {content.blog.heading}
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="mb-12 font-body text-text-secondary"
        >
          {content.blog.subheading}
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.title} variants={slideInRight}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <Card className="h-full">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="mb-3 mt-4 font-heading text-lg tracking-mono">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    {post.description}
                  </p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
