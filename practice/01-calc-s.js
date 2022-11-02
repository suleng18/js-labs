// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
// function calc(n) {}
// n <= 0 --> 0
// n > 0 --> 0
// n > 0 --> sum
// n = 1 --> 1
// n = 3 --> 6

export function calcuLatesSum(n) {
  if (n <= 0) return 0;

  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;

  return sum;
}

export function calcuLatesSumV2(n) {
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}
