import localFont from "next/font/local";
import Footer from "../components/ui/Footer";
import "./globals.css";
import AuthProvider from "./auth/AuthProvider";
import { Poppins } from "next/font/google";
import Navbar from "@/components/ui/Navbar/Navbar";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body className={`bg-base-100 ${poppins.variable}`}>
        <AuthProvider>
          <Navbar />
          <main className="no-scrollbar min-h-screen overflow-scroll">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
