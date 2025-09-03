import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/v3/Navbar";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/v3/Footer";

const f = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunnydale Research Club",
  description: "This is the home page of the Sunnydale Research Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${f.className} antialiased`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
