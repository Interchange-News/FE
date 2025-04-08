import styles from "../page.module.css";
const TopKeywordContainer = ({
  topKeywords,
  updatedAt,
}: {
  topKeywords: string[];
  updatedAt: string;
}) => {
  function formatKoreanDateTime(dateString: string): string {
    const utcDate = new Date(dateString);
    const date = new Date(utcDate.getTime());
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Seoul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const parts = new Intl.DateTimeFormat("ko-KR", options).formatToParts(date);
    const getPart = (type: string) =>
      parts.find((p) => p.type === type)?.value || "";

    return `${getPart("year")}년 ${getPart("month")}월 ${getPart(
      "day"
    )}일 ${getPart("hour")}시 ${getPart("minute")}분`;
  }

  return (
    <div className={styles.trendingTopics}>
      <div className={styles.trendingTopicsHeader}>
        <h2 className={styles.sectionTitle}>오늘의 주요 키워드</h2>
        <p className={styles.updatedAt}>
          최근 업데이트 시각: {formatKoreanDateTime(updatedAt)} (업데이트는
          6시간 주기로 이루어집니다.)
        </p>
      </div>
      <div className={styles.topicsList}>
        {topKeywords.map((keyword) => (
          <div className={styles.topicTag} key={keyword}>
            {keyword}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopKeywordContainer;
