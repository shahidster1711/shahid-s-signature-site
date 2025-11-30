
import React from 'react';
import { EducationItem } from '../types.ts';
import Card from './common/Card.tsx';

interface EducationProps {
    item: EducationItem;
}

const Education: React.FC<EducationProps> = ({ item }) => {
    return (
        <ol className="group/list">
            <Card>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={String(item.year)}>
                    {item.year}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <span className="font-bold">{item.degree}</span>
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{item.university}</p>
                    <p className="mt-1 text-sm text-slate-500">Grade: {item.grade}</p>
                </div>
            </Card>
        </ol>
    );
};

export default Education;
