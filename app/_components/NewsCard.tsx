"use client";
import styles from "@/app/page.module.css";
import { Cluster } from "../_types";
import Image from "next/image";
import { press_bias_map } from "../_const/press_bias";
import he from "he";
import { useState, useRef } from "react";

const NewsCard = ({ data }: { data: Cluster }) => {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const { articles } = data;
  const progressive = [];
  const neutral = [];
  const conservative = [];
  const showMoreButtonRef = useRef<HTMLButtonElement>(null);

  articles.forEach((article) => {
    const bias =
      (press_bias_map as Record<string, number>)[article.pressName] || 2; // 기본값: 중립

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

  const getBiasTag = (pressName: string) => {
    const bias = (press_bias_map as Record<string, number>)[pressName] || 2;
    if (bias === 1) return "진보";
    if (bias === 2) return "중립";
    return "보수";
  };

  const getBiasClass = (pressName: string) => {
    const bias = (press_bias_map as Record<string, number>)[pressName] || 2;
    if (bias === 1) return styles.biasLiberal;
    if (bias === 2) return styles.biasNeutral;
    return styles.biasConservative;
  };

  const handleShowMore = () => {
    setShowAllArticles(true);
  };

  const handleShowLess = () => {
    setShowAllArticles(false);
    // 더보기 버튼 위치로 스크롤
    setTimeout(() => {
      showMoreButtonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

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
        <div
          className={styles.coverageLiberal}
          style={{ width: `${p_bias}%` }}
          data-percent={`${p_bias}%`}
        >
          <span>진보 {p_bias}%</span>
        </div>
        <div
          className={styles.coverageNeutral}
          style={{ width: `${n_bias}%` }}
          data-percent={`${n_bias}%`}
        >
          <span>중립 {n_bias}%</span>
        </div>
        <div
          className={styles.coverageConservative}
          style={{ width: `${c_bias}%` }}
          data-percent={`${c_bias}%`}
        >
          <span>보수 {c_bias}%</span>
        </div>
      </div>

      <div className={styles.articlesContainer}>
        <div className={styles.representativeArticles}>
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

        {!showAllArticles && articles.length > 2 && (
          <button
            className={styles.showMoreButton}
            onClick={handleShowMore}
            ref={showMoreButtonRef}
          >
            더보기 ({articles.length - 2}개)
          </button>
        )}

        {showAllArticles && (
          <div className={styles.allArticles}>
            {articles.slice(2).map((article, index) => (
              <div key={index} className={styles.article}>
                <div className={styles.articleHeader}>
                  <Image
                    src={`/press_logos/${article.pressName}.png`}
                    width={50}
                    height={50}
                    alt={article.pressName}
                    className={styles.articleSourceImg}
                  />
                  <div className={styles.articleSourceInfo}>
                    <h3>{article.pressName}</h3>
                    <span
                      className={`${styles.sourceBias} ${getBiasClass(
                        article.pressName
                      )}`}
                    >
                      {getBiasTag(article.pressName)} 성향
                    </span>
                  </div>
                </div>
                <h3
                  className={styles.articleTitle}
                  dangerouslySetInnerHTML={{ __html: article.title }}
                ></h3>
                <p
                  className={styles.articleExcerpt}
                  dangerouslySetInnerHTML={{ __html: article.description }}
                ></p>
                <a href={article.link} className={styles.readMore}>
                  기사 전문 보기
                </a>
              </div>
            ))}
            <button className={styles.showLessButton} onClick={handleShowLess}>
              접기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
