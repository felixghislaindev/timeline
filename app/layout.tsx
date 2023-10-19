import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Timeline is a versatile timeline management app that empowers users to create, customize, and organize their timelines with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-auto`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
