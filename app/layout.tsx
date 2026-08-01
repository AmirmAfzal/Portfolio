import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar/Navbar";
import AuthProvider from "./auth/AuthProvider";
import Footer from "@/components/ui/Footer";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const SITE_URL = "https://portfolio-five-psi-75.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Amirreza Mohammadi Afzal — Next.js & React Full-Stack Developer",
  description:
    "Portfolio of Amirreza Mohammadi Afzal, a full-stack developer specializing in Next.js, React, Nest.js, and Node.js. I build high-performance, user-focused web applications for startups and SaaS. Explore my projects and get in touch.",
  keywords: [
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Nest.js",
    "Node.js",
    "web developer portfolio",
    "TypeScript",
  ],
  authors: [{ name: "Amirreza Mohammadi Afzal" }],
  creator: "Amirreza Mohammadi Afzal",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Amirreza Mohammadi Afzal",
    title: "Amirreza Mohammadi Afzal — Next.js & React Full-Stack Developer",
    description:
      "I build high-performance, user-focused web applications for startups and SaaS. Explore my projects and get in touch.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Amirreza Mohammadi Afzal — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirreza Mohammadi Afzal — Next.js & React Full-Stack Developer",
    description:
      "I build high-performance, user-focused web applications for startups and SaaS.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#081B28",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-base-100 ${poppins.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Amirreza Mohammadi Afzal",
                  url: SITE_URL,
                  jobTitle: "Full-Stack Developer",
                  knowsAbout: [
                    "Next.js",
                    "React",
                    "NestJS",
                    "Node.js",
                    "TypeScript",
                    "MongoDB",
                    "Tailwind CSS",
                  ],
                  sameAs: [
                    "https://github.com/AmirmAfzal",
                    "https://www.linkedin.com/in/amirreza-mohammadi-afzal-295205366/",
                    "https://leetcode.com/u/amirmAfzal/",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Amirreza Mohammadi Afzal Portfolio",
                  url: SITE_URL,
                },
              ],
            }),
          }}
        />
        <Preloader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <AuthProvider>
              <Navbar />
              <main className="no-scrollbar min-h-screen">{children}</main>
              <Footer />
            </AuthProvider>
          </div>
        </div>
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
