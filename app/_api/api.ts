import { NewsClusters } from "../_types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
async function fetchNewsClusters(): Promise<NewsClusters> {
  const response = await fetch(`${BASE_URL}/news`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  console.log(response);
  const data: NewsClusters = await response.json(); // JSON 데이터를 변환
  return data;
}

export default fetchNewsClusters;
