// Write a function to check if a number a positive even number
// If yes, return true. Otherwise return false

//ver1 :Kỹ thuật đặt cờ hiệu Flag
function isPositiveEvenNumber(n) {
   let isValid; //undefined

   //checking ...(kiểm tra theo yêu cầu bài toán)
   if (n > 0 && n % 2 === 0) {
      isValid = true;
   } else {
      isValid = false;
   }

   // Trả về kết quả
   return isValid;
}

//ver2
function isPositiveEvenNumber(n) {
   let isValid = false;
   if (n > 0 && n % 2 === 0) {
      isValid = true;
   }

   return isValid;
}

//ver3
function isPositiveEvenNumber(n) {
   if (n > 0 && n % 2 === 0) {
      return true;
   }

   return false;
}

//ver4
function isPositiveEvenNumber(n) {
   return n > 0 && n % 2 === 0;
}

console.log(isPositiveEvenNumber(11));
