
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
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 text-fuchsia-400 border border-slate-700">
                    {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h2 className="text-3xl font-bold text-slate-200">{title}</h2>
            </div>
            {children}
        </section>
    );
};

export default SectionWrapper;
