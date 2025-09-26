import {
  nitk,
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

// react-icons
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
  SiAmazon,
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

// ✅ alias for AWS icon (react-icons has SiAmazon, not SiAmazonaws)
const SiAmazonaws = SiAmazon;

import { BiLogoVisualStudio } from "react-icons/bi";
import { FaHardHat, FaRust } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaGolang } from "react-icons/fa6";
import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

export const resumeLink =
  "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";
export const callToAction =
  "https://www.linkedin.com/in/jyotiraditya-tiwary-16jt/";

export const navLinks = [
  { id: "skills", title: "Skills & Experience" },
  { id: "education", title: "Education" },
  { id: "achievements", title: "Achievements" },
  { id: "projects", title: "Projects" },
  { id: "openSource", title: "Open Source" },
  { id: "extraCurricular", title: "Extra Curricular" },
  { id: "contactMe", title: "Contact Me" },
];

// ---------------- EDUCATION ----------------
export const educationList = [
  {
    id: "a-1",
    icon: icon,
    event: "CodeChef Starters 202 (Rated)",
    position: "Global Rank 558 · Div 3",
    content1: "Highest rating: 1499 (+145), provisional",
    content2: "Recent activity visible on profile; 4 rated contests participated",
    content3: "Daily Streak badge: 100/100 (profile)",
    article: "https://www.codechef.com/users/tiny_idea_05",
  },
  {
    id: "education-1",
    icon: nitk,
    title: "Birla Institute of Technology Mesra",
    degree: "Bachelor of Technology",
    duration: "November 2022 - May 2026",
    content1: "Major: Electronics and Communication Engineering",
    content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Polkadot Blockchain Academy",
    degree: "",
    duration: "May 2024 - June 2024",
    content1:
      "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  },
];

// ---------------- ACHIEVEMENTS ----------------
export const achievements = [
  {
    id: "a-1",
    icon: ethindia,
    event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 10 Overall Finalists/Winners, True Network's Winner",
    content2: "Polkadot's 1st Runner Up, Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article:
      "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    project: "https://devfolio.co/projects/khoj-3336",
    youtube:
      "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  {
    id: "a-2",
    icon: icon,
    event: "CodeChef Starters 202 (Rated)",
    position: "Global Rank 558 · Div 3",
    content1: "Highest rating: 1499 (+145), provisional",
    content2: "Recent activity visible on profile; 4 rated contests participated",
    content3: "Daily Streak badge: 100/100 (profile)",
    article: "https://www.codechef.com/users/tiny_idea_05",
  },
];

// ---------------- SKILLS ----------------
export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiPython, name: "Python" },
      { id: "pl-2", icon: SiCplusplus, name: "C++" },
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
      { id: "f-6", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { id: "d-1", icon: SiPostgresql, name: "PostgreSQL" },
      { id: "d-2", icon: SiMongodb, name: "MongoDB" },
      { id: "d-3", icon: SiSupabase, name: "Supabase" },
      { id: "d-4", icon: SiAmazonaws, name: "AWS (EC2, S3)" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { id: "t-1", icon: SiDocker, name: "Docker" },
      { id: "t-2", icon: SiGithubactions, name: "GitHub Actions" },
      { id: "t-3", icon: SiVercel, name: "Vercel" },
      { id: "t-4", icon: SiGit, name: "Git" },
      { id: "t-5", icon: AiFillGithub, name: "GitHub" },
      { id: "t-6", icon: BiLogoVisualStudio, name: "VS Code" },
    ],
  },
];

// ---------------- EXPERIENCES ----------------
export const experiences = [
  {
    organisation: "",
    logo: oracle,
    link: "",
    positions: [],
  },
  {
    organisation: "",
    logo: averlon,
    link: "",
    positions: [],
  },
  {
    organisation: "",
    logo: iris,
    link: "",
    positions: [],
  },
];

// ---------------- PROJECTS ----------------
// keep structure, temporarily point images to portfolio
export const projects = [
  {
    id: "project-1",
    title: "Deep Vision Image Classifier",
    github: "https://github.com/Vasper16/Deep_Vision_Image_Classifier",
    link: "",
    image: portfolio,
    content: "End-to-end image classification pipeline.",
    stack: [{ id: "p1-1", icon: SiPython, name: "Python" }],
  },
  {
    id: "project-2",
    title: "SmartConnect 6G",
    github: "https://github.com/Vasper16/SmartConnect-6G",
    link: "",
    image: portfolio,
    content: "SINR-aware Q-Learning framework.",
    stack: [{ id: "p2-1", icon: SiPython, name: "Python" }],
  },
  // ... repeat same adjustment for other projects
];

// ---------------- STATS ----------------
export const stats = [
  { id: "stats-1", title: "Organisations", value: "2+" },
  { id: "stats-2", title: "Issues Opened", value: "6+" },
  { id: "stats-3", title: "Pull Requests", value: "6+" },
];

// ---------------- EXTRA CURRICULAR ----------------
export const extraCurricular = [
  { id: 1, organisation: "", title: "", duration: "", content: [], logo: devfolio },
  { id: 2, organisation: "", title: "", duration: "", content: [], logo: gdsc },
  { id: 3, organisation: "", title: "", duration: "", content: [], logo: genesis },
  { id: 4, organisation: "", title: "", duration: "", content: [], logo: iris },
  { id: 5, organisation: "", title: "", duration: "", content: [], logo: ecell },
];

// ---------------- SOCIAL MEDIA ----------------
export const socialMedia = [
  { id: "social-media-1", icon: AiFillLinkedin, link: "https://www.linkedin.com/in/jyotiraditya-tiwary-16jt/" },
  { id: "social-media-2", icon: AiFillGithub, link: "https://github.com/Vasper16" },
  { id: "social-media-3", icon: AiFillMail, link: "mailto:tiwaryjyotiraditya365@gmail.com" },
  { id: "social-media-4", icon: AiOutlineTwitter, link: "https://x.com/Jyotir_1602" },
  { id: "social-media-5", icon: AiFillInstagram, link: "https://www.instagram.com/_jyotiraditya_1602/" },
];

// ---------------- ABOUT ----------------
export const aboutMe = {
  name: "Jyotiraditya Tiwary",
  githubUsername: "Vasper16",
  tagLine: "Final-year B.Tech ECE | AI/ML & Full-Stack | Placement Coordinator (BIT Mesra, 2025–26)",
  intro: "I build AI/ML systems and scalable web apps.",
};

export const itemsToFetch = 20;
export const includedRepos = ["publiclab/plots2", "zulip/zulip", "paritytech/polkadot-sdk"];

// ✅ placeholder export for blogPosts
export const blogPosts = [];