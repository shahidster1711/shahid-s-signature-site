
import React from 'react';
import { WorkExperienceItem } from '../types.ts';

interface ExperienceProps {
    items: WorkExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block"></div>
            
            <ol className="space-y-8">
                {items.map((item, index) => (
                    <li key={index} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-6 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/30 hidden md:block mt-2"></div>
                        
                        <div className="md:ml-16 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 group-hover:border-accent/30 transition-all duration-300">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-100">{item.role}</h3>
                                    <span className="text-accent font-semibold">{item.company}</span>
                                </div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-xs font-mono text-slate-400 whitespace-nowrap">
                                    {item.duration}
                                </span>
                            </div>
                            
                            {/* Description */}
                            <ul className="space-y-3">
                                {item.description.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                                        <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Experience;
