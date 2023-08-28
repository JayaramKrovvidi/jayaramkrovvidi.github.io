export interface WorkExperience {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}

export interface Project {
    title: string;
    technologies: string[];
    link?: string;
    description: string[];
}

export interface Certification {
    title: string;
    issuingOrganization: string;
    date: string;
}

export interface Skill {
    name: string;
    proficiency: string;
}

export interface Testimonial {
    name: string;
    role: string;
    comment: string;
}

export interface PortfolioItem {
    title: string;
    description: string[];
    category: string;
    technologies: string[];
    link?: string;
}

export interface BlogPost {
    title: string;
    date: string;
    content: string;
    link: string;
}

export interface SectionData<T> {
    title: string;
    data: T[]; // This will be an array of specific data items, like WorkExperience, Project, etc.
}

export interface ResumeData {
    about: AboutMe;
    education: Education[];
    sections: SectionData<any>[];
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    shortDescription: string;
    detailedDescription: string;
}

export interface AboutMe {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
}

export const workExperience: SectionData<WorkExperience> = {
    title: "Work Experience",
    data: [
        {
            position: "Senior Software Engineer",
            company: "Accolite Digital Inc.",
            location: "Bengaluru, India",
            startDate: "September 2020",
            endDate: "July 2022",
            description: [
                "Designed a generic Payments Integration engine in Flask for CoinSwitch, which increased code reusability score by 15%.",
                "Implemented a load-balancing logic to route payments dynamically across gateways to improve user responsiveness.",
                "Devised Streaming Downloader, a data source paginator for media download, which decreased user wait time by 30%.",
                "Worked as a senior on-call developer and resolved over 250 real-time customer issues with priority-based escalation.",
                "Responsible for maintaining code quality and conducting collaborative code review sessions for juniors and peers.",
                "Awarded Best Trainer for a comprehensive session on Hibernate, JPA, and Advanced DB Frameworks for new interns."
            ]
        },
        {
            position: "Software Engineer",
            company: "Accolite Digital Inc.",
            location: "Bengaluru, India",
            startDate: "July 2019",
            endDate: "August 2020",
            description: [
                "Developed a CRM Integration Tool that collects and interprets data from CRMs like Salesforce and MS Dynamics 365.",
                "Collaborated on designing an alerting push notification system for FedEx to cut down the wait time of their flight crew.",
                "Implemented this system's full-stack dashboard module, saving at least 20 daily manual report generation requests.",
                "Augmented the backend for a Crew Evaluation service with SQL views, caching & refresh logic, reducing DB hits by 50%.",
                "Designed a normalized DB schema for an Automated chatbot with configuration, interpolation, and validation modules."
            ],
        },
        {
            position: "Software Engineer Intern",
            company: "Accolite Digital Inc.",
            location: "Bengaluru, India",
            startDate: "January 2019",
            endDate: "June 2019",
            description: [
                "Completed the intensive two-month training program (Accolite University) to learn the software development life cycle.",
                "Secured Runner up in this training campaign while competing with over 70 interns across all other company locations.",
                "Implemented all frontend modules for the Pilot Info Tracker with a responsive UI using Angular Flex layout and SCSS."
            ],
        },
        {
            position: "Graduate Teaching Assistant",
            company: "Stony Brook University",
            location: "Stony Brook, NY, USA",
            startDate: "January 2023",
            endDate: "May 2023",
            description: [
                "Acted as a Teaching Assistant for CSE 354 (Natural Language Processing) under Prof. Niranjan Balasubramanian.",
                "Work includes proctoring, conducting office hours, grading, designing assignments, and maintaining lecture notes."
            ],
        }
    ]
};

export const projects: SectionData<Project> = {
    title: "Projects",
    data: [
        {
            title: "College Compass",
            technologies: ["Angular", "D3.js", "Flask"],
            link: "https://github.com/yourusername/college-compass",
            description: [
                "College Compass is a D3.js and Angular-powered visualization dashboard to explore and compare college admission data.",
                "This data is sourced and processed from the Integrated Post-secondary Education Data System (IPEDS) 's yearly release.",
                "Created reusable components for visual elements like graphs, plots, charts and provided individual interaction abilities.",
                "This project has the potential for future enhancements like ML integration and real-time updates and can become a full-scale product for various user groups like college applicants, counselors, consultants, and other academic researchers."
            ],
        },
        {
            title: "Language Agnostic News Summarizer (LANS)",
            technologies: ["NLP", "PyTorch"],
            link: "https://github.com/yourusername/lans",
            description: [
                "Built a generic translation and summarization tool for news articles to measure the title ineptness and any inherent bias.",
                "Used Meta's M-T5 and RoBERTa RNNs tuned on the CNN Daily News dataset for translation and summarization tasks.",
                "Measuring title correctness on French news articles with ROGUE-1 and ROGUE-L scores output an overall 72% accuracy."
            ],
        }
    ]
};

export const certifications: SectionData<Certification> = {
    title: "Certifications",
    data: [
        {
            title: "Data Structures and Algorithms Specialization",
            issuingOrganization: "Coursera",
            date: "March 2021",
        },
        {
            title: "Deep Learning Specialization",
            issuingOrganization: "Coursera",
            date: "In-Progress",
        }
    ]
};

export const resumeData: ResumeData = {
    about: {
        name: "Jayarama Das Krovvidi",
        location: "Stony Brook, NY, USA",
        phone: "+1 (631)-739-7772",
        email: "jayaram.krovvidi@outlook.com",
        linkedin: "https://www.linkedin.com/in/jayaram-krovvidi/",
        github: "https://github.com/JayaramKrovvidi",
    },
    education: [{
        degree: "Master of Science in Computer Science",
        institution: "Stony Brook University",
        location: "Stony Brook, NY, USA",
        startDate: "August 2022",
        endDate: "May 2024",
        imageUrl: "../../../assets/img/sbu-logo.png",
        shortDescription: "Ms in Computer Science at Stony Brook University",
        detailedDescription: "I am currently pursuing my Master's in Computer Science at Stony Brook University."
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Manipal Institute of Technology",
        location: "Manipal, Karnataka, India",
        startDate: "July 2015",
        endDate: "July 2019",
        imageUrl: "../../../assets/img/mit-logo-light.png",
        shortDescription: "B.Tech in Computer Science at Manipal Institute of Technology",
        detailedDescription: "I completed my Bachelor's in Computer Science at Manipal Institute of Technology."
    }],
    sections: [workExperience, projects, certifications],
};

const mitLogo = "https://jade-donut-27ebe5.netlify.app/mit-logo.png";