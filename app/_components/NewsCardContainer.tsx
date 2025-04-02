import styles from "@/app/page.module.css";
import NewsCard from "./NewsCard";
import { Cluster } from "../_types";
import fetchNewsClusters from "../_api/api";

const NewsCardContainer = async () => {
  const response = await fetchNewsClusters();
  const data_values = response.data;
  return (
    <div className={styles.newsGrid}>
      {data_values.map((value: Cluster, index) => (
        <NewsCard data={value} key={index} />
      ))}
    </div>
  );
};

export default NewsCardContainer;
