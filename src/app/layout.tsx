import type { Metadata } from "next";
import "../assets/globals.css";
import TopBar from "@/components/sections/TopBar";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CartProvider } from "@/context/CartContext";


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
        <CartProvider>
          <TopBar />
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
