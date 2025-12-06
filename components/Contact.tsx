
import React from 'react';
import { resumeData } from '../data/resumeData.ts';
import EmailIcon from './icons/EmailIcon.tsx';
import PhoneIcon from './icons/PhoneIcon.tsx';
import LocationIcon from './icons/LocationIcon.tsx';
import LinkedInIcon from './icons/LinkedInIcon.tsx';
import GitHubIcon from './icons/GitHubIcon.tsx';

const Contact: React.FC = () => {
    const { main, socialLinks } = resumeData;
    
    const linkedIn = socialLinks.find(s => s.name === 'LinkedIn');
    const github = socialLinks.find(s => s.name === 'GitHub');
    
    return (
        <div className="max-w-4xl">
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about databases and cloud infrastructure. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                    <a 
                        href={`mailto:${main.email}`}
                        className="flex items-center gap-4 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                            <EmailIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                            <p className="text-slate-200 font-medium group-hover:text-accent transition-colors">{main.email}</p>
                        </div>
                    </a>
                    
                    <a 
                        href={`tel:${main.phone}`}
                        className="flex items-center gap-4 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4 hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                            <PhoneIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-slate-500">Phone</p>
                            <p className="text-slate-200 font-medium group-hover:text-accent transition-colors">{main.phone}</p>
                        </div>
                    </a>
                    
                    <div className="flex items-center gap-4 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                            <LocationIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-wider text-slate-500">Location</p>
                            <p className="text-slate-200 font-medium">{main.location}</p>
                        </div>
                    </div>
                </div>
                
                {/* Social & CTA */}
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                        <h3 className="text-slate-200 font-semibold mb-4">Connect with me</h3>
                        <div className="flex gap-3">
                            {linkedIn && (
                                <a 
                                    href={linkedIn.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-600/30 text-blue-400 hover:bg-blue-600/20 transition-colors"
                                >
                                    <LinkedInIcon className="w-5 h-5" />
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </a>
                            )}
                            {github && (
                                <a 
                                    href={github.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors"
                                >
                                    <GitHubIcon className="w-5 h-5" />
                                    <span className="text-sm font-medium">GitHub</span>
                                </a>
                            )}
                        </div>
                    </div>
                    
                    <a 
                        href={`mailto:${main.email}?subject=Let's Connect!`}
                        className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-cyan-500 text-slate-900 font-semibold rounded-xl p-4 text-center hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                    >
                        <EmailIcon className="w-5 h-5" />
                        Send me a message
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
