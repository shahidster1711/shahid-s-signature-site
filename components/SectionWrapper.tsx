
import React from 'react';

interface SectionWrapperProps {
    title: string;
    id: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, id, icon, children }) => {
    return (
        <section id={id} className="py-16 md:py-24 scroll-mt-20">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent border border-accent/20">
                    {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-100">{title}</h2>
                </div>
            </div>
            
            {/* Section Content */}
            <div className="relative">
                {children}
            </div>
            
            {/* Section Divider */}
            <div className="mt-16 md:mt-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        </section>
    );
};

export default SectionWrapper;
