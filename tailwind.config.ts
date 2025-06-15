import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import animate from "tailwindcss-animate";

// Define DaisyUI theme extension types
type DaisyuiThemeExtend = {
  borderRadius: {
    badge: string;
    btn: string;
    box: string;
  };
  colors: {
    "base-100": string;
    "base-200": string;
    "base-300": string;
    "base-content": string;
    primary: string;
    "primary-content": string;
    secondary: string;
    "secondary-content": string;
    accent: string;
    "accent-content": string;
    neutral: string;
    "neutral-content": string;
    info: string;
    "info-content": string;
    success: string;
    "success-content": string;
    warning: string;
    "warning-content": string;
    error: string;
    "error-content": string;
  };
};

// Extract DaisyUI theme extension
const daisyuiThemeExtend = daisyui.config?.theme?.extend as DaisyuiThemeExtend;

// Define ShadCN theme extension
const shadcnThemeExtend = {
  borderRadius: {
    lg: daisyuiThemeExtend?.borderRadius?.badge ?? "0.5rem",
    md: daisyuiThemeExtend?.borderRadius?.btn ?? "0.25rem",
    sm: daisyuiThemeExtend?.borderRadius?.box ?? "0.125rem",
  },
  colors: {
    background: daisyuiThemeExtend?.colors?.["base-100"] ?? "#081B28",
    foreground: daisyuiThemeExtend?.colors?.["base-content"] ?? "#FFFFFF",
    card: {
      DEFAULT: daisyuiThemeExtend?.colors?.["base-100"] ?? "#081B28",
      foreground: daisyuiThemeExtend?.colors?.["base-content"] ?? "#FFFFFF",
    },
    popover: {
      DEFAULT: daisyuiThemeExtend?.colors?.["base-100"] ?? "#081B28",
      foreground: daisyuiThemeExtend?.colors?.["base-content"] ?? "#FFFFFF",
    },
    primary: {
      DEFAULT: daisyuiThemeExtend?.colors?.primary ?? "#C6FCA6",
      foreground: daisyuiThemeExtend?.colors?.["primary-content"] ?? "#000000",
    },
    secondary: {
      DEFAULT: daisyuiThemeExtend?.colors?.secondary ?? "#A7FCEE",
      foreground:
        daisyuiThemeExtend?.colors?.["secondary-content"] ?? "#000000",
    },
    muted: {
      DEFAULT: daisyuiThemeExtend?.colors?.["base-300"] ?? "#1c2f3d",
      foreground: daisyuiThemeExtend?.colors?.["base-content"] ?? "#FFFFFF",
    },
    accent: {
      DEFAULT: daisyuiThemeExtend?.colors?.accent ?? "#A7FCEE",
      foreground: daisyuiThemeExtend?.colors?.["accent-content"] ?? "#000000",
    },
    destructive: {
      DEFAULT: daisyuiThemeExtend?.colors?.error ?? "#ef4444",
      foreground: daisyuiThemeExtend?.colors?.["error-content"] ?? "#FFFFFF",
    },
    border: daisyuiThemeExtend?.colors?.["base-300"] ?? "#1c2f3d",
    input: daisyuiThemeExtend?.colors?.["base-300"] ?? "#1c2f3d",
    ring: daisyuiThemeExtend?.colors?.primary ?? "#C6FCA6",
    chart: {
      "1": "hsl(var(--chart-1))",
      "2": "hsl(var(--chart-2))",
      "3": "hsl(var(--chart-3))",
      "4": "hsl(var(--chart-4))",
      "5": "hsl(var(--chart-5))",
    },
  },
};

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      ...shadcnThemeExtend,
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
  
} satisfies Config;
