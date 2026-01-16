import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

const articles = [
  {
    title: "Understanding CAP Theorem in Production",
    description: "A practical guide to navigating consistency, availability, and partition tolerance trade-offs when architecting distributed databases for real-world workloads.",
    category: "Fundamentals",
    readTime: "8 min read",
    date: "Jan 2026",
    href: "https://shahidster.tech/blog/cap-theorem-production",
    featured: true,
  },
  {
    title: "Query Optimization at Petabyte Scale",
    description: "Lessons learned from debugging and optimizing slow queries across distributed nodes. Covers execution plans, index strategies, and memory management.",
    category: "Deep Dive",
    readTime: "12 min read",
    date: "Dec 2025",
    href: "https://shahidster.tech/blog/query-optimization-petabyte-scale",
    featured: true,
  },
  {
    title: "Incident Response for Database Engineers",
    description: "A battle-tested playbook for handling production database incidents. From detection to resolution to post-mortem.",
    category: "Operations",
    readTime: "10 min read",
    date: "Nov 2025",
    href: "https://shahidster.tech/blog/incident-response-database-engineers",
    featured: false,
  },
  {
    title: "Sharding Strategies That Actually Work",
    description: "Comparing hash, range, and geo-based sharding with real performance benchmarks and migration patterns.",
    category: "Architecture",
    readTime: "15 min read",
    date: "Oct 2025",
    href: "https://shahidster.tech/blog/sharding-strategies",
    featured: false,
  },
];

export const Writing = () => {
  const featuredArticles = articles.filter(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <Section id="writing">
      <SectionHeader
        label="Writing"
        title="Technical briefs"
        description="Field notes and learnings from the trenches of cloud database engineering. No fluff, just practical insights."
      />

      {/* Featured Articles */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featuredArticles.map((article, index) => (
          <motion.a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative card-elevated p-8 hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                  {article.category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {article.description}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Other Articles */}
      <div className="grid md:grid-cols-2 gap-4">
        {otherArticles.map((article, index) => (
          <motion.a
            key={article.title}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className="group flex items-center justify-between p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-medium text-primary/80">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>
              <h4 className="font-medium group-hover:text-primary transition-colors truncate">
                {article.title}
              </h4>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4" />
          </motion.a>
        ))}
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a
          href="https://shahidster.tech/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group"
        >
          <BookOpen className="w-4 h-4" />
          View all articles
          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
    </Section>
  );
};
