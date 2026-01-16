import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";

const skillCategories = [
  {
    title: "Databases",
    skills: ["SingleStore", "PostgreSQL", "MySQL", "Oracle DB", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (RDS, EC2, S3)", "Azure SQL", "Google Cloud SQL", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "Bash", "SQL", "Linux", "Git", "Grafana", "Prometheus"],
  },
];

export const Skills = () => {
  return (
    <Section id="skills" className="relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <SectionHeader
        label="Expertise"
        title="Technical arsenal"
        description="The tools and technologies I use to solve problems in production."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};