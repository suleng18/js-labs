// using for...i
function createArrayInRangeV1(a, b) {
   const range = [];

   for (let i = a; i <= b; i++) {
      range.push(i);
   }

   return range;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
   const length = b - a + 1;
   return Array.from({ length }, (x, idx) => a + idx);
}
console.log(createArrayInRangeV2(5, 10));
