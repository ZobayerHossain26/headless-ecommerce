import type { Metadata } from "next";
import "../assets/globals.css";
import TopBar from "@/components/sections/TopBar";
import Header from "@/components/sections/Header";


export const metadata: Metadata = {
  title: "peeters",
  description: "Build By Zobayer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
