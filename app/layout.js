import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScholarshipBanner from "@/components/ScholarshipBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ED LINE Edu Consultancy | Medical & Professional Admissions",
  description: "Start your Medical & Professional Career with expert guidance. Admissions open for Top Colleges in South India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col relative overflow-x-hidden`}>
        <div className="sticky top-0 z-[60] w-full flex flex-col">
          <ScholarshipBanner />
          <Navbar />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
