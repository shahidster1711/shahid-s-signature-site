
export interface MainInfo {
    name: string;
    title: string;
    email: string;
    uptime: string;
    yearsExperience: string;
    tier: string;
    // The following are kept for potential future use or for the chatbot context
    phone: string;
    location: string;
    experience: string;
}

export interface WorkExperienceItem {
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface CertificationItem {
    name: string;
    credentialId: string;
    validity?: string;
}

export interface ProjectItem {
    name: string;
    description: string;
    tags: string[];
    url?: string;
}

export interface SkillCategory {
    category: string;
    technologies: string[];
}

export interface EducationItem {
    degree: string;
    year: number;
    university: string;
    grade: string;
}

export interface SocialLink {
    name: string;
    url: string;
}

export interface ResumeData {
    main: MainInfo;
    profileSummary: string;
    workExperience: WorkExperienceItem[];
    certifications: CertificationItem[];
    projects: ProjectItem[];
    skills: SkillCategory[];
    education: EducationItem;
    socialLinks: SocialLink[];
    languages: string[];
    hobbies: string[];
}
