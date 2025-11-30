
import React from 'react';
import { ProjectItem } from '../types.ts';
import ExternalLinkIcon from './icons/ExternalLinkIcon.tsx';
import Card from './common/Card.tsx';

interface ProjectsProps {
    items: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ items }) => {
    return (
        <ul className="group/list">
            {items.map((item, index) => (
                <Card key={index}>
                    <div className="z-10 sm:col-span-8">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <a
                                className="group/link inline-flex items-baseline font-bold text-base hover:text-fuchsia-400 focus-visible:text-fuchsia-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-fuchsia-400 rounded-sm"
                                href={item.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${item.name} (opens in a new tab)`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                    {item.name}
                                    {item.url && <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />}
                                </span>
                            </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">{item.description}</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {item.tags.map((tag, i) => (
                                <li key={i} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-fuchsia-400/10 px-3 py-1 text-xs font-medium leading-5 text-fuchsia-300 ">{tag}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            ))}
        </ul>
    );
};

export default Projects;
