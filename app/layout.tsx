import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, themeScript } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dina Shad | ExoCad Dental CAD Designer",
  description:
    "Precision dental prosthetic and surgical design with ExoCad. Crowns, bridges, implants, smile design, and surgical guides with fast turnaround.",
  keywords: [
    "ExoCad",
    "dental CAD",
    "crown design",
    "implant bar",
    "smile design",
    "surgical guide",
    "Dina Shad",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
