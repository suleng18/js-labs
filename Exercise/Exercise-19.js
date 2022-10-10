function isPerfectNumber(n) {
   if (n < 1 || n > 1000 || !Number.isInteger(n)) return false;
   let sum = 0;

   for (let i = 0; i < n; i++) {
      if (n % i === 0) sum += i;
   }

   if (sum === n) return true;

   return false;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(8));
console.log(isPerfectNumber(66));
