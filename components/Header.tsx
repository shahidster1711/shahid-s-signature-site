
import React from 'react';
import DatabaseIcon from './icons/DatabaseIcon.tsx';

interface HeaderProps {
    activeSection: string;
}

const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    return (
        <header className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-30 bg-dark/80 backdrop-blur-md border-b border-slate-800/50">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-slate-200 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md group">
                <DatabaseIcon className="w-7 h-7 text-accent transition-transform group-hover:scale-110" />
                <span className="font-mono tracking-tight">shahid<span className="text-accent">.cloud</span></span>
            </a>
            <nav className="hidden md:flex items-center gap-1 bg-slate-800/30 border border-slate-700/50 rounded-xl p-1" aria-label="Primary">
                {navItems.map((item) => (
                    <a 
                        key={item.name}
                        href={`#${item.id}`}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                            activeSection === item.id 
                                ? 'bg-accent/10 text-accent border border-accent/20' 
                                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                        }`}
                    >
                        {item.name}
                    </a>
                ))}
                <a 
                    href="mailto:connect2shahidmoosa@gmail.com"
                    className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-accent to-cyan-500 text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                    Contact
                </a>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white" aria-label="Open navigation menu">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
};

export default Header;
