export const getBiasText = (bias: number): string => {
  switch (bias) {
    case 1:
      return "진보";
    case 2:
      return "중립";
    case 3:
      return "보수";
    default:
      return "알 수 없음";
  }
};
