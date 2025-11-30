
import { ResumeData } from '../types.ts';

export const resumeData: ResumeData = {
    main: {
        name: "Shahid Moosa",
        title: "Database Cloud Support Engineer",
        phone: "+91 8217041965",
        email: "connect2shahidmoosa@gmail.com",
        location: "Bengaluru, INDIA",
        experience: "5+ Years",
        uptime: "99.9%",
        yearsExperience: "5+",
        tier: "Tier-3",
    },
    profileSummary: "Results-driven Database Support Engineer specializing in infrastructure support for cloud-native and on-premise databases. Proficient in AWS Security, Identity and Access Management, Amazon Aurora, SQL, NoSQL, Linux, and disaster recovery. Adept at ITIL-based incident management and root cause analysis, delivering scalable, secure solutions while maintaining high SLA adherence. Combines hands-on experience with a Bachelor's degree in Cloud Technology and Information Security from Jain University.",
    workExperience: [
        {
            role: "Database Cloud Support Engineer",
            company: "SingleStore DB",
            duration: "01/2024 - Present",
            description: [
                "Provide Tier-2/3 support for SingleStore's cloud-native and on-premise databases, resolving 30+ tickets daily and reducing escalations by 15%.",
                "Troubleshoot complex infrastructure issues using SQL, NoSQL, Linux, and AWS tools, achieving 99.9% uptime for enterprise clients.",
                "Collaborate with product engineering, customer success, and DevOps teams to accelerate incident resolution times by 15%, driving product enhancements.",
                "Develop and maintain best-practice documentation for database deployment, maintenance, and performance monitoring; lead training sessions on cloud architecture.",
                "Lead critical incident response following ITIL guidelines, minimizing downtime and ensuring rapid resolution within SLA targets."
            ]
        },
        {
            role: "Cloud Support Associate (Managed Databases - PostgreSQL)",
            company: "Amazon Web Services (AWS)",
            duration: "07/2022 - 01/2024",
            description: [
                "Delivered technical support for Amazon Aurora, RDS, and AWS DMS, reducing issue resolution time by 20% through in-depth root cause analysis.",
                "Specialized in AWS services (EC2, IAM, VPC, S3), supporting 50+ global clients with secure, scalable database deployments.",
                "Conducted advanced troubleshooting via chat, email, and phone, consistently exceeding SLA targets and achieving a 4.8/5 CSAT rating.",
                "Authored knowledge-base articles on IAM configuration, database optimization, and disaster recovery, improving internal onboarding by 30%.",
                "Collaborated with global AWS engineering teams to resolve complex issues and provide feedback for service improvements."
            ]
        },
        {
            role: "Senior System Associate",
            company: "Infosys",
            duration: "04/2020 - 07/2022",
            description: [
                "Effectively manage Medical Coding based on Service Requests from a US Healthcare Client, maintaining high standards of accuracy and efficiency.",
                "Administered SCCM and Windows systems for 100+ users, achieving 99% uptime through proactive maintenance and monitoring.",
                "Completed extensive training in SCCM, Windows Administration, PowerShell, Python, Linux, and Networking at Infosys Global Education Centre, Mysore.",
                "Managed document control processes under EDF standards, ensuring compliance and confidentiality of sensitive data."
            ]
        }
    ],
    projects: [
        {
            name: "Home Lab Server & Network",
            description: "Built and maintain a home lab environment using Proxmox for virtualization. Deployed various services in Docker containers, including Pi-hole for network-wide ad blocking and a media server. This project enhances my skills in networking, Linux administration, and containerization.",
            tags: ["Docker", "Proxmox", "Linux", "Networking", "DIY"],
        },
        {
            name: "Cloud Cost Optimization Scripts",
            description: "Developed a set of Python scripts that leverage the AWS Boto3 library to analyze EC2 and RDS usage patterns. The scripts identify underutilized resources and generate reports with recommendations for downsizing or termination, leading to potential cost savings.",
            tags: ["Python", "AWS", "Boto3", "Cost Optimization"],
            url: "https://github.com"
        }
    ],
    certifications: [
        {
            name: "Web Application Penetration Testing",
            credentialId: "C-2c43e6116-1d0c451"
        },
        {
            name: "AWS Certified Solutions Architect – Associate",
            credentialId: "XZGBNQ6C524E169B",
            validity: "Valid upto December 2025"
        },
        {
            name: "AZ-900: Azure Fundamentals",
            credentialId: "H994-0342"
        },
        {
            name: "Introduction To Cyber Security For Business",
            credentialId: "SHQ7RPSR9GTM"
        }
    ],
    skills: [
        {
            category: "Database Technologies",
            technologies: ["SQL", "NoSQL", "Amazon Aurora", "RDS", "DynamoDB", "SingleStore", "MySQL", "PostgreSQL"]
        },
        {
            category: "Cloud Platforms",
            technologies: ["AWS (EC2, RDS, S3, IAM, VPC)", "Microsoft Azure", "SingleStore Helios"]
        },
        {
            category: "Tools & Languages",
            technologies: ["Linux", "PowerShell", "Python", "SCCM", "CloudWatch", "Datadog", "SingleStore Toolbox", "Docker", "WireShark"]
        },
        {
            category: "Key Competencies",
            technologies: ["Infrastructure Support", "Incident Management", "Disaster Recovery", "Performance Monitoring", "ITIL Processes", "Technical Troubleshooting"]
        },
        {
            category: "Soft Skills",
            technologies: ["Cross-Functional Collaboration", "Technical Writing", "Customer Support"]
        }
    ],
    education: {
        degree: "BCA - Cloud Technology and Information Security",
        year: 2020,
        university: "Jain (Deemed-to-be University)",
        grade: "7.4/10"
    },
    socialLinks: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/shahidmoosa"
        },
        {
            name: "GitHub",
            url: "https://github.com"
        }
    ],
    languages: ["English", "Hindi"],
    hobbies: ["DJing & Music Production", "Fishing & Outdoor Adventures", "DIY Tech Projects"]
};
