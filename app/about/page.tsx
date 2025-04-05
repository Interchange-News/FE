import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>interchange News</h1>
        <p>같은 주제에 대한 다양한 언론사별 뉴스 관점을 비교해봐요.</p>
      </section>

      <section className={styles.intro}>
        <h2>뉴스의 다양한 관점</h2>
        <p>
          같은 사건이라도 언론사의 정치 성향에 따라 다르게 보도되거나, 아예
          보도되지 않을 수 있습니다. interchange News는 이러한 뉴스의 다양성을
          보여주는 서비스입니다. 현재 이슈가 되는 주제에 대해 각 언론사가
          어떻게, 얼마나 보도했는지 한눈에 비교해볼 수 있습니다.
        </p>
      </section>

      <section className={styles.features}>
        <h2>주요 기능</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>뉴스 정치 성향 분석</h3>
            <p>
              각 언론사의 정치적 성향을 분석하여 진보, 중립, 보수 관점의 뉴스를
              한눈에 비교할 수 있습니다.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>키워드 트렌딩</h3>
            <p>가장 많이 언급되는 키워드를 확인할 수 있습니다.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>언론사별 비교</h3>
            <p>
              같은 뉴스에 대한 각 언론사의 보도 방식을 비교하여 다양한 관점을
              파악할 수 있습니다.
            </p>
          </div>
          <div className={styles.featureCard}>
            <h3>정치 성향 수정 요청</h3>
            <p>
              언론사의 정치 성향이 잘못 분류되었다고 생각되시나요? 언론사 정치
              성향 수정을 요청해보세요.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <h2>우리의 미션</h2>
        <p>
          interchange News는 뉴스의 다양성을 보장하고, 독자들이 다양한 관점에서
          뉴스를 바라볼 수 있도록 돕는 것을 목표로 합니다. 우리는 뉴스의
          객관성과 공정성을 추구하며, 독자들이 더 나은 판단을 내릴 수 있도록
          지원합니다.
        </p>
      </section>
    </div>
  );
}
