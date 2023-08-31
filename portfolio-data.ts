export interface WorkExperience {
    position: string;
    company: string;
    companyLogo: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    summary: string;
}

export interface Project {
    title: string;
    technologies: string[];
    startDate: string;
    endDate: string;
    link?: string;
    summary: string;
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
            position: "Graduate Teaching Assistant",
            company: "Stony Brook University",
            companyLogo: "../../../assets/img/sbu-logo.png",
            location: "Stony Brook, NY, USA",
            startDate: "January 2023",
            endDate: "May 2023",
            description: [
                "Acted as a Teaching Assistant for CSE 354 (Natural Language Processing) under Prof. Niranjan Balasubramanian.",
                "Work includes proctoring, conducting office hours, grading, designing assignments, and maintaining lecture notes."
            ],
            summary: "As a Graduate Teaching Assistant at Stony Brook University, I immersed myself in education and academic support, assisting Professor Niranjan Balasubramanian in the course CSE 354 (Natural Language Processing). I fostered a structured learning environment by proctoring exams, conducting office hours for personalized guidance, and designing engaging assignments. I facilitated effective learning, leveraging my technical expertise to contribute to the growth and success of aspiring computer science students."
        },
        {
            position: "Senior Software Engineer",
            company: "Accolite Digital Inc.",
            companyLogo: "../../../assets/img/accolite-logo.png",
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
            ],
            summary: "As a Senior Software Developer at Accolite, I led the design and development of a generic Payments Integration engine in Flask for CoinSwitch, significantly improving code reusability. I implemented load-balancing logic to enhance user responsiveness by dynamically routing payments across gateways. Additionally, I devised the Streaming Downloader, a data source paginator, reducing user wait time by 30%. With a strong focus on maintaining code quality, I conducted collaborative code review sessions and resolved over 250 real-time customer issues with priority-based escalation. Throughout my tenure, I demonstrated expertise in software architecture, problem-solving, and mentoring junior developers."
        },
        {
            position: "Software Engineer",
            company: "Accolite Digital Inc.",
            companyLogo: "../../../assets/img/accolite-logo.png",
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
            summary: "As a Software Developer at Accolite, I played a crucial role in developing a CRM Integration Tool that effectively collected and interpreted data from CRMs such as Salesforce and MS Dynamics 365. Collaborating with a cross-functional team, I contributed to the design and implementation of an alerting push notification system for FedEx, reducing the wait time for their flight crew. I also implemented the full-stack dashboard module for this system, saving valuable time by automating daily report generation. Additionally, I enhanced the backend of a Crew Evaluation service with SQL views, caching, and refresh logic, resulting in a 50% reduction in database hits. My work showcased proficiency in software development, collaboration, and database optimization."
        },
        {
            position: "Software Engineer Intern",
            company: "Accolite Digital Inc.",
            companyLogo: "../../../assets/img/accolite-logo.png",
            location: "Bengaluru, India",
            startDate: "January 2019",
            endDate: "June 2019",
            description: [
                "Completed the intensive two-month training program (Accolite University) to learn the software development life cycle.",
                "Secured Runner up in this training campaign while competing with over 70 interns across all other company locations.",
                "Implemented all frontend modules for the Pilot Info Tracker with a responsive UI using Angular Flex layout and SCSS."
            ],
            summary: "During my internship at Accolite, I completed an intensive two-month training program called Accolite University, where I gained hands-on experience in the software development life cycle. As part of the program, I developed the front-end modules for the Pilot Info Tracker, a responsive web application using Angular Flex layout and SCSS. I demonstrated my ability to adapt to new technologies while securing the runner-up position among over 70 interns. This experience allowed me to contribute to developing real-world projects and acquire valuable front-end development and user interface design skills."
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
            startDate: "January 2023",
            endDate: "May 2023",
            summary: "College Compass is a dynamic and user-friendly platform designed to guide students through the complex landscape of higher education. With a seamless integration of data visualization and insightful analytics, it empowers students to make informed decisions about colleges and universities. From interactive maps showcasing campus locations to comprehensive charts depicting tuition trends and application statistics, College Compass provides a holistic view of educational institutions. This tool equips students with the information they need to navigate their academic journey with confidence, enabling them to select institutions that align with their aspirations and goals.",
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
            startDate: "August 2022",
            endDate: "December 2022",
            summary: "The Language Agnostic News Summarizer (LANS) is an innovative text summarization tool that employs advanced techniques in both extractive and abstractive summarization to distill the essence of news articles and their headlines. LANS addresses the complexities of human language by comprehensively analyzing the input text and generating concise summaries that accurately capture the contextual significance. By leveraging semantic analysis and context-aware modeling, LANS aims to bridge the gap between human-like comprehension and automated summarization, offering a powerful solution for efficiently extracting key information from news articles in a variety of languages.",
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
        detailedDescription: "In my pursuit of higher knowledge, I embarked on a transformative journey at Stony Brook University for my Master of Science in Computer Science. This academic endeavor has propelled my understanding of advanced concepts, honed my problem-solving skills, and expanded my technical expertise. With a current CGPA of 3.95/4.0, I have been able to dive deep into subjects like data visualization, natural language processing, and computational biology, further enriching my understanding of the diverse facets of computer science. The graduate program at Stony Brook has not only equipped me with cutting-edge knowledge but has also nurtured my ability to collaborate and contribute effectively in a team-oriented environment. This experience has been instrumental in shaping my identity as a dynamic and committed software developer, poised to make significant contributions to the industry."
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Manipal Institute of Technology",
        location: "Manipal, Karnataka, India",
        startDate: "July 2015",
        endDate: "July 2019",
        imageUrl: "../../../assets/img/mit-logo-light.png",
        shortDescription: "B.Tech in Computer Science at Manipal Institute of Technology",
        detailedDescription: "During my undergraduate journey at Manipal Institute of Technology (MIT), I had the privilege to immerse myself in the world of Computer Science. With a keen curiosity for intelligent systems, I pursued a Bachelor of Technology degree, specializing in Computer Science. Throughout my studies, I cultivated a solid foundation in a spectrum of subjects, from data structures and algorithms to artificial intelligence and machine learning. My CGPA of 8.72/10 reflects my dedication to academic excellence and my passion for mastering the intricacies of the field. Collaborative projects, engaging coursework, and interactive learning experiences at MIT have significantly shaped my understanding and love for technology, paving the way for my continued growth and accomplishments in the software development arena."
    }],
    sections: [workExperience, projects, certifications],
};

const mitLogo = "https://jade-donut-27ebe5.netlify.app/mit-logo.png";