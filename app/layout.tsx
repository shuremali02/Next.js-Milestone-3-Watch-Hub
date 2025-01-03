import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CartProviders from "./Context/CartContext";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Header/Header";
import TopSec from "@/Components/Top/Top";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopSec/>
          <Navbar/>
         
      < CartProviders>
        {children}
        </CartProviders>
        <Footer/>
      </body>
    </html>
  );
}
