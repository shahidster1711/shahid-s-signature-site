import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowUpRight, Building2 } from "lucide-react";

const experiences = [
  {
    company: "SingleStore",
    role: "Database Cloud Support Engineer",
    period: "Jan 2024 — Present",
    description: "Resolving Tier-2/3 distributed systems challenges for SingleStore's cloud-native and hybrid deployments. Root-cause analysis of high-scale infrastructure failures, query engine optimizations, and cross-functional support for Fortune 500 implementations.",
    impact: [
      "Reduced average resolution time by 40% through improved diagnostic workflows",
      "Authored 15+ internal runbooks for complex failure scenarios",
      "Supported migrations handling 10M+ rows/second ingestion rates",
    ],
    skills: ["SingleStore", "Distributed SQL", "Linux", "AWS", "Python"],
  },
  {
    company: "Amazon Web Services",
    role: "Cloud Support Associate",
    period: "Jul 2022 — Jan 2024",
    description: "Delivered technical support for Amazon Aurora, RDS, and AWS DMS. Specialized in database migrations, performance optimization, and IAM security configurations.",
    impact: [
      "Maintained 98% customer satisfaction score across 500+ cases",
      "Created documentation reducing repeat issues by 25%",
      "Led knowledge sessions for new team members",
    ],
    skills: ["AWS RDS", "Aurora", "PostgreSQL", "DMS", "IAM"],
  },
  {
    company: "Infosys",
    role: "Senior System Associate",
    period: "Apr 2020 — Jul 2022",
    description: "Administered SCCM and Windows systems for enterprise clients. Managed infrastructure achieving 99% uptime across 100+ user environments.",
    impact: [
      "Automated deployment processes, reducing setup time by 60%",
      "Implemented monitoring reducing unplanned downtime",
      "Trained team of 5 on Linux administration",
    ],
    skills: ["SCCM", "Windows Server", "Linux", "PowerShell"],
  },
];

export const Work = () => {
  return (
    <Section id="work">
      <SectionHeader
        label="Experience"
        title="Where I've made impact"
        description="A track record of solving hard problems in production environments."
      />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-elevated p-8 md:p-10 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold flex items-center gap-2">
                    {exp.company}
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
              </div>
              <span className="text-sm text-muted-foreground md:text-right shrink-0">
                {exp.period}
              </span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Key Impact
              </h4>
              <ul className="space-y-2">
                {exp.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};