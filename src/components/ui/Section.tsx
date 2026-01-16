import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn("py-24 md:py-32", className)}
    >
      <div className="section-container">
        {children}
      </div>
    </motion.section>
  );
};

export const SectionHeader = ({ 
  label, 
  title, 
  description 
}: { 
  label?: string; 
  title: string; 
  description?: string;
}) => {
  return (
    <div className="mb-16 max-w-2xl">
      {label && (
        <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};