import styles from "@/app/page.module.css";
import NewsCard from "./NewsCard";
import { Cluster } from "../_types";
import fetchNewsClusters from "../_api/api";
import TopKeywordContainer from "./TopKeywordContainer";

const NewsCardContainer = async () => {
  const response = await fetchNewsClusters();
  const data_values = response.data;

  const allKeywords = data_values.flatMap((cluster) => cluster.keywords);

  const keywordMap = allKeywords.reduce((acc, curr) => {
    const existingCount = acc.get(curr) || 0;
    acc.set(curr, existingCount + 1);
    return acc;
  }, new Map<string, number>());

  // count 기준으로 정렬하여 상위 7개 추출
  const topKeywords = Array.from(keywordMap.entries())
    .map(([keyword, count]) => ({ keyword, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7)
    .map((item) => item.keyword);

  return (
    <main className={styles.container}>
      <TopKeywordContainer
        topKeywords={topKeywords}
        updatedAt={response.updatedAt}
      />
      <div className={styles.newsGrid}>
        {data_values.map((value: Cluster, index) => (
          <NewsCard data={value} key={index} />
        ))}
      </div>
    </main>
  );
};

export default NewsCardContainer;
