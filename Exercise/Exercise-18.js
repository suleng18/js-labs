function getDivisorListV1(n) {
   if (n < 1 || n > 1000 || typeof n !== 'number' || !Number.isInteger(n)) return false;
   const result = [];
   for (let i = 1; i <= n; i++) {
      if (n % i === 0) result.push(i);
   }

   return result;
}
console.log(getDivisorListV1(4));
console.log(getDivisorListV1(6));
console.log(getDivisorListV1(8));
console.log(getDivisorListV1(12));

function getDivisorListV2(n) {
   if (n < 1 || n > 1000 || typeof n !== 'number' || !Number.isInteger(n)) return false;

   const length = n - 1 + 1;
   const nerArr = Array.from({ length }, (n, idx) => idx + 1);

   return nerArr.filter((number) => n % number === 0);
}
console.log(getDivisorListV2(4));
console.log(getDivisorListV2(6));
console.log(getDivisorListV2(8));
console.log(getDivisorListV2(12));

function getDivisorListV3(n) {
   if (n < 1 || n > 1000 || typeof n !== 'number' || !Number.isInteger(n)) return false;
   const KQ = [];
   const createArray = Array.from({ length: Math.sqrt(n) }, (v, i) => i + 1);
   createArray.forEach(isDivisor);
   function isDivisor(i) {
      if (Math.sqrt(n) === i) return KQ.push(i);
      if (n % i === 0) return KQ.push(i, n / i);
   }
   return KQ.sort((a, b) => a - b);
}
console.log(getDivisorListV3(4));
console.log(getDivisorListV3(6));
console.log(getDivisorListV3(8));
console.log(getDivisorListV3(12));
