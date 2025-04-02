import Image from "next/image";
import styles from "./page.module.css";
import logo from "@/public/icNews_logo.svg";
import NewsCardContainer from "./_components/NewsCardContainer";

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

      <main className={styles.container}>
        {/* <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <input
              type="text"
              placeholder="뉴스 주제, 키워드, 이슈를 검색하세요"
            />
            <button>검색</button>
          </div>
          <div className={styles.filters}>
            <button className={`${styles.filterButton} ${styles.active}`}>
              모든 주제
            </button>
            <button className={styles.filterButton}>정치</button>
            <button className={styles.filterButton}>경제</button>
            <button className={styles.filterButton}>사회</button>
          </div>
        </div> */}

        <div className={styles.trendingTopics}>
          <h2 className={styles.sectionTitle}>실시간 이슈</h2>
          <div className={styles.topicsList}>
            <div className={styles.topicTag}>대통령 지지율</div>
            <div className={styles.topicTag}>최저임금</div>
            <div className={styles.topicTag}>부동산 정책</div>
            <div className={styles.topicTag}>코로나19</div>
            <div className={styles.topicTag}>북한 미사일</div>
            <div className={styles.topicTag}>세금 인상</div>
            <div className={styles.topicTag}>공공의료</div>
          </div>
        </div>
        <NewsCardContainer />
      </main>

      <footer className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 interchangeNews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
