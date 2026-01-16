import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowUpRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Distributed Database Systems: A Senior Engineer's Guide",
    description: "Architectural foundations: CAP theorem latency trade-offs, sharding strategies, and multi-node consensus in production environments.",
    category: "Pillar Guide",
    href: "https://shahidster.tech/blog/getting-started-distributed-databases",
  },
  {
    title: "How Distributed SQL Execution Engines Really Work",
    description: "Deep dive into query planning, execution, and optimization across distributed nodes.",
    category: "Architecture",
    href: "https://shahidster.tech/blog/distributed-sql-execution-engines",
  },
  {
    title: "Debugging Query Performance in Distributed Systems",
    description: "Practical techniques for identifying and resolving slow queries at scale.",
    category: "Deep Dive",
    href: "https://shahidster.tech/blog/debugging-slow-database-queries",
  },
];

export const Writing = () => {
  return (
    <Section id="writing">
      <SectionHeader
        label="Writing"
        title="Technical briefs"
        description="Thoughts and learnings from the trenches of cloud database engineering."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group card-elevated p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {article.category}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {article.description}
            </p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center"
      >
        <a
          href="https://shahidster.tech/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
        >
          <BookOpen className="w-4 h-4" />
          View all articles
        </a>
      </motion.div>
    </Section>
  );
};