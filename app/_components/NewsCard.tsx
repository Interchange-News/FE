import styles from "@/app/page.module.css";
import { Cluster } from "../_types";

const NewsCard = ({ data }: { data: Cluster }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsImage}>
        <div className={styles.imageContainer}>
          <img
            src={`${data.mainImage}`}
            className={styles.fullWidthImage}
            alt="News headline image"
          />
        </div>
        <div className={styles.cardShadow}></div>
        <div className={styles.headline}>
          <h2>{}</h2>
          <div className={styles.headlineMeta}>
            <span>관련 기사 {data.articles.length}개</span>
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
        <div className={styles.coverageConservative} style={{ width: "40%" }}>
          보수 40%
        </div>
      </div>
      <div className={styles.articlesContainer}>
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <img
              src="/api/placeholder/40/40"
              alt={data.articles[0].pressName}
              className={styles.articleSourceImg}
            />
            <div className={styles.articleSourceInfo}>
              <h3>{data.articles[0].pressName}</h3>
              <span className={`${styles.sourceBias} ${styles.biasLiberal}`}>
                진보 성향
              </span>
            </div>
          </div>
          <h3 className={styles.articleTitle}>{data.articles[0].title}</h3>
          <p className={styles.articleExcerpt}>
            {data.articles[0].description}
          </p>
          <a href={data.articles[0].link} className={styles.readMore}>
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
            정부 "새 세금정책으로 경제활력 되찾을 것"... 전문가들 긍정 평가
          </h3>
          <p className={styles.articleExcerpt}>
            정부가 발표한 새로운 세금정책은 그동안 경직되었던 세제를 합리적으로
            개편해 경제 활력을 높이는 데 기여할 것이라는 전문가들의 평가가...
          </p>
          <a href="#" className={styles.readMore}>
            기사 전문 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
