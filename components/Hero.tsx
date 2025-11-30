
import React from 'react';
import { resumeData } from '../data/resumeData.ts';
import TerminalWindow from './TerminalWindow.tsx';
import MailIcon from './icons/MailIcon.tsx';
import ChevronRightIcon from './icons/ChevronRightIcon.tsx';

const Hero: React.FC = () => {
    const { main } = resumeData;
    return (
        <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center py-20 lg:py-0">
            <div className="w-full">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-full px-3 py-1 text-sm text-fuchsia-400 mb-6 shadow-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    System Operational - Tier-3 Support
                </div>
                
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tighter">
                    Optimizing the
                    <span className="block bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mt-2">Data Layer</span>
                </h1>
                
                {/* Bio */}
                <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg md:text-xl">
                    I'm <strong>{main.name}</strong>, a {main.title} at <strong>SingleStore</strong>. I specialize in distributed SQL, high-performance architecture, and keeping critical cloud infrastructure online.
                </p>
                
                <div className="mt-10 grid lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
                    {/* Left Side: CTAs and Stats */}
                    <div className="flex flex-col gap-8 items-center lg:items-start lg:text-left">
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href={`mailto:${main.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg shadow-lg hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                <MailIcon className="w-5 h-5" />
                                Initialize Contact
                            </a>
                            <a href="#experience" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                <ChevronRightIcon className="w-5 h-5" />
                                View Logs
                            </a>
                        </div>
                        <div className="mt-6 w-full grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-white">{main.uptime}</p>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Uptime Maintained</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-white">{main.yearsExperience}</p>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-bold text-white">{main.tier}</p>
                                <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">Escalation Engineer</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side: Terminal */}
                    <div className="w-full">
                        <TerminalWindow />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
