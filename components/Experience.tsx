
import React from 'react';
import { WorkExperienceItem } from '../types.ts';
import Card from './common/Card.tsx';

interface ExperienceProps {
    items: WorkExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
    return (
        <ol className="group/list">
            {items.map((item, index) => (
                <Card key={index}>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.duration}>
                        {item.duration}
                    </header>
                    <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                                <span className="font-bold">{item.role}</span>
                                <span className="text-slate-400"> · </span>
                                <span className="inline-block font-semibold text-fuchsia-400">
                                    {item.company}
                                </span>
                            </div>
                        </h3>
                        <ul className="mt-2 list-disc list-inside text-slate-400 space-y-2 marker:text-fuchsia-400">
                            {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </Card>
            ))}
        </ol>
    );
};

export default Experience;
