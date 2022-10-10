// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

export function calcuLatesSum(n) {
   if (n <= 0) return 0;
   let sum = 0;

   for (let i = 0; i <= n; i++) {
      sum += i;
   }

   return sum;
}

export function calcuLatesSumV2(n) {
   if (n <= 0) return 0;

   return (n * (n + 1)) / 2;
}
