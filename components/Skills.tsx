
import React from 'react';
import { SkillCategory } from '../types.ts';

interface SkillsProps {
    skills: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div>
            {skills.map((category, index) => (
                <div key={index} className="mb-8">
                    <h3 className="font-bold text-slate-300 mb-3">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, i) => (
                            <div key={i} className="flex items-center rounded-full bg-fuchsia-400/10 px-3 py-1 text-xs font-medium leading-5 text-fuchsia-300">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
