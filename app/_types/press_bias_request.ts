export interface PressBiasRequest {
  pressName: string;
  currentBias: number;
  suggestedBias: number;
  reason: string;
  email: string;
  createdAt: Date;
}
