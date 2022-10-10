// Tìm chữ số lớn nhất của một số nguyên dương

function getMaxDigit(n) {
   if (n < 0 || n >= 1000) return -1;

   // ví dụ là số 145
   const ones = n % 10; //return 5
   const tens = Math.trunc((n % 100) / 10); //return 4 vì (n % 100=45) ; (45/10=4.5)
   const hundreds = Math.trunc(n / 100); // return 1

   let max = ones; //5
   if (tens > max) max = tens;
   if (hundreds > max) max = hundreds;

   return max;
}

console.log(getMaxDigit(145));
