import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/public/icNews_logo.svg";
import NewsCardContainer from "./_components/NewsCardContainer";
import TopKeywordContainer from "./_components/TopKeywordContainer";

export default function Home() {
  return (
    <div>
      <header>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              {/* 183 27, 285 42 */}
              <Image
                src={logo.src}
                alt={"icNews_logo"}
                width={285}
                height={42}
              />
            </div>
          </div>
        </div>
      </header>
      <NewsCardContainer />
      <footer className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 interchangeNews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
