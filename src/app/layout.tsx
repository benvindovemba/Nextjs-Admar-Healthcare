import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";


const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADMAR Healthcare",
  description: "Admar Homecare",
  icons: {
    icon: "/admar/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jost.className} suppressHydrationWarning
      > 
        {children}
      </body>
    </html>
  );
}
