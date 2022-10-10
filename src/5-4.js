// Logical operators

// Nếu là số dương thì ...
function checkNumber1(n) {
   if (n > 0) {
   }
}

// Nếu là số dương chẳn thì ...
function checkNumber2(n) {
   if (n > 0 && n % 2 === 0) {
   }
}

// Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber3(n) {
   if (n > 0 && n % 2 === 0 && n > 10) {
   }
}

// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkNumber4(n) {
   if (n > 0 && n % 2 === 0 && n % 5 === 0) {
   }
}

// Nếu là số dương chẳn hoặc số âm lẻ thì ...
function checkNumber5(n) {
   const isEvenPositive = n > 0 && n % 2 === 0; // Số dương chẵn
   const isOddNegative = n < 0 && n % 2 !== 0; // Số âm lẻ

   if (isEvenPositive || isOddNegative) {
   }
}
