// So sánh 2 số nguyên

function compareNumbers(a, b) {
   function isInteger(a, b) {
      return Number.isInteger(a, b);
   }
   if (Number.isInteger(a, b) === false) return 'Invalid';

   if (a < b) return -1;
   if (a == b) return 0;
   return 1;
}

console.log(compareNumbers(3, 2));
console.log(compareNumbers(3.1, 4.5));
