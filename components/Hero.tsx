
import React from 'react';
import { resumeData } from '../data/resumeData.ts';
import TerminalWindow from './TerminalWindow.tsx';
import MailIcon from './icons/MailIcon.tsx';
import ChevronRightIcon from './icons/ChevronRightIcon.tsx';
import LinkedInIcon from './icons/LinkedInIcon.tsx';
import GitHubIcon from './icons/GitHubIcon.tsx';

const Hero: React.FC = () => {
    const { main, socialLinks } = resumeData;
    
    const linkedIn = socialLinks.find(s => s.name === 'LinkedIn');
    const github = socialLinks.find(s => s.name === 'GitHub');
    
    return (
        <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center text-center py-20 lg:py-0">
            <div className="w-full max-w-6xl mx-auto">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent rounded-full px-4 py-2 text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Opportunities
                </div>
                
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-tight">
                    Database &
                    <span className="block gradient-text mt-2">Cloud Infrastructure</span>
                    <span className="block text-slate-100 mt-2">Engineer</span>
                </h1>
                
                {/* Bio */}
                <p className="mt-8 max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
                    Hi, I'm <strong className="text-accent">{main.name}</strong>. I specialize in distributed databases, 
                    AWS ecosystem, and keeping critical cloud infrastructure running at <strong className="text-slate-200">99.9% uptime</strong>.
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                    {linkedIn && (
                        <a 
                            href={linkedIn.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-accent hover:border-accent/50 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon className="w-5 h-5" />
                        </a>
                    )}
                    {github && (
                        <a 
                            href={github.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-accent hover:border-accent/50 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <GitHubIcon className="w-5 h-5" />
                        </a>
                    )}
                </div>
                
                <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left Side: CTAs and Stats */}
                    <div className="flex flex-col gap-8 items-center lg:items-start lg:text-left">
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a 
                                href={`mailto:${main.email}`} 
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-slate-900 bg-gradient-to-r from-accent to-cyan-500 rounded-xl shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                            >
                                <MailIcon className="w-5 h-5" />
                                Get In Touch
                            </a>
                            <a 
                                href="#experience" 
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-slate-300 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 hover:text-white hover:border-accent/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                            >
                                <ChevronRightIcon className="w-5 h-5" />
                                View Experience
                            </a>
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="w-full grid grid-cols-3 gap-4">
                            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                                <p className="text-2xl md:text-3xl font-bold gradient-text">{main.uptime}</p>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Uptime</p>
                            </div>
                            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                                <p className="text-2xl md:text-3xl font-bold gradient-text">{main.yearsExperience}</p>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Years Exp</p>
                            </div>
                            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                                <p className="text-2xl md:text-3xl font-bold gradient-text">{main.tier}</p>
                                <p className="text-xs uppercase tracking-wider text-slate-500 mt-1">Support</p>
                            </div>
                        </div>
                        
                        {/* Company logos */}
                        <div className="w-full pt-4 border-t border-slate-800">
                            <p className="text-xs uppercase tracking-wider text-slate-600 mb-3">Previously worked at</p>
                            <div className="flex items-center gap-6 text-slate-500">
                                <span className="font-semibold text-sm">SingleStore</span>
                                <span className="text-slate-700">•</span>
                                <span className="font-semibold text-sm">AWS</span>
                                <span className="text-slate-700">•</span>
                                <span className="font-semibold text-sm">Infosys</span>
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
