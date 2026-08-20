// ============================================================
// portfolioData.js — Centralized configuration for Vanshika Chauhan's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
//
// NOTE: Fields marked "ADD_" are placeholders — not in your resume.
// ============================================================

export const personalInfo = {
  name: "Vanshika Chauhan",
  firstName: "Vanshika",
  brandName: "Vanshika Chauhan",
  title: "Full Stack Developer & SDE",
  location: "Bhimtal, India",
  emails: {
    primary: "chauhanvanshika913@gmail.com",
    secondary: "vanshikachauhan31@gmail.com",
  },
  summary:
    "Not just doing tutorials — I ship. 250+ LeetCode problems solved, AI-powered UI built and deployed at a university incubator, and full-stack projects shipped end-to-end (auth systems, REST APIs, AI tooling). Looking for an SDE role where I can own problems from day one.",
  resumeUrl: "https://1drv.ms/b/c/ed2d1c96110e574d/IQCF5vm3xiNpSI3Y0jSFjMimAfL4E490MEBRcZYeRQVv9is?e=trmyTA", 
};

export const socialLinks = {
  github: "https://github.com/VanshikaChauhan4",
  linkedin: "https://www.linkedin.com/in/vanshika-chauhan-a1a04837a/",
  leetcode: "https://leetcode.com/u/VanshikaChauhan_/",

};

export const heroContent = {
  greeting: "Hi, I'm Vanshika",
  titleHighlight: "Software Development Engineer",
  subtitle:
    "Building AI-powered full-stack apps that actually ship — not just tutorials.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:chauhanvanshika913@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Vanshika,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Vanshika_Chauhan_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hey, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Vanshika Chauhan</span> — a full-stack dev who ships production-ready, AI-integrated features instead of just tutorials. 250+ LeetCode problems down, real projects live, always building.`,
  techStack: ["React.js", "Node.js/Express.js", "MongoDB", "LLM Integration"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, technical approach to build secure, AI-integrated full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Understanding requirements and technical constraints to lay a solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Designing RESTful endpoints, data models, and clean, secure architecture.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building full-stack applications — auth systems, REST APIs, and AI-powered features.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing, refining, and shipping end-to-end, production-style applications.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Languages & DSA",
      skills: [
        { name: "Java", level: 85 },
        { name: "C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "DSA (250+ LeetCode)", level: 85 },
      ],
    },
    {
      title: "Full-Stack",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js / Express.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "REST API Design", level: 88 },
        { name: "JWT Auth", level: 85 },
      ],
    },
    {
      title: "Tools & AI",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "LLM API Integration (OpenAI/similar)", level: 82 },
        { name: "Prompt Engineering", level: 82 },
        { name: "AI/ML Tool Integration", level: 80 },
      ],
    },
  ],
  // NOTE: skill % levels are estimates — adjust to your own self-assessment.
};

// Content Creation section — not part of your resume, kept empty so
// ContentCreator.jsx doesn't crash. Fill this in if you want to keep
// the section, or remove the <ContentCreator /> usage + this export
// if you don't.
export const contentCreation = {
  badge: "",
  heading: "",
  description: "",
  categories: [],
};

// Leadership Data
export const leadershipList = [
  {
    title: "Head of Technical Committee — IEEE Student Branch, GEHU",
    description:
      "Led the technical arm of the IEEE student chapter — planned and executed workshops and coding competitions attended by 100+ students.",
    role: "Head of Technical Committee",
    badge: "Leadership",
  },
  {
    title: "Campus Ambassador — Entrepreneurship Development Cell (eDC), IIT Delhi",
    description:
      "Coordinated inter-collegiate technical outreach programs, growing a network of innovation-focused student developers.",
    role: "Campus Ambassador",
    duration: "Dec 2025 (45 days)",
    badge: "Outreach",
  },
];

// Internships / Experience Data
export const internshipsList = [
  {
    organization: "Technology Business Incubator (TBI), Graphic Era University",
    role: "AI-Assisted Full Stack Web Development Intern",
    duration: "June 2026 - August 2026",
    skills: ["Full-Stack Development", "LLM Integration", "Context-Aware UI"],
    tech: ["React.js", "Node.js", "LLM APIs"],
    description:
      "Built and deployed AI-powered web features inside a live incubator environment, working directly on products used by early-stage startups. Integrated LLM APIs into the frontend to build context-aware UI components that adapted to user behavior instead of static pages.",
  },
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Solved 250+ DSA problems on LeetCode; breaks down complex engineering tasks into clean, logical pieces." },
  { name: "Ownership", icon: "🎯", desc: "Ships problems end-to-end — from auth systems to REST APIs to AI tooling — rather than isolated tutorials." },
  { name: "Leadership", icon: "👑", desc: "Led IEEE GEHU's technical committee, organizing workshops and coding competitions for 100+ students." },
  { name: "Communication", icon: "💬", desc: "Coordinated inter-collegiate outreach as Campus Ambassador for eDC, IIT Delhi." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to integrate new tools — LLM APIs, prompt engineering, AI/ML tooling — into production features." },
  { name: "Fast Learning", icon: "⚡", desc: "Built and shipped AI-integrated features inside a live incubator environment on real startup products." },
];

export const projects = [
  {
    id: "authnode",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AuthNode",
    description:
      "A secure, production-style user identity system with JWT-based protected routing, bcrypt password hashing, and end-to-end token validation across the client and server. Designed RESTful auth endpoints (signup, login, refresh, protected routes) with middleware-based access control and persistent sessions backed by MongoDB Atlas. Front end built with protected route guards and token-refresh handling so sessions stay secure without disrupting UX.",
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    links: {
      github: "https://github.com/VanshikaChauhan4/Authnode.git",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "ai-career-copilot",
    number: "02",
    badge: null,
    title: "AI Career Copilot",
    description:
      "An AI-powered career assistant that uses LLM APIs to generate personalized resume feedback, skill-gap analysis, and interview-prep guidance from user input. Prompt-driven REST endpoints connect a React front end to an LLM backend, returning structured, context-aware responses instead of static text. Focused on fast response handling, clean state management, and a UI that adapts to the user's profile in real time.",
    techTags: ["React.js", "Node.js/Python", "REST APIs", "LLM Integration"],
    links: {
      github: "https://github.com/VanshikaChauhan4/AI_career_copilot.git",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AI-Assisted Full Stack Web Development Internship",
      issuer: "TBI, Graphic Era University (ID: TBI-2026-PTQU-FZ45)",
      icon: "💻",
    },
    {
      name: "Technology Job Simulation",
      issuer: "Deloitte (via Forage)",
      icon: "💼",
    },
    {
      name: "Campus Ambassador Program",
      issuer: "eDC, IIT Delhi",
      icon: "🎓",
    },
    {
      name: "PHP and MySQL Training (81.94%)",
      issuer: "EduPyramids, SINE, IIT Bombay",
      icon: "⚙️",
    },
  ],
  // ⚠️ This is a local file path (c:\Users\...) — it won't work as a link
  // once the site is live, since visitors can't access your computer's
  // filesystem. Replace with a public link (e.g. a shared Google Drive
  // folder) if you want a working "view all certificates" button.
  viewAllUrl: "https://1drv.ms/f/c/ed2d1c96110e574d/IgA8ZYRRQ18lSoRUiv8ZM6giAV05Z9D966Zbn2zwTJKHh4U?e=AF69x8",
};

export const education = {
  degree: "UG (Undergraduate)",
  institution: "Graphic Era Hill University, Bhimtal",
  cgpa: "8.8",
  graduation: "2027",
  twelfth: "Class 12 – 75%",
  tenth: "Class 10 – 86%",
};

export const footerContent = {
  taglines: [
    "Software Development & Full-Stack Web",
    "React · Node.js · MongoDB",
    "AI-Integrated Applications",
  ],
  credential: "GPA 8.8/10",
  copyright: `© ${new Date().getFullYear()} Vanshika Chauhan | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};