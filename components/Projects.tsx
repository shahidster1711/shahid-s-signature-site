
import React from 'react';
import { ProjectItem } from '../types.ts';
import GitHubIcon from './icons/GitHubIcon.tsx';

interface ProjectsProps {
    items: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
                <div 
                    key={index}
                    className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-slate-200 group-hover:text-accent transition-colors">
                                {item.name}
                            </h3>
                        </div>
                        {item.url && (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="p-2 rounded-lg bg-slate-700/50 text-slate-400 hover:text-accent hover:bg-accent/10 transition-all"
                                aria-label={`View ${item.name} on GitHub`}
                            >
                                <GitHubIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                        {item.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
                        {item.tags.map((tag, i) => (
                            <span 
                                key={i} 
                                className="inline-flex items-center rounded-md bg-slate-700/50 px-2.5 py-1 text-xs font-medium text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
