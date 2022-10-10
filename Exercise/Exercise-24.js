// PLEASE USE THESE CONSTANTS IN YOUR CODE
// number of available cash in ATM
const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
   if (amount < BASE_UNIT || amount % BASE_UNIT !== 0) return 'Invalid balance';

   const total =
      K500_VALUE * K500_QUANTITY + K200_VALUE * K200_QUANTITY + K100_VALUE * K100_QUANTITY + K50_VALUE * K50_QUANTITY;
   if (amount > total) return 'Insufficient balance from ATM';

   let remaining = amount;

   // k500
   const q500 = remaining > K500_VALUE * K500_QUANTITY ? K500_QUANTITY : Math.trunc(remaining / K500_VALUE);
   remaining -= q500 * K500_VALUE;

   // k200
   const q200 = remaining > K200_VALUE * K200_QUANTITY ? K200_QUANTITY : Math.trunc(remaining / K200_VALUE);
   remaining -= q200 * K200_VALUE;

   // k100
   const q100 = remaining > K100_VALUE * K100_QUANTITY ? K100_QUANTITY : Math.trunc(remaining / K100_VALUE);
   remaining -= q100 * K100_VALUE;

   // k50
   const q50 = remaining / K50_VALUE;

   return {
      k500: q500,
      k200: q200,
      k100: q100,
      k50: q50,
   };
}
console.log(withdraw(1500000));
