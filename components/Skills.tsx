
import React from 'react';
import { SkillCategory } from '../types.ts';

interface SkillsProps {
    skills: SkillCategory[];
}

const categoryIcons: { [key: string]: string } = {
    'Database Technologies': '🗄️',
    'Cloud Platforms': '☁️',
    'Tools & Languages': '🛠️',
    'Key Competencies': '⚡',
    'Cloud Networking': '🌐',
    'Soft Skills': '🤝',
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
                <div 
                    key={index} 
                    className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{categoryIcons[category.category] || '📦'}</span>
                        <h3 className="font-bold text-slate-200">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, i) => (
                            <span 
                                key={i} 
                                className="inline-flex items-center rounded-lg bg-accent/10 border border-accent/20 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/20 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
