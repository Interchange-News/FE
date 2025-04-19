import { NewsClusters } from "../_types";
import { PressBiasRequest } from "../_types/press_bias_request";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getNewsClusters(): Promise<NewsClusters> {
  const response = await fetch(`${BASE_URL}/news`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: NewsClusters = await response.json(); // JSON 데이터를 변환
  return data;
}

export async function postBiasRequest(requestBody: PressBiasRequest) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/press-bias-request`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (response.ok) {
      return response;
    } else {
      alert("요청 제출에 실패했습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    console.error("Error submitting request:", error);
    alert("요청 제출 중 오류가 발생했습니다.");
  }
}
