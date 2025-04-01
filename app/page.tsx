import Image from "next/image";
import styles from "./page.module.css";
import logo from "./_assets/icNews_logo.svg";
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
        <div className={styles.newsGrid}>
          {/* News Card 1 */}
          <div className={styles.newsCard}>
            <div className={styles.newsImage}>
              <div className={styles.imageContainer}>
                <img
                  src={
                    "https://imgnews.pstatic.net/image/666/2025/03/25/0000068024_002_20250325200416339.jpg?type=w860"
                  }
                  className={styles.fullWidthImage}
                  alt="News headline image"
                />
              </div>
              <div className={styles.cardShadow}></div>
              <div className={styles.headline}>
                <h2>
                  정부, 새 세금정책 발표... "중산층 부담 완화" vs "부자감세
                  논란"
                </h2>
                <div className={styles.headlineMeta}>
                  <span>관련 기사 32개</span>
                  <span>최근 업데이트: 오늘 오전 11:23</span>
                </div>
              </div>
            </div>
            <div className={styles.coverageBar}>
              <div className={styles.coverageLiberal} style={{ width: "45%" }}>
                진보 45%
              </div>
              <div className={styles.coverageNeutral} style={{ width: "15%" }}>
                중립 15%
              </div>
              <div
                className={styles.coverageConservative}
                style={{ width: "40%" }}
              >
                보수 40%
              </div>
            </div>
            <div className={styles.articlesContainer}>
              <div className={styles.article}>
                <div className={styles.articleHeader}>
                  <img
                    src="/api/placeholder/40/40"
                    alt="한국일보"
                    className={styles.articleSourceImg}
                  />
                  <div className={styles.articleSourceInfo}>
                    <h3>한국일보</h3>
                    <span
                      className={`${styles.sourceBias} ${styles.biasLiberal}`}
                    >
                      진보 성향
                    </span>
                  </div>
                </div>
                <h3 className={styles.articleTitle}>
                  "서민 증세 아닌 부자 감세"... 야당, 새 세금정책 비판
                </h3>
                <p className={styles.articleExcerpt}>
                  정부의 새로운 세금정책이 중산층 지원을 표방하고 있지만,
                  실제로는 고소득층에게 더 큰 혜택이 가는 '부자 감세'라는 비판이
                  제기되고 있다...
                </p>
                <a href="#" className={styles.readMore}>
                  기사 전문 보기
                </a>
              </div>
              <div className={styles.article}>
                <div className={styles.articleHeader}>
                  <img
                    src="/api/placeholder/40/40"
                    alt="조선일보"
                    className={styles.articleSourceImg}
                  />
                  <div className={styles.articleSourceInfo}>
                    <h3>조선일보</h3>
                    <span
                      className={`${styles.sourceBias} ${styles.biasConservative}`}
                    >
                      보수 성향
                    </span>
                  </div>
                </div>
                <h3 className={styles.articleTitle}>
                  정부 "새 세금정책으로 경제활력 되찾을 것"... 전문가들 긍정
                  평가
                </h3>
                <p className={styles.articleExcerpt}>
                  정부가 발표한 새로운 세금정책은 그동안 경직되었던 세제를
                  합리적으로 개편해 경제 활력을 높이는 데 기여할 것이라는
                  전문가들의 평가가...
                </p>
                <a href="#" className={styles.readMore}>
                  기사 전문 보기
                </a>
              </div>
            </div>
          </div>
          {/* News Card 1 */}
          <div className={styles.newsCard}>
            <div className={styles.newsImage}>
              <div className={styles.imageContainer}>
                <img
                  src={
                    "https://imgnews.pstatic.net/image/666/2025/03/25/0000068024_002_20250325200416339.jpg?type=w860"
                  }
                  className={styles.fullWidthImage}
                  alt="News headline image"
                />
              </div>
              <div className={styles.cardShadow}></div>
              <div className={styles.headline}>
                <h2>
                  정부, 새 세금정책 발표... "중산층 부담 완화" vs "부자감세
                  논란"
                </h2>
                <div className={styles.headlineMeta}>
                  <span>관련 기사 32개</span>
                  <span>최근 업데이트: 오늘 오전 11:23</span>
                </div>
              </div>
            </div>
            <div className={styles.coverageBar}>
              <div className={styles.coverageLiberal} style={{ width: "45%" }}>
                진보 45%
              </div>
              <div className={styles.coverageNeutral} style={{ width: "15%" }}>
                중립 15%
              </div>
              <div
                className={styles.coverageConservative}
                style={{ width: "40%" }}
              >
                보수 40%
              </div>
            </div>
            <div className={styles.articlesContainer}>
              <div className={styles.article}>
                <div className={styles.articleHeader}>
                  <img
                    src="/api/placeholder/40/40"
                    alt="한국일보"
                    className={styles.articleSourceImg}
                  />
                  <div className={styles.articleSourceInfo}>
                    <h3>한국일보</h3>
                    <span
                      className={`${styles.sourceBias} ${styles.biasLiberal}`}
                    >
                      진보 성향
                    </span>
                  </div>
                </div>
                <h3 className={styles.articleTitle}>
                  "서민 증세 아닌 부자 감세"... 야당, 새 세금정책 비판
                </h3>
                <p className={styles.articleExcerpt}>
                  정부의 새로운 세금정책이 중산층 지원을 표방하고 있지만,
                  실제로는 고소득층에게 더 큰 혜택이 가는 '부자 감세'라는 비판이
                  제기되고 있다...
                </p>
                <a href="#" className={styles.readMore}>
                  기사 전문 보기
                </a>
              </div>
              <div className={styles.article}>
                <div className={styles.articleHeader}>
                  <img
                    src="/api/placeholder/40/40"
                    alt="조선일보"
                    className={styles.articleSourceImg}
                  />
                  <div className={styles.articleSourceInfo}>
                    <h3>조선일보</h3>
                    <span
                      className={`${styles.sourceBias} ${styles.biasConservative}`}
                    >
                      보수 성향
                    </span>
                  </div>
                </div>
                <h3 className={styles.articleTitle}>
                  정부 "새 세금정책으로 경제활력 되찾을 것"... 전문가들 긍정
                  평가
                </h3>
                <p className={styles.articleExcerpt}>
                  정부가 발표한 새로운 세금정책은 그동안 경직되었던 세제를
                  합리적으로 개편해 경제 활력을 높이는 데 기여할 것이라는
                  전문가들의 평가가...
                </p>
                <a href="#" className={styles.readMore}>
                  기사 전문 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.container}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 interchangeNews. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
