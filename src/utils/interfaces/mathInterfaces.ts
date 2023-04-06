export interface MathInput {
  number1: number;
  number2: number;
}
export interface MultipleNumbers {
  numbers: number[];
}

export interface MathResult {
  result: number | string | null;
  errorMessage: string | null;
}
