import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

const articles = [
  {
    title: "The Latency Tax of Separated Compute and Storage",
    description: "A critical analysis of disaggregated storage architectures vs shared-nothing systems. Examining network I/O penalties and why caching layers fail for high-concurrency point lookups.",
    category: "Architecture",
    readTime: "14 min read",
    date: "Jan 2026",
    featured: true,
  },
  {
    title: "Non-Blocking DDL is a Myth: Schema Evolution at Scale",
    description: "How lock propagation and metadata sync cause latency spikes even in 'online' DDL. Defensive patterns for schema migration using expansion/contraction strategies.",
    category: "Deep Dive",
    readTime: "11 min read",
    date: "Jan 2026",
    featured: true,
  },
  {
    title: "Surviving Data Skew in Distributed Joins",
    description: "How uneven data distribution destroys shuffle join performance. Contrasting broadcast joins vs repartitioning and why query optimizers often miss skew.",
    category: "Performance",
    readTime: "13 min read",
    date: "Dec 2025",
    featured: false,
  },
  {
    title: "Pragmatic Consistency: When Stronger Isn't Better",
    description: "The case against defaulting to strict serializability. Mapping business requirements to the lowest viable consistency level for maximum scalability.",
    category: "Architecture",
    readTime: "10 min read",
    date: "Dec 2025",
    featured: false,
  },
  {
    title: "Defensive Ingestion: Managing Backpressure in HTAP Systems",
    description: "Protecting HTAP systems from ingestion floods. Why Kafka alone isn't enough and how to implement database-aware flow control.",
    category: "Operations",
    readTime: "12 min read",
    date: "Nov 2025",
    featured: false,
  },
  {
    title: "Understanding CAP Theorem in Production",
    description: "A practical guide to navigating consistency, availability, and partition tolerance trade-offs when architecting distributed databases.",
    category: "Fundamentals",
    readTime: "8 min read",
    date: "Nov 2025",
    featured: false,
  },
  {
    title: "Query Optimization at Petabyte Scale",
    description: "Lessons learned from debugging slow queries across distributed nodes. Execution plans, index strategies, and memory management.",
    category: "Deep Dive",
    readTime: "12 min read",
    date: "Oct 2025",
    featured: false,
  },
  {
    title: "Incident Response for Database Engineers",
    description: "A battle-tested playbook for handling production database incidents. From detection to resolution to post-mortem.",
    category: "Operations",
    readTime: "10 min read",
    date: "Oct 2025",
    featured: false,
  },
  {
    title: "Sharding Strategies That Actually Work",
    description: "Comparing hash, range, and geo-based sharding with real performance benchmarks and migration patterns.",
    category: "Architecture",
    readTime: "15 min read",
    date: "Sep 2025",
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
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative card-elevated p-8 transition-all duration-300 overflow-hidden cursor-default"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                  {article.category}
                </span>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  Coming Soon
                </span>
              </div>
              
              <h3 className="font-heading text-xl font-semibold mb-3 leading-snug">
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
          </motion.div>
        ))}
      </div>

      {/* Other Articles */}
      <div className="grid md:grid-cols-2 gap-4">
        {otherArticles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/30 cursor-default"
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
              <h4 className="font-medium truncate">
                {article.title}
              </h4>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground shrink-0 ml-4">
              Soon
            </span>
          </motion.div>
        ))}
      </div>

      {/* Subscribe hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4" />
          Blog launching soon — stay tuned
        </div>
      </motion.div>
    </Section>
  );
};
