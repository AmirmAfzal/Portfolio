export interface SkillInterface {
  name: string;
  tools: string[];
}
export const skills: SkillInterface[] = [
  {
    name: "Frontend Development",
    tools: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Redux",
      "MUI",
      "Radix UI",
      "DaisyUI",
      "Shadcn",
      "React Hook Form",
      "Zustand",
      "React Query",
      "Axios",
    ],
  },
  {
    name: "Backend Development",
    tools: [
      "Node.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "Prisma ORM",
      "Mongoose",
      "REST API",
      "Zod",
      "JWT",
      "Bcrypt",
      "Passport.js",
    ],
  },
  {
    name: "Fullstack & DevOps",
    tools: [
      "Git & GitHub",
      "Vercel",
      "Docker",
      "CI/CD",
      "Nodemailer",
      "Stripe API",
      "Cloudinary",
      "Firebase",
    ],
  },
  {
    name: "UI/UX & Design Tools",
    tools: [
      "Figma",
      "Responsive Design",
      "Component-based Architecture",
      "Accessibility (a11y)",
    ],
  },
];

