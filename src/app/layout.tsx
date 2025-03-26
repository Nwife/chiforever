import type { Metadata } from "next";

import "./globals.css";
import { cormorantInfant } from "./fonts";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Chi Forever",
  description: "Luxurious Wedding & Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantInfant.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
