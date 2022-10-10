// 2. Random a number in range of [a, b] với a < b
// min: a
// range: b - a
// [10, 100]
// 10
// 100 - 10 = 90

function randomNumberInRange(a, b) {
   if (a >= b) return -1;

   const random = Math.random() * (b - a);
   return Math.round(random) + a;
}

console.log(randomNumberInRange(100, 1000));
console.log(randomNumberInRange(10, 99));
