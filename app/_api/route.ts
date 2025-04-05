import { NextResponse } from "next/server";
import type { PressBiasRequest } from "../_types/press_bias_request";

export async function POST(request: Request) {
  try {
    const data: PressBiasRequest = await request.json();

    // TODO: 여기에 데이터베이스 저장 로직을 추가하세요.
    // 현재는 콘솔에만 출력합니다.
    console.log("Received bias request:", data);

    return NextResponse.json({
      message: "수정 요청이 성공적으로 제출되었습니다.",
      data,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "요청 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
