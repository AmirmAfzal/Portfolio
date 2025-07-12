export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  tools : string[];
  company: string;
  year: number;
}
export const projects: ProjectInterface[] = [
  
  {
    title: "Ultimate Productivity Suite",
    description:
      "A comprehensive browser-based productivity platform featuring a robust to-do list, integrated workout tracker, advanced note-taking capabilities, and powerful analytics. Designed to help users manage tasks, track fitness progress, organize notes, and gain actionable insights—all in one seamless experience. Built for performance, scalability, and user engagement.",
    image: "/images/projects/todoapp.png",
    tools: [
      "Next.js",
      "Mongoose",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "NextAuth",
      "Chart.js",
      "Socket.IO",
      "TypeScript",
      "Vercel",
    ],
    company: "Todo Rda",
    year: 2024,
  },
  {
    title: "Digital Advertising Studio Website",
    description:
      "A modern, visually engaging website crafted for a digital advertising studio, designed and developed directly from a Figma prototype. The site showcases the studio’s portfolio, services, and creative process, with a focus on high performance, responsive design, and seamless user experience. Built to highlight the brand’s unique identity and drive client engagement.",
    image: "/images/projects/digitalstudio.png",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "NextAuth",
      "Vercel",
      "Cloudinary",
      "Figma",
    ],
    company: "Mixord",
    year: 2025,
  },
  {
    title: "Holding Company Website",
    description:
      "A modern platform for holding companies to manage groups, share files, and communicate efficiently. Features include a centralized dashboard, secure document management, and an interactive 3D earth model (Three.js) to showcase all companies. Built for scalability, security, and seamless collaboration.",
    image: "/images/projects/group100.jpg",
    tools: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Zustand",
      "NextAuth",
      "Vercel",
      "Cloudinary",
      "Three.js",
      "TypeScript",
      "Framer Motion",
    ],
    company: "Group100",
    year: 2023,
  },

];

