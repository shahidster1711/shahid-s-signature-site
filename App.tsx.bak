
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Certifications from './components/Certifications.tsx';
import Education from './components/Education.tsx';
import Projects from './components/Projects.tsx';
import Chatbot from './components/Chatbot.tsx';
import ChatIcon from './components/icons/ChatIcon.tsx';
import { resumeData } from './data/resumeData.ts';
import SectionWrapper from './components/SectionWrapper.tsx';
import BriefcaseIcon from './components/icons/BriefcaseIcon.tsx';
import ProjectIcon from './components/icons/ProjectIcon.tsx';
import CodeIcon from './components/icons/CodeIcon.tsx';
import CertificateIcon from './components/icons/CertificateIcon.tsx';
import GraduationCapIcon from './components/icons/GraduationCapIcon.tsx';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isChatOpen, setChatOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollY = window.scrollY;
            let currentSection = 'home';

            sections.forEach(current => {
                const section = current as HTMLElement;
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 150;
                const sectionId = section.getAttribute('id');

                if (sectionId && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative z-0">
            <Header activeSection={activeSection} />
            <main className="px-6 md:px-12 lg:px-24">
                <Hero />
                <SectionWrapper title="Infrastructure Logs" id="experience" icon={<BriefcaseIcon />}>
                    <Experience items={resumeData.workExperience} />
                </SectionWrapper>
                <SectionWrapper title="Side Projects" id="projects" icon={<ProjectIcon />}>
                    <Projects items={resumeData.projects} />
                </SectionWrapper>
                <SectionWrapper title="Skills" id="skills" icon={<CodeIcon />}>
                    <Skills skills={resumeData.skills} />
                </SectionWrapper>
                <SectionWrapper title="Certifications" id="certifications" icon={<CertificateIcon />}>
                    <Certifications items={resumeData.certifications} />
                </SectionWrapper>
                <SectionWrapper title="Education" id="education" icon={<GraduationCapIcon />}>
                    <Education item={resumeData.education} />
                </SectionWrapper>
            </main>
            <button
                onClick={() => setChatOpen(true)}
                className="fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20 hover:from-purple-700 hover:to-fuchsia-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-all duration-300 hover:scale-110"
                aria-label="Open AI Chat"
                aria-pressed={isChatOpen}
            >
                <ChatIcon className="h-8 w-8 mx-auto" />
            </button>
            <Chatbot isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
        </div>
    );
};

export default App;
