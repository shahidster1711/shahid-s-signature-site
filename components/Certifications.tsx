
import React from 'react';
import { CertificationItem } from '../types.ts';
import ExternalLinkIcon from './icons/ExternalLinkIcon.tsx';

interface CertificationsProps {
    items: CertificationItem[];
}

const certLogos: { [key: string]: string } = {
    'AWS Certified Solutions Architect – Associate': '🏆',
    'AZ-900: Microsoft Azure Fundamentals': '☁️',
    'Web Application Penetration Testing': '🔐',
    'Introduction To Cyber Security For Business': '🛡️',
};

const Certifications: React.FC<CertificationsProps> = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {items.map((item, index) => (
                <div 
                    key={index}
                    className="group bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl">
                            {certLogos[item.name] || '📜'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-200 group-hover:text-accent transition-colors flex items-center gap-2">
                                {item.name}
                                <ExternalLinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                            </h3>
                            <p className="mt-1 text-sm text-slate-500 font-mono">
                                ID: {item.credentialId}
                            </p>
                            {item.validity && (
                                <span className="inline-flex items-center mt-2 px-2 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400">
                                    ✓ {item.validity}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certifications;
