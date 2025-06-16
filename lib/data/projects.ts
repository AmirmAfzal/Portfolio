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
    title: "Holding Company Website",
    description:
      "A platform for group management and communication, allowing users to create and manage groups, share files, and communicate effectively.",
    image: "/images/projects/group100.jpg",
    tools: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Zustand",
      "NextAuth",
      "Vercel",
      "Cloudinary",
    ],
    company: "Group100",
    year: 2023,
  },
  {
    title: "Interactive Web-Based Story Game",
    description:
      "A browser-based adventure game with a dynamic story map, asset management system, and daily challenge logic. Built to offer immersive experiences and decision-based progressions.",
    image: "/images/projects/group100.jpg",
    tools: [
      "Next.js",
      "MongoDB",
      "Framer Motion",
      "Tailwind CSS",
      "Zustand",
      "NextAuth",
      "Socket.IO",
    ],
    company: "Personal Project",
    year: 2025,
  },
  {
    title: "Migration Advisory Platform",
    description:
      "A data-driven platform that helps users find the best migration path to Germany by analyzing their personal details and preferences.",
    image: "/images/projects/group100.jpg",
    tools: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "tRPC",
      "NextAuth",
      "Prisma",
      "Docker",
      "Cloudflare",
    ],
    company: "YourBrand (Instagram Migration Page)",
    year: 2024,
  },
  {
    title: "Beginner-Friendly React Bootcamp Portal",
    description:
      "A learning management system for a 30-session React bootcamp. Includes lesson tracking, interactive quizzes, and student progress dashboards.",
    image: "/images/projects/group100.jpg",
    tools: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "Redux Toolkit",
      "Chart.js",
      "Stripe",
      "ShadCN UI",
    ],
    company: "Academy Project",
    year: 2024,
  },
];

