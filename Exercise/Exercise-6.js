// Kiểm tra số có tối đa 3 chữ số có phải là số đối xứng hay không ?

function isSymmetricNumber(n) {
   if (n < 0 || n > 999) return false; // validate 0->999

   if (n > 0 && n < 10) return true; // từ 1->9 đều là số đối xứng
   const ones = n % 10; //get the unit digit
   const tens = Math.trunc((n % 100) / 10); //get the tens digit
   const hundreds = Math.trunc(n / 100); //get the hundreds digit

   if (n.toString().length === 2 && ones == tens) return true;
   if (n.toString().length === 3 && ones == hundreds) return true;
   else return false;
}

console.log(isSymmetricNumber(-2));
console.log(isSymmetricNumber(0));
console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(101));
console.log(isSymmetricNumber(777));
console.log(isSymmetricNumber(10));
console.log(isSymmetricNumber(100));
console.log(isSymmetricNumber(1000));
