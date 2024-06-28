import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Sidebar from "@/components/Sidebar";

import Providers from "./providers";
import "./globals.css";
import sty from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "999Movies",
  description: "Movies made simple and trusted!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Sidebar />
          <main className={sty.mainContainer}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
