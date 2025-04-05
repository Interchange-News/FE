"use client";

import { useState } from "react";
import { press_bias_map } from "../_const/press_bias";
import { getBiasText } from "../_utils/press_bias";
import Select from "react-select";
import styles from "./page.module.css";

interface PressOption {
  value: string;
  label: string;
}

export default function PressBiasRequestPage() {
  const [selectedPress, setSelectedPress] = useState("");
  const [suggestedBias, setSuggestedBias] = useState<number>(1);
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pressOptions: PressOption[] = Object.keys(press_bias_map).map(
    (press) => ({
      value: press,
      label: `${press} (현재 성향: ${getBiasText(
        press_bias_map[press as keyof typeof press_bias_map]
      )})`,
    })
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/press-bias-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pressName: selectedPress,
          currentBias:
            press_bias_map[selectedPress as keyof typeof press_bias_map],
          suggestedBias,
          reason,
          email,
          createdAt: new Date(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("요청 제출에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("요청 제출 중 오류가 발생했습니다.");
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <h1>요청이 제출되었습니다</h1>
        <p>언론사 정치 성향 수정 요청이 성공적으로 제출되었습니다.</p>
        <button onClick={() => setIsSubmitted(false)} className={styles.button}>
          새로운 요청 제출하기
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>언론사 정치 성향 수정 요청</h1>
      <p>
        언론사의 정치 성향이 잘못 기재되었다고 생각하시는 경우, 수정을
        요청해주세요. (언론사 정치 성향은 주기적으로 피드백을 받아 수정됩니다.)
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="press">언론사 선택:</label>
          <Select
            id="press"
            options={pressOptions}
            value={pressOptions.find(
              (option) => option.value === selectedPress
            )}
            onChange={(option) => setSelectedPress(option?.value || "")}
            placeholder="언론사를 검색하세요"
            isClearable
            isSearchable
            required
            className={styles.select}
            classNamePrefix="select"
            noOptionsMessage={() => "검색 결과가 없습니다"}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="suggestedBias">제안하는 정치 성향:</label>
          <select
            id="suggestedBias"
            value={suggestedBias}
            onChange={(e) => setSuggestedBias(Number(e.target.value))}
            required
          >
            <option value={1}>진보</option>
            <option value={2}>중립</option>
            <option value={3}>보수</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="reason">수정 요청 이유:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            placeholder="수정이 필요한 이유를 자세히 설명해주세요."
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="연락처로 사용될 이메일을 입력해주세요."
          />
        </div>

        <button type="submit" className={styles.button}>
          수정 요청 제출하기
        </button>
      </form>
    </div>
  );
}
