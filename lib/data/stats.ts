export interface StatInterface {
  value: number;
  suffix: string;
  label: string;
}

// Update these with your real numbers before going live.
export const stats: StatInterface[] = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Technologies Mastered" },
];
