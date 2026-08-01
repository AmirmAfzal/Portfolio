export interface TestimonialInterface {
  quote: string;
  name: string;
  role: string;
  company: string;
}

// Replace these placeholder entries with real client testimonials before
// going live. Named quotes with LinkedIn links convert far better than
// generic praise.
export const testimonials: TestimonialInterface[] = [
  {
    quote:
      "Amirreza delivered a fast, polished web app ahead of schedule. Communication was smooth and the result exceeded our expectations. We'd absolutely work with him again.",
    name: "Client Name",
    role: "Product Manager",
    company: "Example Company",
  },
  {
    quote:
      "A rare full-stack developer who cares about the details — clean code, great design sense, and real problem-solving. Highly recommended.",
    name: "Client Name",
    role: "Founder",
    company: "Example Studio",
  },
  {
    quote:
      "He turned our Figma design into a seamless, high-performance website. Our clients were impressed, and it drove real engagement.",
    name: "Client Name",
    role: "Creative Director",
    company: "Example Agency",
  },
];
