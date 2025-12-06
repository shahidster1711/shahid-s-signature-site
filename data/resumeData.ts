
import { ResumeData } from '../types.ts';

export const resumeData: ResumeData = {
    main: {
        name: "Shahid Moosa",
        title: "Database Cloud Support Engineer",
        phone: "+91 8217041965",
        email: "connect2shahidmoosa@gmail.com",
        location: "Bengaluru, India",
        experience: "5 Years 4 Months",
        uptime: "99.9%",
        yearsExperience: "5+",
        tier: "Tier-2/3",
    },
    profileSummary: "Cloud-first database support professional with domain depth in distributed databases, AWS ecosystem, SQL/NoSQL engines, and Linux-driven infrastructure troubleshooting. Strong operational rigor in incident management, RCA, performance optimization, and cross-team alignment. Proven execution across enterprise workloads with SLA governance and structured problem-resolution. Solid foundation in cloud architecture, HA patterns, DR strategies, and service diagnostics.",
    workExperience: [
        {
            role: "Database Cloud Support Engineer",
            company: "SingleStore DB",
            duration: "01/2024 - Present",
            description: [
                "Delivered Tier-2/3 support for distributed columnar clusters across cloud-native and hybrid deployments.",
                "Diagnosed node-level failures, replication inconsistencies, ingest pipeline bottlenecks, and storage/network anomalies.",
                "Led structured incident response under ITIL, ensuring minimal downtime for enterprise clients.",
                "Worked with engineering teams to optimize diagnostics and reduce resolution cycles.",
                "Created technical documentation on cluster tuning, schema optimization, monitoring, and deployment architecture.",
                "Conducted internal enablement sessions on distributed systems fundamentals."
            ]
        },
        {
            role: "Cloud Support Associate",
            company: "Amazon Web Services (AWS)",
            duration: "07/2022 - 01/2024",
            description: [
                "Troubleshot Aurora/RDS PostgreSQL, DMS replication, failover, connection issues, engine tuning, and parameter misconfigurations.",
                "Performed deep-dive analysis on latency, replication lag, cross-region sync, backup/restore workflows.",
                "Collaborated with AWS service teams to resolve systemic backend issues.",
                "Authored internal KBA content to strengthen onboarding and reduce repeat escalations.",
                "Delivered support through chat, email, and phone channels with strong CSAT achievement."
            ]
        },
        {
            role: "Senior System Associate",
            company: "Infosys",
            duration: "04/2020 - 07/2022",
            description: [
                "Executed service-request driven medical coding operations with accuracy and compliance.",
                "Administered SCCM and Windows systems for 100+ users ensuring operational continuity.",
                "Completed structured training across Linux, PowerShell, Python, networking, and Windows administration.",
                "Ensured secure document control compliance aligned with EDF standards."
            ]
        }
    ],
    projects: [
        {
            name: "Home Lab Server & Network",
            description: "Built and maintain a home lab environment using Proxmox for virtualization. Deployed various services in Docker containers, including Pi-hole for network-wide ad blocking and a media server. This project enhances my skills in networking, Linux administration, and containerization.",
            tags: ["Docker", "Proxmox", "Linux", "Networking", "Virtualization"],
        },
        {
            name: "Cloud Cost Optimization Scripts",
            description: "Developed Python scripts leveraging AWS Boto3 library to analyze EC2 and RDS usage patterns. The scripts identify underutilized resources and generate reports with recommendations for downsizing or termination, driving cost savings.",
            tags: ["Python", "AWS", "Boto3", "Cost Optimization"],
            url: "https://github.com/shahidmoosa"
        }
    ],
    certifications: [
        {
            name: "AWS Certified Solutions Architect – Associate",
            credentialId: "XZGBNQ6C524E169B",
            validity: "Valid till December 2025"
        },
        {
            name: "AZ-900: Microsoft Azure Fundamentals",
            credentialId: "H994-0342"
        },
        {
            name: "Web Application Penetration Testing",
            credentialId: "C-2c43e6116-1d0c451"
        },
        {
            name: "Introduction To Cyber Security For Business",
            credentialId: "SHQ7RPSR9GTM"
        }
    ],
    skills: [
        {
            category: "Database Technologies",
            technologies: ["SQL", "NoSQL", "Amazon Aurora", "Amazon RDS", "DynamoDB", "SingleStore (Distributed Engine)", "MySQL", "PostgreSQL"]
        },
        {
            category: "Cloud Platforms",
            technologies: ["AWS (EC2, RDS, S3, IAM, VPC)", "Microsoft Azure", "SingleStore Helios"]
        },
        {
            category: "Tools & Languages",
            technologies: ["Linux", "Python", "PowerShell", "SCCM", "Docker", "Wireshark", "CloudWatch", "Datadog", "SingleStore Toolbox"]
        },
        {
            category: "Key Competencies",
            technologies: ["Incident Management (ITIL)", "Root Cause Analysis", "Disaster Recovery", "Query Profiling", "Performance Optimization", "Distributed Computing"]
        },
        {
            category: "Cloud Networking",
            technologies: ["TCP/IP", "Routing", "VPN", "Peering", "Load Balancing"]
        },
        {
            category: "Soft Skills",
            technologies: ["Technical Documentation", "Cross-Functional Collaboration", "Customer Success Alignment"]
        }
    ],
    education: {
        degree: "BCA — Cloud Technology & Information Security",
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
            url: "https://github.com/shahidmoosa"
        }
    ],
    languages: ["English", "Hindi"],
    hobbies: ["DJing & Music Production", "Fishing & Outdoor Adventures", "DIY Tech Projects"]
};
