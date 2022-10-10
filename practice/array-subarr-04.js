export function findAllPositiveEvenSubArr(numberList) {
   if (!Array.isArray(numberList) || numberList.length === 0) return [];

   const subArrayList = [];
   let subArray = [];
   for (let i = 0; i < numberList.length; i++) {
      const number = numberList[i];
      if (number % 2 === 0) subArray.push(number);

      //check if we need to reset subbarr
      if (subArray.length > 0 && (number % 2 === 1 || i === numberList.length - 1)) {
         subArrayList.push(subArray);
         subArray = []; // reset subArray
      }
   }

   return subArrayList;
}
console.log(findAllPositiveEvenSubArr([1, 2, 4, 5, 8, 4, 2]));
