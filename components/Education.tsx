
import React from 'react';
import { EducationItem } from '../types.ts';

interface EducationProps {
    item: EducationItem;
}

const Education: React.FC<EducationProps> = ({ item }) => {
    return (
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 max-w-2xl">
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-lg font-bold text-slate-200">{item.degree}</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-xs font-mono text-slate-400">
                            {item.year}
                        </span>
                    </div>
                    <p className="mt-2 text-slate-400">{item.university}</p>
                    <div className="mt-3 flex items-center gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-lg bg-accent/10 border border-accent/20 text-sm font-semibold text-accent">
                            Grade: {item.grade}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
