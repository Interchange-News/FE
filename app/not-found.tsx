import styles from "./page.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContent}>
        <svg
          className={styles.notFoundIcon}
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 돋보기 */}
          <circle
            cx="85"
            cy="85"
            r="55"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
          <line
            x1="125"
            y1="125"
            x2="170"
            y2="170"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <text
            x="85"
            y="88"
            fontSize="32"
            fontWeight="bold"
            fill="currentColor"
            fontFamily="var(--font-geist-sans)"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            404
          </text>
        </svg>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p>요청하신 페이지가 존재하지 않거나 삭제되었을 수 있습니다.</p>
      </div>
    </div>
  );
};

export default NotFound;
