//Write a function to get the corresponding fare according to the age (Viết hàm lấy giá vé tương ứng theo số tuổi)
// v1
function getTicketPrice(age) {
   if (age <= 0 || age > 125) return -1;

   let result = '';

   if (age < 6 || age >= 70) result = 0;
   else if (age >= 6 && age <= 12) result = 20000;
   else result = 50000;

   return result;
}

//v2
function getTicketPrice(age) {
   if (age <= 0 || age > 125) return -1;

   if (age < 6 || age >= 70) return 0;
   if (age >= 6 && age <= 12) return 20000;
   return 50000;
}

//v3
function getTicketPrice(age) {
   if (age <= 0 || age > 125) return -1; //Validate arguments

   let result = 50000;
   if (age < 6 || age >= 70) return 0;
   if (age >= 6 && age <= 12) return 20000;

   return result;
}

console.log(getTicketPrice(-122));
console.log(getTicketPrice(125));
console.log(getTicketPrice(4));
console.log(getTicketPrice(70));
console.log(getTicketPrice(7));
console.log(getTicketPrice(67));
