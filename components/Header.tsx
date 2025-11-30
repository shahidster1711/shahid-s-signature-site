
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
        <header className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-30 bg-slate-950/50 backdrop-blur-sm border-b border-slate-800">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-200 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 rounded-md">
                <DatabaseIcon className="w-7 h-7 text-fuchsia-400" />
                <span>Shahid.cloud</span>
            </a>
            <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 border border-slate-700 rounded-lg p-1">
                {navItems.map((item) => (
                    <a 
                        key={item.name}
                        href={`#${item.id}`}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 ${activeSection === item.id ? 'bg-slate-700 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                    >
                        {item.name}
                    </a>
                ))}
                 <a 
                    href="mailto:connect2shahidmoosa@gmail.com"
                    className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
