import {
  cp,
  bit,
  classx,
  classxii,
  nitk,
  iitp,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiTensorflow,
  SiKeras,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiAmazon, // valid AWS glyph
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiStripe,
  SiStreamlit,
  SiGooglecloud,
  SiOpencv,
  SiGit,
} from "react-icons/si";

// alias for templates that referenced SiAmazonaws
const SiAmazonaws = SiAmazon;

import { BiLogoVisualStudio } from "react-icons/bi";
import { FaHardHat, FaRust } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaGolang } from "react-icons/fa6";
import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

export const resumeLink =
  "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";
export const repoLink = "https://github.com/Vasper16";
export const callToAction =
  "https://www.linkedin.com/in/jyotiraditya-tiwary-16jt/";

// Nav: removed Open Source + Extra Curricular as requested
export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "achievements", title: "Achievements" },
  { id: "projects", title: "Projects" },
  { id: "contactMe", title: "Contact Me" },
];

// ---------------- EDUCATION ----------------
// Only BIT Mesra + School
export const educationList = [
  {
    id: "education-1",
    icon: bit,
    title: "Birla Institute of Technology Mesra",
    degree: "Bachelor of Technology",
    duration: "November 2022 - May 2026",
    content1: "Major: Electronics and Communication Engineering",
    content2: "CGPA: 7.42/10 (till 6th semester)",
  },
  {
    id: "education-2",
    icon: classxii, // generic icon for school
    title: "Holy Mission Secondary School",
    degree: "Intermediate (Class XI–XII)",
    duration: "May 2019 - June 2021",
    content1: "Science Stream",
    content2: "Percentage: 93.2%",
  },
  {
    id: "education-2",
    icon: classx, // generic icon for school
    title: "St. Karen's High School",
    degree: "Matriculation (Class X)",
    duration: "May 2019",
    content1: "Percentage: 92%",
  },
];

// ---------------- ACHIEVEMENTS ----------------
// Keep only CodeChef; update text if you want later
export const achievements = [
  {
    id: "a-cc",
    icon: cp, // replace with CodeChef logo if you add it to assets
    event: "CodeChef (Rated)",
    position: "Global Rank 261 · Div 3",
    content1: "Highest rating: 1615 (3-star)",
    content2: "Active participant with multiple rated contests",
    content3: "Daily Streak badge: 100/100",
    article: "https://www.codechef.com/users/tiny_idea_05",
  },
];

// ---------------- SKILLS ----------------
export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiCplusplus, name: "C++" },
      { id: "pl-2", icon: SiPython, name: "Python" },
      { id: "pl-3", icon: SiJavascript, name: "JavaScript (ES6+)" },
      { id: "pl-4", icon: SiMysql, name: "SQL" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { id: "f-1", icon: SiReact, name: "React" },
      { id: "f-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "f-3", icon: SiExpress, name: "Express.js" },
      { id: "f-4", icon: SiTensorflow, name: "TensorFlow" },
      { id: "f-5", icon: SiKeras, name: "Keras" },
      { id: "f-6", icon: SiTailwindcss, name: "REST APIs" },
    ],
  },
  {
    title: "Databases & Cloud Platforms",
    items: [
      { id: "d-1", icon: SiMongodb, name: "MongoDB" },
      { id: "d-2", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "d-3", icon: SiSupabase, name: "Supabase" },
      { id: "d-4", icon: SiAmazon, name: "AWS (EC2, S3)" },
      { id: "d-5", icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { id: "t-1", icon: SiGit, name: "Git" },
      { id: "t-2", icon: SiGithubactions, name: "GitHub Actions (CI/CD)" },
      { id: "t-3", icon: SiDocker, name: "Docker" },
      { id: "t-4", icon: AiFillGithub, name: "GitHub" },
      { id: "t-5", icon: BiLogoVisualStudio, name: "VS Code" },
    ],
  },
  {
    title: "Core Computer Science",
    items: [
      { id: "cs-1", icon: SiJavascript, name: "Data Structures & Algorithms" },
      { id: "cs-2", icon: SiJavascript, name: "Object-Oriented Programming" },
      { id: "cs-3", icon: SiMysql, name: "Database Management Systems" },
      { id: "cs-4", icon: SiReact, name: "Operating Systems" },
      { id: "cs-5", icon: SiNodedotjs, name: "Computer Networks" },
      { id: "cs-6", icon: SiExpress, name: "System Design (LLD)" },
    ],
  },
];

// ---------------- EXPERIENCES ----------------
export const experiences = [
  {
    organisation: "Indian Institute of Technology Patna",
    logo: iitp, // make sure it's exported in assets/index.js
    link: "https://www.iitp.ac.in/",
    positions: [
      {
        title: "Research Intern",
        duration: "May 2025 – July 2025",
        content: [
          "Worked on deep learning and signal processing projects with applications in GenAI and wireless communication.",
        ],
      },
    ],
  },
];

// ---------------- PROJECTS ----------------
// Using `portfolio` as a safe placeholder image.
// Swap to real assets later by importing them from ../assets and replacing `image`.
export const projects = [
  {
    id: "project-1",
    title: "Deep Vision Image Classifier",
    github: "https://github.com/Vasper16/Deep_Vision_Image_Classifier",
    link: "",
    image: portfolio,
    content:
      "End-to-end image classification pipeline with augmentation, transfer learning and exportable models.",
    stack: [
      { id: "p1-1", icon: SiPython, name: "Python" },
      { id: "p1-2", icon: SiTensorflow, name: "TensorFlow" },
      { id: "p1-3", icon: SiKeras, name: "Keras" },
      { id: "p1-4", icon: SiOpencv, name: "OpenCV" },
    ],
  },
  {
    id: "project-2",
    title: "SmartConnect 6G",
    github: "https://github.com/Vasper16/SmartConnect-6G",
    link: "",
    image: portfolio,
    content:
      "SINR-aware Q-Learning that optimizes Random Access for mMTC, reducing collisions and access delay.",
    stack: [{ id: "p2-1", icon: SiPython, name: "Python" }],
  },
  {
    id: "project-3",
    title: "AI YouTube Automation",
    github: "https://github.com/Vasper16/ai-youtube-automation",
    link: "",
    image: portfolio,
    content:
      "No/low-code pipeline that scripts, voices, composes and uploads videos using n8n, JSON2Video, TTS and Sheets.",
    stack: [
      { id: "p3-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "p3-2", icon: SiJavascript, name: "JavaScript" },
      { id: "p3-3", icon: SiGooglecloud, name: "Google APIs" },
    ],
  },
  {
    id: "project-4",
    title: "Learnify LMS (SaaS)",
    github: "https://github.com/Vasper16/lms-saas-app",
    link: "",
    image: portfolio,
    content:
      "Full-stack LMS with auth, payments, course management and AI voice agent integration.",
    stack: [
      { id: "p4-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "p4-2", icon: SiSupabase, name: "Supabase" },
      { id: "p4-3", icon: SiStripe, name: "Stripe" },
      { id: "p4-4", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "project-5",
    title: "BlogForgeAI",
    github: "https://github.com/Vasper16/BlogForgeAI",
    link: "",
    image: portfolio,
    content:
      "AI-assisted blog platform with Markdown, tags, admin dashboard and LLM-powered generation.",
    stack: [
      { id: "p5-1", icon: SiReact, name: "React" },
      { id: "p5-2", icon: SiExpress, name: "Express" },
      { id: "p5-3", icon: SiMongodb, name: "MongoDB" },
      { id: "p5-4", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "project-6",
    title: "LLM ChatStream",
    github: "https://github.com/Vasper16/LLM-ChatStream",
    link: "",
    image: portfolio,
    content:
      "Streamlit chatbot integrating Gemini API with PDF export and theme switching for rapid experiments.",
    stack: [
      { id: "p6-1", icon: SiPython, name: "Python" },
      { id: "p6-2", icon: SiStreamlit, name: "Streamlit" },
      { id: "p6-3", icon: SiGooglecloud, name: "Gemini API" },
    ],
  },
];

// ---------------- STATS ----------------
export const stats = [
  { id: "stats-1", title: "Organisations", value: "2+" },
  { id: "stats-2", title: "Issues Opened", value: "6+" },
  { id: "stats-3", title: "Pull Requests", value: "6+" },
];

// ---------------- EXTRA CURRICULAR ----------------
// Removed from nav; keep empty array so component doesn't crash if imported.
// ---------------- EXTRA CURRICULAR ----------------
// ---------------- EXTRA CURRICULAR ----------------
// ---------------- EXTRA CURRICULAR ----------------
export const extraCurricular = [
  {
    id: "ec-1",
    organisation: "Birla Institute of Technology, Mesra",
    title: "Placement Coordinator (2025-26)",
    duration: "Feb 2025 - Present",
    content: [], // keep it as empty array
    logo: bit,   // import bit logo in ../assets/index.js
  },
  {
    id: "ec-2",
    organisation: "Athletics & Sports, BIT Mesra",
    title: "Athletics Contingent Captain",
    duration: "2023 - 2025",
    content: [], // keep it as empty array
    logo: bit,   // reusing BIT logo unless you add a sports/athletics icon
  },
];

// ---------------- SOCIAL MEDIA ----------------
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/jyotiraditya-tiwary-16jt/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Vasper16",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:tiwaryjyotiraditya365@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/Jyotir_1602",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/_jyotiraditya_1602/",
  },
];

// ---------------- ABOUT ----------------
export const aboutMe = {
  name: "Jyotiraditya Tiwary",
  githubUsername: "Vasper16",
  tagLine: "B.Tech ECE (Final Year) | AI/ML & Full-Stack Developer | CodeChef 3★ (1615, Div 2)",
  intro: "Aspiring Software Developer skilled in C++ (DSA), full-stack web development, and AI/ML. Experienced in building scalable applications, competitive programming, and academic research with a strong foundation in computer science fundamentals.",
};

// Open Source removed; keep inert exports so code doesn’t crash
export const itemsToFetch = 0;
export const includedRepos = [];

// placeholder for blog posts
export const blogPosts = [];
