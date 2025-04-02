import styles from "@/app/page.module.css";
import { Cluster } from "../_types";
import Image from "next/image";
import { press_bias_map } from "../_const/press_bias";
import he from "he";

const NewsCard = ({ data }: { data: Cluster }) => {
  const { articles } = data;
  const progressive = [];
  const neutral = [];
  const conservative = [];

  articles.forEach((article) => {
    const bias = press_bias_map[article.pressName] || 2; // 기본값: 중립

    if (bias === 1) {
      progressive.push(article);
    } else if (bias === 2) {
      neutral.push(article);
    } else if (bias === 3) {
      conservative.push(article);
    }
  });

  const p_bias = ((progressive.length / articles.length) * 100).toFixed(1);
  const n_bias = ((neutral.length / articles.length) * 100).toFixed(1);
  const c_bias = ((conservative.length / articles.length) * 100).toFixed(1);

  if (neutral.length === 0) neutral.push(articles[0]);
  if (progressive.length === 0) progressive.push(neutral[0]);
  if (conservative.length === 0) conservative.push(neutral[0]);

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
          <h2 dangerouslySetInnerHTML={{ __html: neutral[0].title }}></h2>
          <div className={styles.headlineMeta}>
            <span>관련 기사 {data.articles.length}개</span>
          </div>
        </div>
      </div>
      <div className={styles.coverageBar}>
        <div className={styles.coverageLiberal} style={{ width: `${p_bias}%` }}>
          진보 {p_bias}%
        </div>
        <div className={styles.coverageNeutral} style={{ width: `${n_bias}%` }}>
          중립 {n_bias}%
        </div>
        <div
          className={styles.coverageConservative}
          style={{ width: `${c_bias}%` }}
        >
          보수 {c_bias}%
        </div>
      </div>

      <div className={styles.articlesContainer}>
        {/* 진보 뉴스 블럭 */}
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <Image
              src={`/press_logos/${progressive[0].pressName}.png`}
              width={50}
              height={50}
              alt={progressive[0].pressName}
              className={styles.articleSourceImg}
            />
            <div className={styles.articleSourceInfo}>
              <h3>{progressive[0].pressName}</h3>
              <span className={`${styles.sourceBias} ${styles.biasLiberal}`}>
                진보 성향
              </span>
            </div>
          </div>
          <h3
            className={styles.articleTitle}
            dangerouslySetInnerHTML={{ __html: progressive[0].title }}
          ></h3>
          <p
            className={styles.articleExcerpt}
            dangerouslySetInnerHTML={{ __html: progressive[0].description }}
          ></p>
          <a href={progressive[0].link} className={styles.readMore}>
            기사 전문 보기
          </a>
        </div>

        {/* 보수 뉴스 블럭 */}
        <div className={styles.article}>
          <div className={styles.articleHeader}>
            <Image
              src={`/press_logos/${conservative[0].pressName}.png`}
              width={50}
              height={50}
              alt={conservative[0].pressName}
              className={styles.articleSourceImg}
            />
            <div className={styles.articleSourceInfo}>
              <h3>{conservative[0].pressName}</h3>
              <span
                className={`${styles.sourceBias} ${styles.biasConservative}`}
              >
                보수 성향
              </span>
            </div>
          </div>
          <h3
            className={styles.articleTitle}
            dangerouslySetInnerHTML={{ __html: conservative[0].title }}
          ></h3>
          <p
            className={styles.articleExcerpt}
            dangerouslySetInnerHTML={{ __html: conservative[0].description }}
          ></p>
          <a href={conservative[0].link} className={styles.readMore}>
            기사 전문 보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
