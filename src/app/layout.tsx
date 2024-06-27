import type { Metadata } from "next";
import { Inter } from "next/font/google";
import sty from "./layout.module.css";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Head from "next/head";

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
      <Head>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
          integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={inter.className}>
        <Sidebar />
        <main className={sty.mainContainer}>{children}</main>
      </body>
    </html>
  );
}
