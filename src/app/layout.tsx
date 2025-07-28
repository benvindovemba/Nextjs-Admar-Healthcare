import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import BackToBannerButton from "@/components/ui/BackToBannerButton";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADMAR Healthcare",
  description: "Admar Homecare Professional - Cuidados e bem-estar para terceira idade",
  icons: {
    icon: "/admar/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${jost.className} overflow-x-hidden`} suppressHydrationWarning>
        {children}
        <BackToBannerButton />
      </body>
    </html>
  );
}
