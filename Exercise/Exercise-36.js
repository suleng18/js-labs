function findFirstDuplicate(numberList) {
   if (!Array.isArray(numberList) || numberList.length === 0) return -1;
   const statistics = {};
   for (let i = 0; i < numberList.length; i++) {
      const number = numberList[i];
      if (statistics[number]) return number;
      statistics[number] = true;
   }
   return -1;
}
console.log(findFirstDuplicate([]));
console.log(findFirstDuplicate({}));
console.log(findFirstDuplicate([1, 2, 3]));
console.log(findFirstDuplicate([1, 1, 3]));
console.log(findFirstDuplicate([1, 2, 2, 1]));
