import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import styles from "./page.module.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "interchange News",
  description: "언론사별 뉴스 관점을 비교해봐요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <footer className={styles.container}>
          <div className={styles.footerContent}>
            <p>
              &copy; 2025 interchangeNews. All rights reserved. <br />
              <a
                href="mailto:interchange.news@outlook.com"
                className={styles.footerLink}
              >
                contact us: interchange.news@outlook.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
