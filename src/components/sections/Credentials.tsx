import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Award, GraduationCap, Shield, Cloud } from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    level: "Associate",
    status: "Valid",
  },
  {
    icon: Cloud,
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    level: "AZ-900",
    status: "Verified",
  },
  {
    icon: Shield,
    title: "Web App Penetration Testing",
    issuer: "Security Certification",
    level: "Professional",
    status: "Verified",
  },
  {
    icon: Shield,
    title: "Cyber Security for Business",
    issuer: "Industry Certification",
    level: "Foundational",
    status: "Verified",
  },
];

const education = {
  degree: "BCA — Cloud Technology & Information Security",
  institution: "Jain University, Bengaluru",
  year: "2020",
};

export const Credentials = () => {
  return (
    <Section id="credentials">
      <SectionHeader
        label="Credentials"
        title="Proof of expertise"
        description="Certifications and education that back up real-world experience."
      />

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card-elevated p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <cert.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-heading font-semibold truncate">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {cert.level}
                </span>
                <span className="text-xs text-emerald-500">{cert.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-elevated p-8 flex items-center gap-6"
      >
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <GraduationCap className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold">{education.degree}</h3>
          <p className="text-muted-foreground">
            {education.institution} · {education.year}
          </p>
        </div>
      </motion.div>
    </Section>
  );
};