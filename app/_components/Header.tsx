"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/public/icNews_logo.svg";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          {/* 183 27, 285 42 */}
          <Image src={logo.src} alt={"icNews_logo"} width={285} height={42} />
        </Link>
        <div className={styles.links}>
          <Link
            href="/"
            className={`${styles.link} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            홈
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            서비스 소개
          </Link>
          <Link
            href="/press-bias-request"
            className={`${styles.link} ${
              pathname === "/press-bias-request" ? styles.active : ""
            }`}
          >
            정치 성향 수정 요청
          </Link>
        </div>
      </nav>
    </header>
  );
}
